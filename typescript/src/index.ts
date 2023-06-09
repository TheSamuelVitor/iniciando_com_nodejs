import express from "express"
import taskRouter from "./routes/tasks";

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use("/tasks", taskRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
