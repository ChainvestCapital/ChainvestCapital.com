import "./Design/FürUnternehmen.css";
import { Route, Link } from "react-router-dom";
import Top_menue from "./components/navigation/top_menue";
import Footer from "./components/Footer";
import Mobile_menue from "./mobile_components/moble_menue";
import Mobile_Footer from "./mobile_components/Mobile_Footer";
import { useState, useEffect } from "react";

import Wachstum from "./assets/images/Wachstum.png";
import Performane from "./assets/images/Performance.png";
import Marketing from "./assets/images/Marketing.png";

import arrow from "./assets/images/arrow.png";
import Mail from "./assets/images/Mail.png";
import Download from "./assets/images/DownloadImg.png";

function FürUnternehmen() {
  const FürUnt_Switch_InhaltWachstum =
    "BLOCKCAP stellt die Schnittstelle zwischen spannenden Investitionsprojekten und einer breiten Investorencommunity dar. Über diese Plattform erhalten AnlegerInnen Zugang zu vielfältigen Security Token Offerings aus unterschiedlichen Branchen.";
  const [FürUnt_Switch_h2, setFürUnt_Switch_h2] = useState("Listingprozess");
  const [FürUnt_Switch_Inhalt, setFürUnt_Switch_Inhalt] = useState(
    FürUnt_Switch_InhaltWachstum
  );
  function switchToWachstumz() {
    setFürUnt_Switch_h2("Wachstum");
    setFürUnt_Switch_Inhalt(
      "BLOCKCAP stellt die Schnittstelle zwischen spannenden Investitionsprojekten und einer breiten Investorencommunity dar. Über diese Plattform erhalten AnlegerInnen Zugang zu vielfältigen Security Token Offerings aus unterschiedlichen Branchen."
    );
  }
  function switchToMarketing() {
    setFürUnt_Switch_h2("Markting");

    setFürUnt_Switch_Inhalt(
      "BLOCKCAP stellt die Schnittstelle zwischen spannenden Investitionsprojekten und einer breiten Investorencommunity dar. Über diese Plattform erhalten AnlegerInnen Zugang zu vielfältigen Security Token Offerings aus unterschiedlichen Branchen."
    );
  }
  function switchToEfiizienz() {
    setFürUnt_Switch_h2("Effizienz");

    setFürUnt_Switch_Inhalt(
      "BLOCKCAP stellt die Schnittstelle zwischen spannenden Investitionsprojekten und einer breiten Investorencommunity dar. Über diese Plattform erhalten AnlegerInnen Zugang zu vielfältigen Security Token Offerings aus unterschiedlichen Branchen."
    );
  }
  return (
    <div>
      <div id="Dekstop_Wrapper">
        <Top_menue />
        <div id="FürUNternehmen_Wrapper">
          <div id="FürUnt_TopSection">
            <div id="FürUnt_TopSection_left">
              <h2 id="FürUnt_TopSection_left_h2">
                Ihr Projekt auf <br /> Chainvestcapital.de
              </h2>

              <h4 id="FürUnt_TopSection_left_h4">
                Gewinnen Sie mit einer Platzierung auf Chainvest frühzeitig das
                Interesse potenzieller Investoren und profitieren Sie von
                unserem starken Netzwerk.
              </h4>
              <div id="FürUnt_TopSection_left_ButtonWrapper">
                <a href="#FürUnt_VorteileSection">
                  <div id="FürUnt_TopSection_left_ButtonWrapper_Button">
                    <h4 id="FürUnt_TopSection_left_Button_H4">Vorteile</h4>
                    <div id="FürUnt_TopSection_left_Button_Inner">
                      <img src={arrow} id="FürUnt_TopSection_left_Button_img" />
                    </div>
                  </div>
                </a>
                <div id="FürUnt_TopSection_left_ButtonWrapper_Button">
                  <h4 id="FürUnt_TopSection_left_Button_H4">Ablauf</h4>
                  <div id="FürUnt_TopSection_left_Button_Inner">
                    <img src={arrow} id="FürUnt_TopSection_left_Button_img" />
                  </div>
                </div>

                <div id="FürUnt_TopSection_left_ButtonWrapper_Button">
                  <h4 id="FürUnt_TopSection_left_Button_H4">Kontakt</h4>
                  <div id="FürUnt_TopSection_left_Button_Inner">
                    <img src={arrow} id="FürUnt_TopSection_left_Button_img" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="FürUnt_VorteileSection">
            <h2 id="FürUnt_TopSection_left_h2">
              Ihre Vorteile auf Chainvestcapital.de
            </h2>
            <div id="FürUnt_VorteileSection_left">
              <div id="FürUnt_VorteileSection_left_Switcher">
                <div id="FürUnt_VorteileSection_left_Switcher_Menue">
                  <div
                    id="FürUnt_VorteileSection_left_Switcher_Menue_Item"
                    onClick={() => switchToWachstumz()}
                  >
                    <h4 id="FürUnt_VorteileSection_left_Switcher_Menue_Item_H4">
                      Wachstum{" "}
                    </h4>
                    <div id="FürUnt_VorteileSection_left_Switcher_Menue_Item_inner">
                      <img
                        src={Wachstum}
                        id="FürUnt_VorteileSection_left_Switcher_Menue_Item_img"
                      />
                    </div>
                  </div>
                  <div
                    id="FürUnt_VorteileSection_left_Switcher_Menue_Item"
                    onClick={() => switchToMarketing()}
                  >
                    {" "}
                    <h4 id="FürUnt_VorteileSection_left_Switcher_Menue_Item_H4">
                      Marketing
                    </h4>{" "}
                    <div id="FürUnt_VorteileSection_left_Switcher_Menue_Item_inner">
                      <img
                        src={Marketing}
                        id="FürUnt_VorteileSection_left_Switcher_Menue_Item_img"
                      />
                    </div>
                  </div>
                  <div
                    id="FürUnt_VorteileSection_left_Switcher_Menue_Item"
                    onClick={() => switchToEfiizienz()}
                  >
                    {" "}
                    <h4 id="FürUnt_VorteileSection_left_Switcher_Menue_Item_H4">
                      Effizienz
                    </h4>{" "}
                    <div id="FürUnt_VorteileSection_left_Switcher_Menue_Item_inner">
                      <img
                        src={Performane}
                        id="FürUnt_VorteileSection_left_Switcher_Menue_Item_img"
                      />
                    </div>
                  </div>
                </div>
                <div id="FürUnt_VorteileSection_left_Switcher_Inhalt">
                  <h3 id="FürUnt_VorteileSection_left_Switcher_Inhalt_h3">
                    {FürUnt_Switch_h2}
                  </h3>
                  <h4 id="FürUnt_VorteileSection_left_Switcher_Inhalt_h5">
                    {FürUnt_Switch_Inhalt}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div id="FürUnt_AblaufSection">
            <h2 id="FürUnt_TopSection_left_h2">Ablauf ihres Listings</h2>

            <div id="FürUnt_AblaufSection_Kachel_Wrapper">
              <div id="FürUnt_AblaufSection_Kachel">
                <div id="FürUnt_AblaufSection_Kachel_Top">
                  <h3 id="FürUnt_AblaufSection_Kachel_H3">Kontaktaufnahme </h3>
                  <div id="FürUnt_AblaufSection_Kachel_Top_Kachel">
                    <h3 id="FürUnt_AblaufSection_Kachel_H3">1 </h3>
                  </div>{" "}
                </div>
                <h5 id="FürUnt_AblaufSection_Kachel_H5">
                  Für einen erfolgreichen Start am Kapitalmarkt nehmen Sie über
                  das Kontaktformular Kontakt zu unserem Listing Team auf.
                </h5>
              </div>
              <div id="FürUnt_AblaufSection_Kachel">
                <div id="FürUnt_AblaufSection_Kachel_Top">
                  <h3 id="FürUnt_AblaufSection_Kachel_H3">Datenaustausch </h3>
                  <div id="FürUnt_AblaufSection_Kachel_Top_Kachel">
                    <h3 id="FürUnt_AblaufSection_Kachel_H3">2 </h3>
                  </div>{" "}
                </div>
                <h5 id="FürUnt_AblaufSection_Kachel_H5">
                  Für eine Platzierung Ihres Security Tokens auf BLOCKCAP
                  benötigen wir ein Wertpapierprospekt bzw. WIB. Weitere
                  Informationen finden Sie hier.
                </h5>
              </div>
              <div id="FürUnt_AblaufSection_Kachel">
                <div id="FürUnt_AblaufSection_Kachel_Top">
                  <h3 id="FürUnt_AblaufSection_Kachel_H3">Listing </h3>
                  <div id="FürUnt_AblaufSection_Kachel_Top_Kachel">
                    <h3 id="FürUnt_AblaufSection_Kachel_H3">3 </h3>
                  </div>{" "}
                </div>
                <h5 id="FürUnt_AblaufSection_Kachel_H5">
                  Bei der Erstellung Ihres Listings bieten wir individuelle
                  Marketinglösungen an, um Ihr Projekt bestmöglich darzustellen.
                </h5>
              </div>
              <div id="FürUnt_AblaufSection_Kachel">
                <div id="FürUnt_AblaufSection_Kachel_Top">
                  <h3 id="FürUnt_AblaufSection_Kachel_H3">Live </h3>
                  <div id="FürUnt_AblaufSection_Kachel_Top_Kachel">
                    <h3 id="FürUnt_AblaufSection_Kachel_H3">4 </h3>
                  </div>{" "}
                </div>
                <h5 id="FürUnt_AblaufSection_Kachel_H5">
                  Mit der Live-Schaltung Ihres Investitionsprojektes erfolgreich
                  am Kapitalmarkt starten.
                </h5>
              </div>
            </div>
          </div>
          <div id="FürUnt_KontaktSection">
            <h2 id="FürUnt_TopSection_left_h2">Kontaktaufnahme</h2>
            <div id="FürUnt_Kontakt_Wrapper">
              <div id="FürUnt_Kontakt_LEFT">Left Kontaktformular</div>
              <div id="FürUnt_Kontakt_Right">
                <h3 id="FürUnt_Kontakt_Right_H3">Direkt kontaktieren</h3>
                <div id="FürUnt_Kontakt_Right_Dokuemnt_Wrapper">
                  <h4 id="FürUnt_Kontakt_Right_h4">
                    Bei Fragen oder weiteren Anliegen stehen wir Ihnen gerne per
                    E-Mail zur Verfügung. Häufig gestellte Fragen zum
                    Listingprozess haben wir für Sie hier zusammengefasst.
                  </h4>
                  <button type="submit" onclick="">
                    <div id="FürUnt_Kontakt_Right_dOWNLOAD_Button">
                      <h3 id="FürUnt_Kontakt_Right_Downlaod_h3">Downlaod</h3>
                      <div id="FürUnt_Kontakt_Right_Dl_Inner">
                        <img src={Download} id="FürUnt_Kontakt_Right_DL_Img" />
                      </div>
                    </div>{" "}
                  </button>
                </div>

                <div id="FürUnt_Kontakt_Right_Kontakt_row">
                  <div id="FürUnt_Kontakt_Right_Kontakt_row_inner">
                    <img src={Mail} id="FürUnt_Kontakt_Right_Kontakt_row_IMG" />
                  </div>{" "}
                  <h3 id="FürUnt_Kontakt_Right_Kontakt_row_H2">
                    Kontakt@chainvestcapital.de
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div id="Mobile_Wrapper">
        <Mobile_menue />
        <Mobile_Footer />
      </div>
    </div>
  );
}

export default FürUnternehmen;
