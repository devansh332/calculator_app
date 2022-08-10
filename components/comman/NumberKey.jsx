import React, { useContext } from "react";
import { ThemeContext } from "../Calculator";

function NumberKey({ num }) {
  const currentContext = useContext(ThemeContext);
  const { currentValue, setCurrentValue } = currentContext;
  const onCLickHandler = () => {
    setCurrentValue((prev) => prev + num);
  };
  return (
    <button onClick={onCLickHandler}  className="bg-grey-400 border w-12 h-12">
      {num}
    </button>
  );
}

export default NumberKey;
