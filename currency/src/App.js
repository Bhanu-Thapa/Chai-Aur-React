import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyinfo';

function App() {
  const data = useCurrencyInfo('inr');
  const currencyData = Object.keys(data);

  const [amount, setAmount] = useState();

  return (
    <>
      <InputBox
        currencyData={currencyData}
        amountChange={(amount) => setAmount(amount)}
        amount={amount}
      />
    </>
  );
}

export default App;
