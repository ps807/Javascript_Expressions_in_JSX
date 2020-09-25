import React from "react";
import ReactDOM from "react-dom";

const fName = "Peter";
const lName = "Schneider";

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 9) + 1}</p>
  </div>,
  document.getElementById("root")
);
