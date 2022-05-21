export interface TaskDetail {
  id: string;
  name: string;
  selected: boolean;
}
export interface Tasktate {
  tasks: TaskDetail[];
  isAnySelected: boolean;
}
