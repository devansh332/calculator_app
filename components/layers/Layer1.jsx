import React from "react";
import CalculatorDisplay from "../CalculatorDisplay";
import ClearButton from "../ClearButton";

function Layer1() {
  return (
    <section className="flex space-x-2">
      <CalculatorDisplay></CalculatorDisplay>
      <ClearButton></ClearButton>
    </section>
  );
}

export default Layer1;
