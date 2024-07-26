import { createContext, useContext } from 'react';

export const TodoContext = createContext({
  todo: [],
  addTodo: () => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
