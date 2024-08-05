import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hello AMAN</h1>
  //     </div>
  //   );

  return React.createElement(
    "div",
    { id: "hello", class: "dummyClass" },
    React.createElement("h1", "null", "Hello Aman")
  );
};

export default Hello;
