import React from "react";
import FunctionKey from "../comman/FunctionKey";
import NumberKey from "../comman/NumberKey";
import FunctionalLayer from "./FunctionalLayer";

function Layer2() {
  const numKeyArray = [7, 8, 9];
  const functionKeyArray = ["-"];

  return (
    <FunctionalLayer
      numKeyArray={numKeyArray}
      functionKeyArray={functionKeyArray}
    />
  );
}

export default Layer2;
