import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function TodoForm() {
  const [task, setTask] = useState('');

  const dispatch = useDispatch();

  function addTask(e) {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask('');
  }

  return (
    <form onSubmit={addTask} className="flex w-3/4 mx-auto ">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border  border-gray-400 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 border-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
