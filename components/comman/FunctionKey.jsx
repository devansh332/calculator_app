import React from "react";

function FunctionKey({ symbol, onClick }) {
  return (
    <button
      className="bg-black border-2 text-white w-12 h-12"
      onClick={onClick}
    >
      {symbol}
    </button>
  );
}

export default FunctionKey;
