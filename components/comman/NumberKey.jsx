import React from "react";

function NumberKey({ num, onClick }) {
  return (
    <button onClick={onClick} className="bg-grey-400 border w-12 h-12">
      {num}
    </button>
  );
}

export default NumberKey;
