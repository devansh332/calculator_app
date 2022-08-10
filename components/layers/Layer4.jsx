import React from "react";
import FunctionKey from "../comman/FunctionKey";
import NumberKey from "../comman/NumberKey";
import FunctionalLayer from "./FunctionalLayer";

function Layer4() {
  const numKeyArray = [1, 2, 3];
  const functionKeyArray = ["*"];

  return (
    <FunctionalLayer
      numKeyArray={numKeyArray}
      functionKeyArray={functionKeyArray}
    />
  );
}

export default Layer4;
