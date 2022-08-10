import React, { useContext } from "react";
import { ThemeContext } from "./Calculator";

function CalculatorDisplay() {
  const currentContext = useContext(ThemeContext);
  const { currentValue } = currentContext;

  return (
    <div className="border w-full text-right">
      {currentValue ? currentValue : "0"}
    </div>
  );
}

export default CalculatorDisplay;
