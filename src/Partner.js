import "./Design/Partner.css";
import { Route, Link } from "react-router-dom";
import Top_menue from "./components/navigation/top_menue";

import Footer from "./components/Footer";

import NeutralImg from "./assets/images/Neutralität.png";
import TransparenzImg from "./assets/images/Transparenz.png";
import RegulatorikImg from "./assets/images/Regulatorik.png";

function Partner() {
  return (
    <div>
      <Top_menue />
      <div id="Desktop_Wrapper">
        <div id="Partner_Top_Wrapper">
          <div id="Partner_Top_Wrapper_left">
            <h4 id="Partner_Top_Wrapper_h4">
              So erhalten wir unsere Informationen
            </h4>
          </div>

          <div id="Partner_Top_Wrapper_right">
            <div id="Partner_Top_Wrapper_righ_Button_Wrapper">
              <div id="Partner_Top_Wrapper_righ_Button">
                <h3 id="Partner_Top_Wrapper_righ_Button_h3">Neutralität</h3>
                <div id="Partner_Top_Wrapper_righ_Button_right">
                  <img
                    src={NeutralImg}
                    id="Partner_Top_Wrapper_righ_Button_right_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Partner;
