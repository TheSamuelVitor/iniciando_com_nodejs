import { Router, Request, Response } from "express";
import logger from "../utils/logger";

import { addTask, returnAll } from "../controllers/taskController";
const taskRouter = Router();

taskRouter.post("", (req: Request, res: Response) => {
  const { title, description } = req.body;

  if (!title || !description) {
    logger(
      "/task",
      "POST",
      400,
      "requisicao deve conter campos titulo e descricao",
      res
    );
    return;
  }

  try {
    let task = addTask(title, description);
    logger("task", "POST", 201, task, res);
    return;
  } catch (err) {
    logger("/task", "POST", 400, "erro ao adicionar a task", res);
    return;
  }
});

taskRouter.get("", (req: Request, res: Response) => {
  try {
    const tasks = returnAll()
    logger("/task", "GET", 200, tasks, res)
  } catch (error) {
    logger("/task", "GET", 400, error, res);
    return;
  }
})

export default taskRouter;
