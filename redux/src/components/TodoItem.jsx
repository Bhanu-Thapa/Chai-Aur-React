import { useDispatch } from 'react-redux';
import {
  complete,
  edit,
  editText,
  removeTodo,
} from '../features/todo/todoSlice';
import { useState } from 'react';

function TodoItem({ item }) {
  const dispatch = useDispatch();

  const [msg, setMsg] = useState(item.text);

  return (
    <>
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
          className={`border outline-none w-full bg-transparent rounded-lg 
          ${item.isComplete ? 'line-through' : ''}
          ${item.isEditable ? 'outline-gray-700' : ''}
          `}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          readOnly={!item.isEditable}
        />

        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          disabled={item.isComplete}
          onClick={() => {
            if (item.isEditable) {
              dispatch(editText({ id: item.id, msg: msg }));
            }
            dispatch(edit({ id: item.id, newVal: !item.isEditable }));
          }}
        >
          {item.isEditable ? '📁' : '✏️'}
        </button>

        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => dispatch(removeTodo(item.id))}
        >
          ❌
        </button>
      </div>
    </>
  );
}

export default TodoItem;
