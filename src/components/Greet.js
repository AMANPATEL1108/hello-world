import React from "react";

// function Greet() {
//   return <h1>Hello Aman</h1>;
// }

// export const Greet = () => {
//   return (
//     <div>Greet</div>
//   )
// }

const Greet = (props) => {
  const { name, heroName } = props;
  // console.log(props);

  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Greet;
