const express = require("express");
const app = express();

app.use("/", require("./routes/routes"));

app.listen(3000, () => {
  console.log("listening on port 3000");
});
