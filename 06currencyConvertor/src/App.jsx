import './App.css';
import useCurrencyInfo from './hooks/useCurrencyinfo';
import InputBox from './components/InputBox';
import { useState } from 'react';

function App() {
  const currency = useCurrencyInfo('usd');
  const data = Object.keys(currency); // Returns Array

  const [amount, setAmount] = useState(0);

  onChangeAmount(setAmount);

  return (
    <>
      <InputBox
        label="From"
        amount={amount}
        currency={data}
        selectCurrency={'usd'}
      />
    </>
  );
}

export default App;
