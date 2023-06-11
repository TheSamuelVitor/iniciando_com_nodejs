import { Task } from "../models/task";

let tasks: Task[] = [];

/**
 * funcao para adicionar tarefa no registro
 *
 * @param  {[string]} title titulo da task a ser adicionada
 * @param  {[string]} description descricao da task a ser adicionada
 * @return {[Task]} task adicionada
 */
export async function addTask(
  title: string,
  description: string
): Promise<Task> {
  const task: Task = {
    id: tasks.length + 1,
    title: title,
    description: description,
    completed: false,
  };

  tasks.push(task);
  return task;
}

export async function returnAll(): Promise<Task[]> {
  if (tasks.length == 0) {
    throw new Error("nenhuma task cadastrada");
  }

  return tasks;
}
