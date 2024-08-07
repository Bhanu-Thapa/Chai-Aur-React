import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const data = {
        id: nanoid(),
        text: action.payload,
        isComplete: false,
        isEditable: false,
      };
      state.todos.push(data);
    },

    complete: (state, action) => {
      const id = action.payload;
      const val = state.todos.find((items) => items.id === id);
      if (val) {
        val.isComplete = !val.isComplete;
      }
    },

    // removeTodo: (state, action) => {
    //   state.todos = state.todos.filter((data) => data.id != action.payload);
    // },

    // isEditable: (state, action) => {
    //   state.todos = state.todos.map((item) => {
    //     if (item.id == action.payload) {
    //       if (item.isEditable == false) {
    //         return { ...item, isEditable: true };
    //       } else {
    //         return { ...item, isEditable: false };
    //       }
    //     } else {
    //       return { item };
    //     }
    //   });
    // },
  },
});

// When you define reducers inside createSlice, it automatically generates action creators for you. These action creators are stored in todoSlice.actions.

export const { addTodo, complete } = todoSlice.actions;

// createSlice also automatically generates the slice reducer based on the provided reducers and initial state. The reducer function is used to handle state transitions in the Redux store.
// Reducer: A function that takes the current state and an action, and returns a new state. In your case, the reducer handles the addTodo action.
// createSlice combines all the reducers you define into a single reducer function.
// This combined reducer function is available via todoSlice.reducer.
export default todoSlice.reducer;
