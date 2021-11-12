import React from "react";

import "./Risiko_Kachel.css";

function Risiko_Kachel(props) {
  return (
    <div>
      <div id="Risiko_Kachel">
        <h3 id="Risiko_Kachel_h3">{props.title}</h3>

        <h5 id="Risiko_Kachel_h5">{props.text} </h5>
      </div>
    </div>
  );
}

export default Risiko_Kachel;
