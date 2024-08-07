import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import { TodoContextProvider } from './context/todoContext';
import TodoItem from './components/TodoItem';

function App() {
  const [todo, setTodo] = useState([]);

  function addTodo(todoMsg) {
    setTodo((prev) => [
      { id: Date.now(), todoTask: todoMsg, completed: false },
      ...prev,
    ]);
  }

  useEffect(() => {
    const localDataTodo = JSON.parse(localStorage.getItem('todos'));
    if (localDataTodo && localDataTodo.length > 0) {
      setTodo(localDataTodo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  const completed = (id) => {
    setTodo((prev) =>
      prev.map((prevItem) =>
        prevItem.id === id
          ? { ...prevItem, completed: !prevItem.completed }
          : prevItem
      )
    );
  };

  const editTodo = (id, editMsg) => {
    setTodo((prev) =>
      prev.map((prevItem) =>
        prevItem.id === id ? { ...prevItem, todoTask: editMsg } : prevItem
      )
    );
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((prevItem) => prevItem.id !== id));
  };

  return (
    <TodoContextProvider
      value={{ todo, addTodo, completed, editTodo, deleteTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}

            {todo.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
