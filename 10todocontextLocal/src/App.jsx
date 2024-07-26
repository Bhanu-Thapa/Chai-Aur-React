import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import { TodoContextProvider } from './context/todoContext';

function App() {
  const [todo, setTodo] = useState([]);

  function addTodo(todoMsg) {
    setTodo((prev) => [{ id: Date.now(), todoTask: todoMsg }, ...prev]);
  }
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  return (
    <TodoContextProvider value={{ todo, addTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
