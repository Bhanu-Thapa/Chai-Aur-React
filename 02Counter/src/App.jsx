import { useState } from 'react';

import './App.css';

function App() {
  let [count, setCounter] = useState(0);

  let add = () => {
    if (20 > count) {
      setCounter(count + 1);
    }
  };
  let decre = () => {
    if (count != 0) {
      setCounter(count - 1);
    }
  };

  return (
    <>
      <h1>Chai Aur Code</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={add}>Increment {count}</button>
      <button onClick={decre}>Decrement {count}</button>
    </>
  );
}

export default App;
