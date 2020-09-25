import React from "react";
import ReactDOM from "react-dom";

const name = "Peter";
const luckyNumber = 8;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 9) + 1}</p>
  </div>,
  document.getElementById("root")
);
