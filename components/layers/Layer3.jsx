import React from "react";
import FunctionKey from "../comman/FunctionKey";
import NumberKey from "../comman/NumberKey";
import FunctionalLayer from "./FunctionalLayer";

function Layer3() {
  const numKeyArray = [4, 5, 6];
  const functionKeyArray = ["+"];

  return (
    <FunctionalLayer
      numKeyArray={numKeyArray}
      functionKeyArray={functionKeyArray}
    />
  );
}

export default Layer3;
