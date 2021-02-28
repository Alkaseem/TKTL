const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const helper = require("./test_helper");
const api = supertest(app);
const Blog = require("../models/blog");
const { response } = require("express");
const blogRouter = require("../controllers/blog");

// console.log(helper.initialBlogs);
// console.log(helper.blogsInDb());

beforeEach(async () => {
  await Blog.deleteMany({});

  const blogObject = helper.initialBlogs.map((blog) => new Blog(blog));
  const promiseArray = blogObject.map((blog) => blog.save());
  await Promise.all(promiseArray);
});

describe("when there is initially some blogs saved", () => {
  test("blogList are returned as json", async () => {
    await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("there are two blogs", async () => {
    const response = await api.get("/api/blogs");
    expect(response.body).toHaveLength(helper.initialBlogs.length);
  });

  test("verifies that the unique identifier property of the blog posts", async () => {
    const response = await api.get("/api/blogs");
    response.toJSON();
    const blog = response.body.map((b) => b);
    expect(blog).toBeDefined();
  });
});

describe("addition of a new blog", () => {
  test("succeeds with valid data", async () => {
    const newBlog = {
      title: "async/await simplifies making async calls",
      author: "shamsu",
      url:
        "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    };

    await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const blogsAtEnd = await helper.blogsInDb();
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);

    const title = blogsAtEnd.map((b) => b.title);
    expect(title).toContain("async/await simplifies making async calls");
  });

  test("fails with status code 400 if data invaild", async () => {
    const newBlog = {
      author: "Nikah",
    };

    const res = await api.post("/api/blogs").send(newBlog);
    expect(res.statusCode).toEqual(400);
    expect(res.body).toContain(title).toBe(undefined);
    expect(res.body).toContain(url).toBe(undefined);
  });

  test("verifies that if the likes property is missing from the request", async () => {
    const response = await api.get("/api/blogs");
    expect(response.body.like).toBe(undefined);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
