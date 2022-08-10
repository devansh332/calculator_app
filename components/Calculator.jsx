import React, { useState } from "react";
import Layer1 from "./layers/Layer1";
import Layer2 from "./layers/Layer2";
import Layer3 from "./layers/Layer3";
import Layer4 from "./layers/Layer4";
import Layer5 from "./layers/Layer5";

export const ThemeContext = React.createContext("");

function Calculator() {
  const [currentValue, setCurrentValue] = useState("");
  const context = {
    currentValue,
    setCurrentValue,
  };
  return (
    <ThemeContext.Provider value={{ ...context }}>
      <section className="h-full w-full flex flex-col justify-center align-middle items-center">
        <section className="w-1/2">
          <Layer1></Layer1>
          <Layer2></Layer2>
          <Layer3></Layer3>
          <Layer4></Layer4>
          <Layer5></Layer5>
        </section>
      </section>
    </ThemeContext.Provider>
  );
}

export default Calculator;
