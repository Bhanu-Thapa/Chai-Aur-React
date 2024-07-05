import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyinfo';

function App() {
  // FROM
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('usd');
  const data = useCurrencyInfo(currency);
  const currencyData = Object.keys(data);

  // TO

  const [convertAmount, setConvertAmount] = useState(0);
  const [convertCurrency, setConvertCurrency] = useState('');

  // Conversion Function
  function calculateCurrency() {
    setConvertAmount(amount * data[convertCurrency]);
  }

  return (
    <>
      <InputBox
        label="FROM"
        amountChange={(amount) => setAmount(amount)}
        amount={amount}
        currency={currency}
        currencyChange={(currency) => setCurrency(currency)}
        currencyData={currencyData}
      />

      <InputBox
        label="TO"
        currencyData={currencyData}
        currencyChange={(currency) => setConvertCurrency(currency)}
        currency={convertCurrency}
        amount={convertAmount}
        styles="bg-red-600 text-white"
      />
      <div className="flex justify-center mt-6">
        <button
          className="text-2xl font-bold bg-green-600 text-white p-4 rounded-2xl   hover:bg-red-600 "
          onClick={calculateCurrency}
        >
          CONVERT CURRENCY
        </button>
      </div>
    </>
  );
}

export default App;
