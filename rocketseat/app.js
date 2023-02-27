const express = require("express");

const app = express();

app.use("/", require("./routes/produtoRoutes"))

app.listen(3000, () => {
  console.log("listening on port 3000");
});
