const express = require("express");
const app = express();
import { ErrorHandler } from "./middleware/errortreatment";

app.use(express.json());
app.use("/", require("./routes/postsRoute"));
app.use(ErrorHandler(error, req, res, next));

app.listen(3000);
