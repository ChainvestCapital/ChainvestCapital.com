import React from "react";
import "./w25_h1.css";

function w25_h1(props) {
  return (
    <div>
      <div id="w25_h1">
        <h3 id="w25_h1_h3">{props.Text}</h3>
        <h5 id="w25_h1_h5">{props.title} </h5>
      </div>
    </div>
  );
}

export default w25_h1;
