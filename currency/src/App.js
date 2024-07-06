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
  const [convertCurrency, setConvertCurrency] = useState('inr');

  // Conversion Function
  function calculateCurrency() {
    setConvertAmount(amount * data[convertCurrency]);
  }

  // swap
  function swap() {
    setConvertCurrency(currency);
    setCurrency(convertCurrency);
  }

  // boolean
  let t = true;

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

      <div className="flex justify-center mt-6 rr">
        <button
          className="text-2xl font-bold bg-gradient-to-b from-green-500 to-red-500  text-white p-4 rounded-2xl "
          onClick={swap}
        >
          SWAP
        </button>
      </div>
      <InputBox
        label="TO"
        currencyData={currencyData}
        currencyChange={(currency) => setConvertCurrency(currency)}
        currency={convertCurrency}
        amount={convertAmount}
        styles="bg-red-600 text-white mt-5"
        isdisable={t}
      />
      <div className="flex justify-center mt-6">
        <button
          className="text-2xl font-bold bg-green-600 text-white p-4 rounded-2xl   hover:bg-red-600 transition-colors duration-700 "
          onClick={calculateCurrency}
        >
          CONVERT CURRENCY
        </button>
      </div>
    </>
  );
}

export default App;
