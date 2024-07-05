function InputBox({
  label,
  amount,
  amountChange,
  currencyData,
  currency,
  currencyChange,
  styles,
}) {
  return (
    <div
      className={` w-2/5 flex justify-between mt-20 mx-auto bg-green-500 rounded-lg py-4 px-4 text-gray-800 ${styles}`}
    >
      <div className=" flex flex-col gap-y-3">
        <label className="text-2xl font-semibold">{label}</label>
        <input
          className="border-2 focus:outline-red-400 text-xl p-2 rounded-lg border-gray-500 text-gray-800"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => amountChange && amountChange(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-y-4 items-center max-h-full ">
        <p className="text-2xl font-bold uppercase">Currency Type</p>
        <select
          className="border-2 border-gray-500 focus:border-red-500 text-xl rounded-md text-black"
          value={currency}
          onChange={(e) => currencyChange && currencyChange(e.target.value)}
        >
          {currencyData.map((data, index) => (
            <option key={index} value={data}>
              {data}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
