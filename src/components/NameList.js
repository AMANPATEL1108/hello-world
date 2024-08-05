import React from "react";
import Person from "./Person";

function NameList() {
  //   const names = ["Aman", "Guru", "Rushi"];
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
  const personList = person.map((person) => <Person person={person} />);
  return (
    <div>{personList}</div>
    // <div>
    //   {names.map((name) => (
    //     <h2>{name}</h2>
    //   ))}
    // </div>
  );
}

export default NameList;
