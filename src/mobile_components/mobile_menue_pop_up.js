import "./Design/mobile_menue_popup.css";
import { Route, Link } from "react-router-dom";
import Wertpapier from "../assets/images/Wertpapier.png";

import CloseImg from "../assets/images/Close.png";
function mobile_menue_pop_up(props) {
  return props.trigger ? (
    <div>
      <div id="mobile_menue_pop_up_wrapper">
        <div id="mobile_menue_pop_up_White"></div>
        <div id="mobile_menue_pop_up_Content">
          <h2 id="mobile_menue_pop_up_Content_h2">Menü</h2>
          <div id="mobile_menue_pop_up_Content_Wrapper">
            <div id="mobile_menue_pop_up_Content_Menue_Box">
              <img src={Wertpapier} id="mobile_menue_pop_up_Content_Box_img" />
              <h3 id="mobile_menue_pop_up_Content_h3">Über digitale</h3>
              <h3 id="mobile_menue_pop_up_Content_h3_yellow">Wertpapiere</h3>
            </div>
            <div id="mobile_menue_pop_up_Content_Menue_Box">
              <img src={Wertpapier} id="mobile_menue_pop_up_Content_Box_img" />
              <h3 id="mobile_menue_pop_up_Content_h3">Über digitale</h3>
              <h3 id="mobile_menue_pop_up_Content_h3_yellow">Wertpapiere</h3>
            </div>
            <div id="mobile_menue_pop_up_Content_Menue_Box">
              <img src={Wertpapier} id="mobile_menue_pop_up_Content_Box_img" />
              <h3 id="mobile_menue_pop_up_Content_h3">Über digitale</h3>
              <h3 id="mobile_menue_pop_up_Content_h3_yellow">Wertpapiere</h3>
            </div>
            <div id="mobile_menue_pop_up_Content_Menue_Box">
              <img src={Wertpapier} id="mobile_menue_pop_up_Content_Box_img" />
              <h3 id="mobile_menue_pop_up_Content_h3">Über digitale</h3>
              <h3 id="mobile_menue_pop_up_Content_h3_yellow">Wertpapiere</h3>
            </div>
          </div>{" "}
          <div id="mobile_menue_pop_up_Content_Alle">
            <h3 id="mobile_menue_pop_up_Content_Aööe_h3">Alle Projekte</h3>
          </div>
          <div id="Closing_Wrapper">
            <div id="Closing_Wrapper_Circel">
              <img src={CloseImg} id="Closing_Wrapper_Circle_Img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default mobile_menue_pop_up;
