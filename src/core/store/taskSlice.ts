import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/task";
import { RootState } from ".";
import { v4 as uuidv4 } from "uuid";

interface TaskSlice {
  tasks: Task[];
}

const initialState: TaskSlice = {
  tasks: JSON.parse(localStorage.getItem("tasks") ?? "[]"),
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, "id">>) => {
      const newTask = { ...action.payload, id: uuidv4() };
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    editTask: (state, action: PayloadAction<{ id: string; task: Partial<Task> }>) => {
      const { id, task } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex > -1) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...task };
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    completeTask: (state, action: PayloadAction<string>) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload);
      if (taskIndex > -1) {
        state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
});

export const { addTask, editTask, deleteTask, completeTask } = taskSlice.actions;
export const selectTask = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;