import React, { useContext } from "react";
import { ThemeContext } from "./Calculator";

function ClearButton() {
  const currentContext = useContext(ThemeContext);
  const { currentValue, setCurrentValue } = currentContext;
  const onCLickHandler = () => {
    setCurrentValue("");
  };
  return (
    <button onClick={onCLickHandler} className="w-full border-2 bg-red-500">
      CC
    </button>
  );
}

export default ClearButton;
