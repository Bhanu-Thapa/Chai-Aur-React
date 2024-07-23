import { createContext, useContext } from 'react';

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: 'todo msg',
      completed: false,
    },
  ],
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
