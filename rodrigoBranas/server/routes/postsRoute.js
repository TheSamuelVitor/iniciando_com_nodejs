const express = require("express");
const router = express.Router();
const postsService = require("../service/postsService");

router.get("/posts", async function (req, res, next) {
  try {
    const posts = await postsService.getPosts();
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

router.post("/posts", async function (req, res, next) {
  const post = req.body;
  try {
    const newPost = await postsService.savePost(post);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
});

router.put("/posts/:id", async function (req, res, next) {
  const post = req.body;
  const id = req.params.id;

  try {
    await postsService.updatePost(post, id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.delete("/posts/:id", async function (req, res, next) {
  const id = req.params.id;

  try {
    await postsService.deletePost(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
