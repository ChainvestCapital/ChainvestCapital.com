import React from "react";
import "./W50_h2.css";

function w50_h2(props) {
  return (
    <div>
      <div id="w50_h2">
        {" "}
        <img src={props.img} id="w50_h2_img" />
        <h3 id="w50_h2_h3">{props.Text}</h3>
        <h5 id="w50_h2_h5">{props.title} </h5>
      </div>
    </div>
  );
}

export default w50_h2;
