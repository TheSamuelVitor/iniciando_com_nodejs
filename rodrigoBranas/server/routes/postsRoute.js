const express = require("express");
const router = express.Router();
const postsService = require('../service/postsService')

router.get("/posts", async function (req, res) {
  const posts = await postsService.getPosts();
  
  res.json(posts)

});

router.get("/posts/:id", (req, res) => {});

router.post("/posts", (req, res) => {});

router.put("/posts/:id", (req, res) => {});

router.delete("posts/:id", (req, res) => {});

module.exports = router;
