import "./Design/Partner.css";
import { Route, Link } from "react-router-dom";
import Top_menue from "./components/navigation/top_menue";

import Footer from "./components/Footer";

import NeutralImg from "./assets/images/Neutralität.png";
import TransparenzImg from "./assets/images/Transparenz.png";
import RegulatorikImg from "./assets/images/Regulatorik.png";
import { useState, useEffect } from "react";

function Partner() {
  useEffect(() => {
    document.title = "Partner";
  }, []);

  const TransparenzText =
    "Transparenz stellt die Schnittstelle zwischen spannenden Investitionsprojekten und einer breiten Investorencommunity dar. Über diese Plattform erhalten AnlegerInnen Zugang zu vielfältigen Security Token Offerings aus unterschiedlichen Branchen.";
  const RegulierungText =
    "Regulierung stellt die Schnittstelle zwischen spannenden Investitionsprojekten und einer breiten Investorencommunity dar. Über diese Plattform erhalten AnlegerInnen Zugang zu vielfältigen Security Token Offerings aus unterschiedlichen Branchen.";

  const NeutralitätText =
    "Neutralität stellt die Schnittstelle zwischen spannenden Investitionsprojekten und einer breiten Investorencommunity dar. Über diese Plattform erhalten AnlegerInnen Zugang zu vielfältigen Security Token Offerings aus unterschiedlichen Branchen.";
  const [TopRightContent, setTopRightContent] = useState(NeutralitätText);

  const NeutralH3 = "Neutralität";
  const RegulatorikH3 = "Regulatorik";
  const TransparenzH3 = "Transparenz";
  const [TopRightH3, setTopRightH3] = useState(NeutralH3);

  const [TopRightImg, setTopRightImg] = useState(NeutralImg);

  function NeutralSwitch() {
    setTopRightContent(NeutralitätText);
    setTopRightH3(NeutralH3);
    setTopRightImg(NeutralImg);
  }
  function TransparenzSwitch() {
    setTopRightContent(TransparenzText);
    setTopRightH3(TransparenzH3);
    setTopRightImg(TransparenzImg);
  }

  function RegulatorikSwitch() {
    setTopRightContent(RegulierungText);
    setTopRightH3(RegulatorikH3);
    setTopRightImg(RegulatorikImg);
  }

  return (
    <div>
      <div id="Desktop_Wrapper">
        <Top_menue />
        <div id="Partner_Top_Wrapper">
          <div id="Partenr_Top_Left">
            <h3 id="Partenr_Top_Left_h3">
              So erhalten wir unsere Informationen
            </h3>
          </div>
          <div id="Partner_Top_Right">
            <div id="Partner_Top_Right_Content_Wrapper">
              <div id="Partner_Top_Right_Content_Menue">
                <div
                  id="Partner_Top_Right_Content_Menue_Button"
                  onClick={() => NeutralSwitch()}
                >
                  <h3 id="Partner_Top_Right_Content_Menue_h3">Neutralität</h3>
                  <div id="Partner_Top_Right_Content_Menue_inner">
                    <img
                      src={NeutralImg}
                      id="Partner_Top_Right_Content_Menue_IMG"
                    />
                  </div>
                </div>
                <div
                  id="Partner_Top_Right_Content_Menue_Button"
                  onClick={() => RegulatorikSwitch()}
                >
                  <h3 id="Partner_Top_Right_Content_Menue_h3">Regulatorik</h3>
                  <div id="Partner_Top_Right_Content_Menue_inner">
                    <img
                      src={RegulatorikImg}
                      id="Partner_Top_Right_Content_Menue_IMG"
                    />
                  </div>
                </div>
                <div
                  id="Partner_Top_Right_Content_Menue_Button"
                  onClick={() => TransparenzSwitch()}
                >
                  <h3 id="Partner_Top_Right_Content_Menue_h3">Transparenz</h3>
                  <div id="Partner_Top_Right_Content_Menue_inner">
                    <img
                      src={TransparenzImg}
                      id="Partner_Top_Right_Content_Menue_IMG"
                    />
                  </div>
                </div>
              </div>
              <div id="Partner_Top_Right_Content_Content">
                <div id="Partner_Top_Right_Content_Content_Wrapper">
                  <div id="Partner_Top_Right_Content_Content_TOP">
                    <h3 id="Partner_Top_Right_Content_Content_TOP_H3">
                      {TopRightH3}
                    </h3>
                    <div id="Partner_Top_Right_Content_Content_TOPrIGHT">
                      <img
                        src={TopRightImg}
                        id="Partner_Top_Right_Content_Content_Img"
                      />
                    </div>
                  </div>
                  <div id="Partner_Top_Right_Content_Content_BOTTOM">
                    <h3 id="Partner_Top_Right_Content_Content_h3">
                      {TopRightContent}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="Partner_UnserePartner">
          <div id="Partner_UnserePartner_h3_wrapper">
            <h3 id="Partner_UnserePartner_h3">Unsere Partner</h3>
          </div>
          <div id="Partner_UnserePartner_blue_Wrapper">
            <div id="Partner_UnserePartner_Item_Wrapper">Unser Partner</div>
          </div>
        </div>

        <div id="Partner_Thrid_sECTION">
          <div id="Partner_Thrid_sECTION_Left">
            <h3 id="Partner_UnserePartner_h3">
              Ihr Projekt auf Chainvestcapital.de
            </h3>
          </div>
          <div id="Partner_Thrid_sECTION_RIGHT">
            <div id="Partner_Thrid_sECTION_RIGHT_Content">
              <h3 id="Partner_Thrid_sECTION_RIGHT_Content_h3">
                Gewinnen Sie mit einer Platzierung auf BLOCKCAP frühzeitig das
                Interesse potenzieller Investoren und profitieren Sie von
                unserem starken Netzwerk.
              </h3>
              <Link to="./Für-Unternehmen">
                <div id="Partner_Thrid_sECTION_RIGHT_Content_Buttom">
                  <h3 id="Partner_Thrid_sECTION_RIGHT_Content_Buttom_H3">
                    Ihr Projekt listen
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div id="Mobile_Wrapper">
        <div id="Mobile_Partner_top">
          <h2 id="Mobile_Partner_top_h2">
            So erhalten wir unsere Informationen
          </h2>
          <div id="Mobile_Partner_top_Switcher">
            <div id="Mobile_Partner_top_Switcher_Menue">
              <div id="Mobile_Partner_top_Switcher_Menue_Item">
                <h3 id="Mobile_Partner_top_Switcher_Item_h3">Neutralität</h3>
                <div id="Mobile_Partner_top_Switcher_Inner">
                  <img src={NeutralImg} id="Mobile_Partner_top_Switcher_img" />
                </div>
              </div>
              <div id="Mobile_Partner_top_Switcher_Menue_Item">
                <h3 id="Mobile_Partner_top_Switcher_Item_h3">Regulatorik</h3>
                <div id="Mobile_Partner_top_Switcher_Inner">
                  <img
                    src={RegulatorikImg}
                    id="Mobile_Partner_top_Switcher_img"
                  />
                </div>
              </div>
              <div id="Mobile_Partner_top_Switcher_Menue_Item">
                <h3 id="Mobile_Partner_top_Switcher_Item_h3">Transparenz</h3>
                <div id="Mobile_Partner_top_Switcher_Inner">
                  <img
                    src={TransparenzImg}
                    id="Mobile_Partner_top_Switcher_img"
                  />
                </div>
              </div>
            </div>
            <div id="Mobile_Partner_top_Switcher_Inhalt">
              <div id="Mobile_Partner_top_Switcher_Inhalt_Top">
                <h3 id="Mobile_Partner_top_Switcher_h3">Neutralität</h3>
                <div id="Mobile_Partner_top_Switcher_TOP_Inner">
                  <img
                    src={NeutralImg}
                    id="Mobile_Partner_top_Switcher_Top_img"
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="Mobile_Partner_Unsere_Section">
            <h2 id="Mobile_Partner_Unsere__h2">Unsere Partner</h2>
            <div id="Mobile_Partner_Unsere_Balken">Unsere Partner</div>
          </div>

          <div id="Mobile_Partner_IhrP_Section">
            <h2 id="Mobile_Partner_IhrP_h2">
              ihr Projekt auf Chainvestcpaital.de
            </h2>
            <div id="Mobile_Partner_IhrP_Content_Wrapper">
              <h4 id="Mobile_Partner_IhrP_H4">
                Gewinnen Sie mit einer Platzierung auf BLOCKCAP frühzeitig das
                Interesse potenzieller Investoren und profitieren Sie von
                unserem starken Netzwerk.
              </h4>
              <div id="Mobile_Partner_IhrP_Button">
                <h3 id="Mobile_Partner_IhrP_Button_h3">Ihr Projekt listen</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
