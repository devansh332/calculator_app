import React from "react";
import FunctionKey from "../comman/FunctionKey";
import NumberKey from "../comman/NumberKey";
import FunctionalLayer from "./FunctionalLayer";

function Layer5() {
  const numKeyArray = [".", 0];
  const functionKeyArray = ["=", "/"];

  return (
    <FunctionalLayer
      numKeyArray={numKeyArray}
      functionKeyArray={functionKeyArray}
    />
  );
}

export default Layer5;
