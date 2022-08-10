import React, { useContext } from "react";
import { ThemeContext } from "../Calculator";
import CalculatorDisplay from "../CalculatorDisplay";
import ClearButton from "../ClearButton";

function Layer1() {
  const currentValue = useContext(ThemeContext);
  return (
    <section className="flex space-x-2">
      <CalculatorDisplay></CalculatorDisplay>
      <ClearButton></ClearButton>
    </section>
  );
}

export default Layer1;
