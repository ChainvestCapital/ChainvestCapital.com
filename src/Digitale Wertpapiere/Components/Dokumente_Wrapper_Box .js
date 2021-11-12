import React from "react";
import DownloadImg from "../../assets/images/DownloadImg.png";
import "./Dokumente_Wrapper_Box.css";

function Dokumente_Wrapper_Box(props) {
  return (
    <div>
      <div id="Dokumente_Wrapper_Box">
        <h3 id="Dokumente_Wrapper_Box_h3">{props.title}</h3>
        <div id="Dokumente_Wrapper_Box_Circle">
          <img src={DownloadImg} id="Dokumente_Wrapper_Box_Circle_IMG" />
        </div>
        <h5 id="Dokumente_Wrapper_Box_h5">{props.text} </h5>
      </div>
    </div>
  );
}

export default Dokumente_Wrapper_Box;
