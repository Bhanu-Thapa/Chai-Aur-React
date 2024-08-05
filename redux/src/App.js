import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <h1 className="text-3xl font-bold text-green-600 text-center pt-7 pb-7">
        TODO APP
      </h1>
      <TodoForm />
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default App;
