import Top_menue from "../components/navigation/top_menue";
import Top_Menue_Bar from "../components/navigation/Top_Nav_Bar";
import Unternehmen from "../assets/images/Unternehmen.png";
import Risiko from "../assets/images/PL_Risiko.png";
import Dokumente from "../assets/images/Dokumente.png";
import Token from "../assets/images/Unternehmen.png";
import Rechtlich from "../assets/images/Rechtlich.png";

import "./Muster.css";

function Kategorien_Filter() {
  return (
    <div>
      <div id="Desktop_Wrapper">
        <Top_Menue_Bar />
        <div id="Projekt_Top_Fix_Section">
          <div id="Projekt_Top_Fix_Section_BG"></div>
          <div id="Projekt_Top_Fix_Section_Content">Top Fix Section</div>
        </div>
        <div id="Projekt_Projekt_Section_Wrapper">
          <div id="Projekt_Starting_Frame">Starting Frame</div>
          <div id="Projekt_After_Start_Ansicht">
            <div id="Projekt_Left_Menue">
              <div id="Projekt_Left_Menue_Row">
                <img src={Unternehmen} id="Projekt_Left_Menue_Row_img" />
                <h3 id="Projekt_Left_Menue_Row_h3">Unternehmen</h3>
              </div>{" "}
              <div id="Projekt_Left_Menue_Row">
                <img src={Token} id="Projekt_Left_Menue_Row_img" />
                <h3 id="Projekt_Left_Menue_Row_h3">Token</h3>
              </div>
              <div id="Projekt_Left_Menue_Row">
                <img src={Dokumente} id="Projekt_Left_Menue_Row_img" />
                <h3 id="Projekt_Left_Menue_Row_h3">Dokumente</h3>
              </div>
              <div id="Projekt_Left_Menue_Row">
                <img src={Rechtlich} id="Projekt_Left_Menue_Row_img" />
                <h3 id="Projekt_Left_Menue_Row_h3">Rechtlich</h3>
              </div>
              <div id="Projekt_Left_Menue_Row">
                <img src={Risiko} id="Projekt_Left_Menue_Row_img" />
                <h3 id="Projekt_Left_Menue_Row_h3">Risiko</h3>
              </div>
            </div>

            <div id="Projekt_Right_Content">Right Content</div>
          </div>
        </div>
      </div>

      <div id="Mobile_Wrapper">Mobile</div>
    </div>
  );
}

export default Kategorien_Filter;
