const express = require("express");
const app = express();

app.use(express.json())
app.use("/", require("./routes/postsRoute"));

app.listen(3000);
