const postsData = require("../data/postsData");

exports.getPosts = function () {
  return postsData.getPosts();
};

exports.getPost = async function (id) {
  const post = await postsData.getPost(id);
  if (!post) throw new Error("Post not found");
  return post;
};

exports.savePost = async function (post) {
  const existingPost = await postsData.getPostByTitle(post.title);
  if (existingPost) throw new Error("Post already exists");
  return postsData.savePost(post);
};

exports.deletePost = async function (id) {
  await exports.getPost(id);
  return postsData.deletePost(id);
};

exports.updatePost = async function (post, id) {
  await exports.getPost(id);
  return postsData.updatePost(id, post);
};
