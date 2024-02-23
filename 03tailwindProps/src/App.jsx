import './App.css';
import Card from './components/Card.jsx';
function App() {
  // const myObj = {
  //   style: 'Rep',
  //   age: 23,
  // };

  // const myArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Bhanu Thapa
      </h1>
      <Card myName="Bhanu" btnText="Click Me" />
      <Card myName="Taddy" />
    </>
  );
}

export default App;
