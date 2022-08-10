import React from "react";

function HomeWrapper({ children }) {
  return <div className="flex flex-col h-screen w-full">{children}</div>;
}

export default HomeWrapper;
