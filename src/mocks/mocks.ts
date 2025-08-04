import { ITask } from "../types/task.types";

export const tasksMock: ITask[] = [
  { id: "1", name: "Estudar TypeScript", priority: "high", completed: false },
  { id: "2", name: "Fazer compras", priority: "medium", completed: true },
  { id: "3", name: "Revisar projeto", priority: "low", completed: false },
];
