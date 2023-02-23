const express = require("express");
const router = express.Router();
const postsService = require("../service/postsService");

router.get("/posts", async function (req, res) {
  const posts = await postsService.getPosts();
  res.json(posts);
});

router.post("/posts", async function (req, res) {
  const post = req.body;
  const newPost = await postsService.savePost(post);
  res.json(newPost);
});

router.put("/posts/:id", async function (req, res) {
  const post = req.body;
  const id = req.params.id;

  await postsService.updatePost(post, id);

  res.end();
});

router.delete("/posts/:id", async function (req, res) {
  const id = req.params.id;
  await postsService.deletePost(id);

  res.json({
    message: "Post deletado com sucesso",
  });
});

module.exports = router;
