import "./Design/Kachel_Unternehmen.css";

import Unternehmen from "../../../assets/images/Unternehmen.png";

function Kachel_Unternehmen(props) {
  return (
    <div>
      <div id="Kachel_Unternehmen">
        <div id="Kachel_Unternehmen_top">
          <div id="Kachel_Unternehmen_topleft">
            <h3 id="Kachel_Unternehmen_h3">{props.title}</h3>
          </div>

          <div id="Kachel_Unternehmen_topright">
            <img src={Unternehmen} id="Kachel_Unternehmen_topright_img" />
          </div>
        </div>
        <div id="Kachel_Unternehmen_bottom">
          <h3 id="Kachel_Unternehmen_h4">{props.text} </h3>
        </div>
      </div>
    </div>
  );
}

export default Kachel_Unternehmen;
