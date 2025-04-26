import React from "react";

function Wrapper({ children }) {
  return (
    <div className="w-96 sm:w-[700px] mx-auto my-15 flex flex-col items-center">
      {children}
    </div>
  );
}

export default Wrapper;
