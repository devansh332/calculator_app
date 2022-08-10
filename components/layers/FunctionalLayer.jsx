import React from "react";
import FunctionKey from "../comman/FunctionKey";
import NumberKey from "../comman/NumberKey";

function FunctionalLayer({ numKeyArray, functionKeyArray }) {
  return (
    <section className="flex justify-center space-x-4">
      {numKeyArray.map((numKey) => (
        <NumberKey key={numKey} num={numKey} onClick={() => {}} />
      ))}
      {functionKeyArray.map((numKey) => (
        <FunctionKey key={numKey} symbol={numKey} onClick={() => {}} />
      ))}
    </section>
  );
}

export default FunctionalLayer;
