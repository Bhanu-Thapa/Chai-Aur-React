import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducers: todoReducer,
});

// export const store = configureStore({
//   reducer: {
//     todo: todoReducer,
//   },
// });
