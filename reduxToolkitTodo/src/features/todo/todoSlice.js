import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      text: 'hello world',
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
  },
});

// When you define reducers inside createSlice, it automatically generates action creators for you. These action creators are stored in todoSlice.actions.

export const { addTodo } = todoSlice.actions;

// createSlice also automatically generates the slice reducer based on the provided reducers and initial state. The reducer function is used to handle state transitions in the Redux store.
// Reducer: A function that takes the current state and an action, and returns a new state. In your case, the reducer handles the addTodo action.
// createSlice combines all the reducers you define into a single reducer function.
// This combined reducer function is available via todoSlice.reducer.
export default todoSlice.reducer;
