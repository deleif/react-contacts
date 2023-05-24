import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (thunkAPI) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=50"
    );
    const data = await response.json();
    return data;
  }
);

const initialState = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks: (state) => state,
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      return state.filter((task) => task.id !== taskId);
    },
    changeTask: (state, action) => {
      const taskId = action.payload;
      state.map((task) => {
        if (task.id === taskId) {
          task.completed = !task.completed;
        }
        return task;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export const { getTasks, addTask, deleteTask, changeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
