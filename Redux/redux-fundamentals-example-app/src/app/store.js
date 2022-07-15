import { configureStore } from '@reduxjs/toolkit';

import todoReducer from '../features/todos/todoSlice';

// Creates store - automatically runs combineReducer() for us and instead let's us just define reducer list mapping
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
