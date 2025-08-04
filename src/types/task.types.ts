export type Priority = "low" | "medium" | "high";

export type ITask = {
  id: string;
  name: string;
  priority: Priority;
  completed: boolean;
};
