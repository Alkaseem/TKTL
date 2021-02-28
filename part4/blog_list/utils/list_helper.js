const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const likes = [];
  blogs.map((blog) => likes.push(blog.likes));
  return likes.reduce((a, b) => a + b, 0);
};

const favoriteBlog = (blogs) => {
  const likes = [];
  blogs.map((blog) => likes.push(blog.likes));
  const mostlikes = Math.max.apply(null, likes);
  return blogs.find((b) => b.likes === mostlikes);
};

const mostBlogs = () => {};
const mostLikes = () => {};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
