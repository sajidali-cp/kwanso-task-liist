import { createSlice } from "@reduxjs/toolkit";
import { TaskDetail, Tasktate } from "../types/TaskTypes";

const initialState: Tasktate = {
  tasks: [],
  isAnySelected: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    createTask: (state, { payload }) => {
      state.tasks = [payload, ...state.tasks];
    },
    updateTask: (state, { payload }) => {
      debugger;
      const temp = state.tasks.map((task: TaskDetail) => {
        if (task.id === payload.item.id) {
          task.selected = payload.checked;
        }
        return task;
      });
      const selected = temp.filter((item) => item.selected);
      if (selected.length > 0) state.isAnySelected = true;
      else state.isAnySelected = false;
      state.tasks = temp;
    },
    deleteTask: (state, { payload }) => {
      debugger;
      const temp = payload.filter((item: any) => !item.selected);
      const selected = temp.filter((item: any) => item.selected);
      if (selected.length > 0) state.isAnySelected = true;
      else state.isAnySelected = false;
      state.tasks = temp;
    },
  },
});

export const { createTask, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
