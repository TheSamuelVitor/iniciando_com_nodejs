const express = require("express");
const app = express();

app.use(express.json());
app.use("/", require("./routes/postsRoute"));

app.use(function (error, req, res, next) {
  if (error.message == "Post not found") {
    return res.status(404).send(error.message);
  }

  if (error.message == "Post already exists") {
    return res.status(409).send(error.message);
  }

  return res.status(500).send(error);
});

app.listen(3000);
