import React from "react";
import "./Top_Section.css";
import Logo_White from "../../assets/images/Logo_White.png";

import arrow from "../../assets/images/Arrow_white.png";

function Top_Section(props) {
  return (
    <div>
      <div id="Projekt_Top_Fix_Section">
        <div id="Projekt_Top_Fix_Section_BG">
          <img src={props.titleImg} id="Projekt_Top_Fix_Section_BG_IMG" />
        </div>
        <div id="Projekt_Top_Fix_Section_Content">
          <div id="Projekt_Top_Fix_Section_Content_inner">
            <div id="Projekt_Top_Fix_Section_Content_left">
              <div id="Projekt_Top_Fix_Section_Content_left_Logo_Wrapper">
                <img
                  src={props.Logo}
                  id="Projekt_Top_Fix_Section_Content_left_Img"
                />
              </div>
              <div id="Projekt_Top_Fix_Section_Content_left_Kategorie_Wrapper">
                <h3 id="Projekt_Top_Fix_Section_Content_left_Kategorie_h3">
                  {props.Kategorie}
                </h3>
                <img
                  src={props.KategorieImg}
                  id="Projekt_Top_Fix_Section_Content_left_Kategorie_img"
                />
              </div>
            </div>

            <div id="Projekt_Top_Fix_Section_Content_mid">
              <div id="Projekt_Top_Fix_Section_Content_mid_Wrapper">
                <h3 id="Projekt_Top_Fix_Section_Content_mid_h3">
                  {props.beschreibung}
                </h3>
              </div>
            </div>
            <div id="Projekt_Top_Fix_Section_Content_right">
              <div id="Projekt_Top_Fix_Section_Content_right_Wrapper">
                <div id="Projekt_Top_Fix_Section_Content_right_left">
                  <div id="Projekt_Top_Fix_Section_Content_right_left_Column_1">
                    <div id="Projekt_Top_Fix_Section_Content_right_left_Wrapper">
                      <h2 id="Projekt_Top_Fix_Section_Content_right_left_h2">
                        {props.Rendite}
                      </h2>
                      <h4 id="Projekt_Top_Fix_Section_Content_right_left_h4">
                        Erw. Rendite
                      </h4>
                    </div>
                    <div id="Projekt_Top_Fix_Section_Content_right_left_Wrapper">
                      <h2 id="Projekt_Top_Fix_Section_Content_right_left_h2">
                        {props.Mindestinvestition}
                      </h2>
                      <h4 id="Projekt_Top_Fix_Section_Content_right_left_h4">
                        Mindestinvestition
                      </h4>
                    </div>
                  </div>
                  <div id="Projekt_Top_Fix_Section_Content_right_left_Column_2">
                    <div id="Projekt_Top_Fix_Section_Content_right_left_Wrapper">
                      <h2 id="Projekt_Top_Fix_Section_Content_right_left_h2">
                        {props.Finanzierungsvolumen}
                      </h2>
                      <h4 id="Projekt_Top_Fix_Section_Content_right_left_h4">
                        Finanzierungsvolumen
                      </h4>
                    </div>
                    <div id="Projekt_Top_Fix_Section_Content_right_left_Wrapper">
                      <h2 id="Projekt_Top_Fix_Section_Content_right_left_h2">
                        {props.Typ}
                      </h2>
                      <h4 id="Projekt_Top_Fix_Section_Content_right_left_h4">
                        Typ
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Projekt_Top_Fix_Section_Content_right_RIGHT">
                <a href={props.extLink}>
                  <div id="Projekt_Top_Zum_Projekt_Button">
                    <h4 id="Projekt_Top_Zum_Projekt_Button_h4">Zum Projekt</h4>
                    <img src={arrow} id="Projekt_Top_Zum_Projekt_Button_Img" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top_Section;
