import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('brown');
  return (
    <header className="header" style={{ backgroundColor: color }}>
      <div className="menu">
        <p
          style={{ backgroundColor: 'red' }}
          onClick={() => {
            setColor('red');
          }}
        >
          red
        </p>
        <p
          style={{ backgroundColor: 'green' }}
          onClick={() => {
            setColor('green');
          }}
        >
          green
        </p>
        <p
          style={{ backgroundColor: 'yellow' }}
          onClick={() => setColor('yellow')}
        >
          yellow
        </p>
        <p
          style={{ backgroundColor: 'olive' }}
          onClick={() => setColor('olive')}
        >
          olive
        </p>
        <p
          style={{ backgroundColor: 'blue' }}
          onClick={() => {
            setColor('blue');
          }}
        >
          blue
        </p>
        <p
          style={{ backgroundColor: 'pink' }}
          onClick={() => {
            setColor('pink');
          }}
        >
          pink
        </p>
        <p
          style={{ backgroundColor: 'black' }}
          onClick={() => {
            setColor('black');
          }}
        >
          black
        </p>
      </div>
    </header>
  );
}

export default App;
