import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
  filters: {
    status: 'Active',
    flags: ['None', 'Green', 'Blue', 'Purple', 'Red'], // No flag, todo but not urgent, todo and urgent, todo and very urgent, todo and now
  },
};

// Todo reducer
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // Creates nested reducers or the "Switch" and also automatically creates action creators for us
  reducers: {
    todoAdded: (state, action) => {},
    todoToggled: (state, action) => {},
    todoDeleted: (state, action) => {},
    todoCompletedAll: (state, action) => {},
    todoClearedAll: (state, action) => {},
    todoFlagged: (state, action) => {},
  },
});

export const {
  todoAdded,
  todoToggled,
  todoDeleted,
  todoCompletedAll,
  todoClearedAll,
  todoFlagged,
} = todoSlice.actions;

export default todoSlice.reducer;
