import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-green-600">Hello world!</h1>
      <TodoForm />
      <TodoItem />
    </>
  );
}

export default App;
