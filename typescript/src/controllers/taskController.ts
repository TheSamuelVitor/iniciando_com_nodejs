import { Task } from "../models/task";

let tasks: Task[] = []

function addTask(title: string, description: string): Task {

  const task: Task = {
    id: tasks.length + 1,
    title: title,
    description: description,
    completed: false
  }

  tasks.push(task)
  return task;
}

export default addTask;