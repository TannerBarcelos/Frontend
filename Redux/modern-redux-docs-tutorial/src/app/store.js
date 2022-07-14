import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';

// runs combine reducers to create state.counter, etc
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Will hole the current state at any point in time
export const RootState = store.getState();

// This store is to be imported in main.js
