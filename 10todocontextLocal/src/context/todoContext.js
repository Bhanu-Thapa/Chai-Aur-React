import { createContext, useContext } from 'react';

export const TodoContext = createContext({
  todo: [],
  addTodo: () => {},
  compeleted: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
