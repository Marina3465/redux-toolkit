import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  description: string;
}

interface TodoState {
  todos: Todo[];
  selectedTodo: Todo | null;
}
const loadTodos = (): Todo[] => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

const initialState: TodoState = {
  todos: loadTodos(),
  selectedTodo: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ title: string; description: string }>
    ) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
      };
      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((res) => res.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
      if (state.selectedTodo?.id === action.payload) {
        state.selectedTodo = null;
      }
    },
    selectTodo: (state, action: PayloadAction<number>) => {
      state.selectedTodo =
        state.todos.find((res) => res.id === action.payload) || null;
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: number; description: string }>
    ) => {
      const todo = state.todos.find((res) => res.id === action.payload.id);
      if (todo) {
        todo.description = action.payload.description;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, removeTodo, selectTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
