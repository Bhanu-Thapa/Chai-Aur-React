import { useDispatch, useSelector } from 'react-redux';
import { complete } from '../features/todo/todoSlice';

function TodoItem() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((item) => (
        <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black 
          ${item.isComplete ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'}`}
          key={item.id}
        >
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => dispatch(complete(item.id))}
          />

          <input
            type="text"
            className={`border outline-none w-full bg-transparent rounded-lg `}
            value={item.text}
          />

          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            // onClick={() => deleteTodo(todo.id)}
          >
            ❌
          </button>
        </div>
      ))}
    </>
  );
}

export default TodoItem;
