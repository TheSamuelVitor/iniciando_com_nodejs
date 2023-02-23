const axios = require("axios");
const crypto = require("crypto");
const postService = require("../service/postsService");

const generate = function () {
  return crypto.randomBytes(20).toString("hex");
};

const request = function (url, method, data) {
  return axios({ url, method, data });
};

test("should get posts", async function () {
  const post1 = await postService.savePost({
    title: generate(),
    content: generate(),
  });

  const post2 = await postService.savePost({
    title: generate(),
    content: generate(),
  });

  const post3 = await postService.savePost({
    title: generate(),
    content: generate(),
  });

  const response = await request("http://localhost:3000/posts", "get");

  const posts = response.data;

  expect(posts).toHaveLength(3);

  postService.deletePost(post1.id);
  postService.deletePost(post2.id);
  postService.deletePost(post3.id);
});

test("should save posts", async function () {
  const data = {
    title: generate(),
    content: generate(),
  };

  const response = await request("http://localhost:3000/posts", "post", data);

  const post = response.data;

  expect(post.title).toBe(data.title);
  expect(post.content).toBe(data.content);

  postService.deletePost(post.id);
});

test("should update posts", async function () {
  const post = await postService.savePost({
    title: generate(),
    content: generate(),
  });

  post.title = generate();
  post.content = generate();

  await request(`http://localhost:3000/posts/${post.id}`, "put", post);

  const updatedPost = await postService.getPost(post.id);

  expect(updatedPost.title).toBe(post.title);
  expect(updatedPost.content).toBe(post.content);

  postService.deletePost(post.id);
});

test("should delete post", async function () {
  const post = await postService.savePost({
    title: generate(),
    content: generate(),
  });

  await request(`http://localhost:3000/posts/${post.id}`, "delete");

  const posts = await postService.getPosts();
  expect(posts).toHaveLength(0)

});

