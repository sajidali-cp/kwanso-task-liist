import { createSlice } from "@reduxjs/toolkit";
import { Tasktate } from "../types/TaskTypes";

const initialState: Tasktate = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    createTask: (state, { payload }) => {
      state.tasks = [payload, ...state.tasks];
    },
    deleteTask: (state, { payload }) => {
      state.tasks = payload;
    },
  },
});

export const { createTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
