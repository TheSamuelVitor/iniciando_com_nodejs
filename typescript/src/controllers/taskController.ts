import { Task } from "../models/task";

let tasks: Task[] = []

/**
 * funcao para adicionar tarefa no registro
 *
 * @param  {[string]} title titulo da task a ser adicionada
 * @param  {[string]} description descricao da task a ser adicionada
 * @return {[Task]} task adicionada 
 */
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