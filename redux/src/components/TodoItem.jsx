import { useDispatch } from 'react-redux';
import { completeTodo } from '../features/todo/todoSlice';

function TodoItem({ item }) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black 
        ${item.isComplete ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'}`}
        key={item.id}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={item.isComplete}
          onChange={() => dispatch(completeTodo(item.id))}
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg 
          ${item.isComplete ? 'line-through' : ''}
          `}
          // ${isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'}

          // value={todoMsg}
          // onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={true}
          value={item.text}
          // readOnly={item.isEditable}
        />
        {/* Edit, Save Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          // onClick={() => {
          //   if (todo.completed) return;

          //   if (isTodoEditable) {
          //     editTodo();
          //   } else setIsTodoEditable((prev) => !prev);
          // }}
          // disabled={item.completed}

          // onClick={() => dispatch(isEditable(item.id))}
        >
          {item.isEditable ? '📁' : '✏️'}
        </button>
        {/* Delete Todo Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          // onClick={() => deleteTodo(todo.id)}
          // onClick={() => dispatch(removeTodo(item.id))}
        >
          ❌
        </button>
      </div>
    </>
  );
}

export default TodoItem;
