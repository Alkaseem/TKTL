const blogRouter = require("express").Router();
const Blog = require("../models/blog");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const middleware = require("../utils/middleware");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

blogRouter.get("/", async (request, response, next) => {
  try {
    const blogs = await Blog.find({}).populate("user", {
      name: 1,
      username: 1,
    });
    response.json(blogs);
  } catch (exception) {
    next(exception);
  }
});

blogRouter.post("/", async (request, response, next) => {
  try {
    const body = request.body;
    const user = await User.findById(request.user.id);

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      user: user._id,
    });

    const savedBlog = await blog.save();
    user.blogs = user.blogs.concat(savedBlog._id);
    await user.save();
    response.status(201).json(savedBlog);
  } catch (exception) {
    next(exception);
  }
});

blogRouter.put("/:id", async (request, response, next) => {
  try {
    const blogUpdate = request.body;
    const blog = await Blog.findByIdAndUpdate(request.params.id, blogUpdate, {
      new: true,
    });
    const updatedBlog = await blog.save();
    response.status(201).json(updatedBlog);
  } catch (exception) {
    next(exception);
  }
});

blogRouter.delete("/:id", async (request, response, next) => {
  // 603bd86862fdae0c2172d591
  // 603bd7089189080bc688da9c
  try {
    const blog = await Blog.findById(request.params.id);
    if (blog.user.toString() === request.user.id.toString()) {
      await Blog.findByIdAndRemove(blog.id, {
        new: true,
      });
      response.status(204).json({ msg: "Successfuly Deleted" });
    } else {
      response
        .status(401)
        .json({ msg: "You can't delete blog that you didn't create" });
    }
  } catch (exception) {
    next(exception);
  }
});

module.exports = blogRouter;
