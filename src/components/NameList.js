import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Aman", "Guru", "Rushi", "Aman"];
  const person = [
    {
      id: 1,
      name: "Aman",
      age: 22,
      skill: "java",
    },
    {
      id: 2,
      name: "guru",
      age: 21,
      skill: "React",
    },
    {
      id: 3,
      name: "jay",
      age: 20,
      skill: "php",
    },
  ];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return (
    <div>
      <div>{nameList}</div>
    </div>
    // <div>
    //   {names.map((name) => (
    //     <h2>{name}</h2>
    //   ))}
    // </div>
  );
}

export default NameList;
