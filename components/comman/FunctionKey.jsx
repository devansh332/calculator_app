import React, { useContext } from "react";
import { evil } from "../../utils/evil";
import { ThemeContext } from "../Calculator";

function FunctionKey({ symbol }) {
  const currentContext = useContext(ThemeContext);
  const { currentValue, setCurrentValue } = currentContext;
  const onCLickHandler = () => {
    if (symbol === "=") {
      setCurrentValue(evil(currentValue));
    } else {
      setCurrentValue((prev) => prev + symbol);
    }
  };
  return (
    <button
      className="bg-black border-2 text-white w-12 h-12"
      onClick={onCLickHandler}
    >
      {symbol}
    </button>
  );
}

export default FunctionKey;
