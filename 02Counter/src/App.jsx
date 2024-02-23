import { useState } from 'react';

import './App.css';

function App() {
  let [count, setCounter] = useState(0);

  let add = () => {
    if (20 > count) {
      //////////  INTERVIEW QUESTION  ///////////////
      // setCounter(count + 1);
      // setCounter(count + 1);
      // setCounter(count + 1);
      // setCounter(count + 1);
      // +1 ONLY , WHEN THEY SEE SAME CODE OR WORK, THEN ITS RETURN IN BATCH (PACK).

      // #hiddenFeature setCounter take callback function
      // prevcounter take last updated set (count)
      setCounter((prevCounter) => prevCounter + 1);
      // 1ST LINE CODE FINISH AND RETURN THE VALUE AND SO ON
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
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
