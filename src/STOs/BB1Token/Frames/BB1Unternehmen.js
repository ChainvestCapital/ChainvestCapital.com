import "./Design/BB1Unternehmen.css";

import Kachel_Geschäftstätigkeiten from "../../components/Kacheln/Kachel_Geschäftstätigkeiten";
import Kachel_Team from "../../components/Kacheln/Kachel_Team";
import Firmenkonstrukt_Bitbond from "../../../assets/images/Firmenkonstrukt_Bitbond.png";
function BB1Unternehmen(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Unternehmen</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>

      <div id="Unternehmen_content_Wrapper">
        <div id="Unternehmen_content_Wrapper_top">
          <Kachel_Geschäftstätigkeiten />
          <Kachel_Team />
        </div>

        <div id="Unternehmen_content_Wrapper_bottom">
          <div id="Unternehmen_content_Wrapper_bottom_Smalls">
            <div id="Unternehmen_content_Name">
              <h3 id="kleine_kachel_h3">Bitbond Finance</h3>
              <h4 id="kleine_kachel_h4">Name</h4>
            </div>

            <div id="Unternehmen_content_Rechtsform">
              <h3 id="kleine_kachel_h3">GmbH</h3>
              <h4 id="kleine_kachel_h4">Rechtsform</h4>
            </div>
            <div id="Unternehmen_content_Adresse">
              <h3 id="kleine_kachel_h3">Berlin</h3>
              <h4 id="kleine_kachel_h4">Ort</h4>
            </div>
            <div id="Unternehmen_content_Adresse">
              <h3 id="kleine_kachel_h3">2018</h3>
              <h4 id="kleine_kachel_h4">Gründung</h4>
            </div>
          </div>

          <div id="Unternehmen_content_Firmenkonstrukt">
            <img
              src={Firmenkonstrukt_Bitbond}
              id="Unternehmen_content_Firmenkonstruk_img"
            />
            <h4 id="kleine_kachel_h4">Firmenkonstrukt</h4>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default BB1Unternehmen;
