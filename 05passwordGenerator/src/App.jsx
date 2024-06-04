import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [length, setLength] = useState(8);
  let [number, setNumber] = useState(false);
  console.log(number);
  let [char, setChar] = useState(false);
  console.log(char);
  let [password, setPassword] = useState('');

  useEffect(() => {
    let pass = '';
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (number) {
      alpha += '123456789';
    }

    if (char) {
      alpha += '?/.,{}[])(*%$&@#!';
    }

    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * alpha.length + 1);
      pass += alpha.charAt(random);
    }

    setPassword(pass);
  }, [length, number, char]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>

        {/* Main input text field and Button here */}

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            value={password}
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          {/* Range */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={16}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          {/* NUMBER  CHECKBOXS */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              onChange={() => {
                setNumber((prevNum) => !prevNum);
              }}
            />
            <label>Numbers</label>
          </div>

          {/* SPECIAL CHARCTER CHECKBOX */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              onChange={() => {
                setChar((prevChar) => !prevChar);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
