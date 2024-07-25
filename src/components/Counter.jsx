import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0.0);
  const handleCounterI = () => {
    setCounter(counter + 0.5);
  };

  const handleCounterD = () => {
    setCounter(counter - 0.5);
  };
  return (
    <div className="flex items-center">
      <span
        className={
          counter <= 0
            ? `m-3 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-red-600/10 text-red-700 bg-red-50`
            : `m-3 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-blue-600/10 text-blue-700 bg-blue-50`
        }
      >
        {parseFloat(counter)}
      </span>
      <button
        onClick={handleCounterI}
        className="m-1 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
      >
        Increase
      </button>
      <button
        onClick={handleCounterD}
        className="m-1 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
      >
        Decrease
      </button>
    </div>
  );
};
export default Counter;
