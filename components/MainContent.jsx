import React from "react";
import Calculator from "./Calculator";
import CalculatorPhoto from "./CalculatorPhoto";

function MainContent() {
  return (
    <div className="border grow flex flex-1 flex-col-reverse h-96 w-full sm:flex-row">
      <CalculatorPhoto />
      <Calculator />
    </div>
  );
}

export default MainContent;
