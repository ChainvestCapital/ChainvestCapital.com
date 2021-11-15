import React from "react";

import "./Rechtliche_Kachel.css";

function Rechtlich_Kachel(props) {
  return (
    <div>
      <div id="Rechtlich_Kachel">
        <h3 id="Rechtlich_Kachel_h3">{props.title}</h3>

        <h5 id="Rechtlich_Kachel_h5">{props.Text} </h5>
      </div>
    </div>
  );
}

export default Rechtlich_Kachel;
