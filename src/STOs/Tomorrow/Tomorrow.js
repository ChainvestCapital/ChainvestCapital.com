import "./Tomorrow.css";
import Footer from "../../components/Footer";

import React, { useState } from "react";
import { useEffect } from "react";
import FrameÜberblickTomorrow from "./Frames/Überblick_Tomorrow";
import FrameUnternehmenTomorrow from "./Frames/Unternehmen_Tomorrow";
import FrameTokenSaleTomorrow from "./Frames/TokenSale_Tomorrow";
import FrameDokumenteTomorrow from "./Frames/Dokumente_Tomorrow";

import FrameTokenTomorrow from "./Frames/Token_Tomorrow";
import FrameRisikoTomorrow from "./Frames/Risiko_Tomorrow";

import BitbondLogo from "../../assets/images/BitbondLogo.png";
import VogemannLogo from "../../assets/images/VogemannLogo.png";
import TomorrowLogo from "../../assets/images/TomorrowLogo.png";

import BitbondImg from "../../assets/images/BitbondImg.png";
import VogemannImg from "../../assets/images/VogemannImg.png";
import TomorrowImg from "../../assets/images/TomorrowImg.png";

import FB from "../../assets/images/facebook.png";
import LI from "../../assets/images/LinkedIn.png";
import YT from "../../assets/images/YouTube.png";

import arrow from "../../assets/images/arrow.png";

import Schiffahrtimg from "../../assets/images/Schiffahrt.png";
import TechnologieImg from "../../assets/images/Technologie.png";
import FinanceImg from "../../assets/images/Finance.png";

import Top_menue from "../../components/navigation/top_menue";

import Project_left_menue_auswahl from "../components/project_left_menue_auswahl";
import Project_left_menue_button from "../components/project_left_menue_button";

import Home from "../../assets/images/Home.png";
import Unternehmen from "../../assets/images/Unternehmen.png";
import TokenSale from "../../assets/images/TokenSale.png";
import Token from "../../assets/images/Token.png";
import Risiko from "../../assets/images/Risiko.png";
import Dokumente from "../../assets/images/Dokumente.png";

import To_Project from "../components/To_Project";

function Tomorrow() {
  const [überblickshown, setüberblickshown] = useState(true);
  const [Unternehmenshow, setUnternehmenshow] = useState(false);
  const [TokenSaleshow, setTokenSaleshow] = useState(false);
  const [Dokumenteshow, setDokumenteshow] = useState(false);
  const [Tokenshow, setTokenshow] = useState(false);
  const [Risikoshow, setRisikoshow] = useState(false);

  const [auswahlÜberblickbg, setauswahlÜberblickbg] = useState("CDF0EA");
  const [auswahlUnternehmenbg, setauswahlUnternehmenbg] = useState("white");
  const [auswahlTokenSalebg, setauswahlTokenSalebg] = useState("white");
  const [auswahlTokenbg, setauswahlTokenbg] = useState("white");
  const [auswahlDokumentebg, setauswahlDokumentebg] = useState("white");
  const [auswahlRisikobg, setauswahlRisikobg] = useState("white");

  function showÜberblickFrame() {
    setüberblickshown(true);
    setUnternehmenshow(false);
    setTokenSaleshow(false);
    setDokumenteshow(false);
    setTokenshow(false);
    setRisikoshow(false);

    setauswahlÜberblickbg("#CDF0EA");
    setauswahlUnternehmenbg("white");
    setauswahlTokenSalebg("white");
    setauswahlTokenbg("white");
    setauswahlDokumentebg("white");
    setauswahlRisikobg("white");
  }
  function showUnternehmenFrame() {
    setüberblickshown(false);
    setUnternehmenshow(true);
    setTokenSaleshow(false);
    setDokumenteshow(false);
    setTokenshow(false);
    setRisikoshow(false);

    setauswahlÜberblickbg("white");
    setauswahlUnternehmenbg("#CDF0EA");
    setauswahlTokenSalebg("white");
    setauswahlTokenbg("white");
    setauswahlDokumentebg("white");
    setauswahlRisikobg("white");
  }
  function showTokenSaleFrame() {
    setüberblickshown(false);
    setUnternehmenshow(false);
    setTokenSaleshow(true);
    setDokumenteshow(false);
    setTokenshow(false);
    setRisikoshow(false);

    setauswahlÜberblickbg("white");
    setauswahlUnternehmenbg("white");
    setauswahlTokenSalebg("#CDF0EA");
    setauswahlTokenbg("white");
    setauswahlDokumentebg("white");
    setauswahlRisikobg("white");
  }
  function showDokumenteFrame() {
    setüberblickshown(false);
    setUnternehmenshow(false);
    setTokenSaleshow(false);
    setDokumenteshow(Dokumente);
    setTokenshow(false);
    setRisikoshow(false);

    setauswahlÜberblickbg("white");
    setauswahlUnternehmenbg("white");
    setauswahlTokenSalebg("white");
    setauswahlTokenbg("white");
    setauswahlDokumentebg("#CDF0EA");
    setauswahlRisikobg("white");
  }

  function showTokenFrame() {
    setüberblickshown(false);
    setUnternehmenshow(false);
    setTokenSaleshow(false);
    setDokumenteshow(false);
    setTokenshow(true);
    setRisikoshow(false);

    setauswahlÜberblickbg("white");
    setauswahlUnternehmenbg("white");
    setauswahlTokenSalebg("white");
    setauswahlTokenbg("#CDF0EA");
    setauswahlDokumentebg("white");
    setauswahlRisikobg("white");
  }
  function showRisikoFrame() {
    setüberblickshown(false);
    setUnternehmenshow(false);
    setTokenSaleshow(false);
    setDokumenteshow(false);
    setTokenshow(false);
    setRisikoshow(true);

    setauswahlÜberblickbg("white");
    setauswahlUnternehmenbg("white");
    setauswahlTokenSalebg("white");
    setauswahlTokenbg("white");
    setauswahlDokumentebg("white");
    setauswahlRisikobg("#CDF0EA");
  }

  const bgcolor = "#CDF0EA";

  const [showMobile_Überblick, setshowMobile_Überblick] = useState(true);
  const [showMobile_Unternehmen, setshowMobile_Unternehmen] = useState(false);
  const [showTokenSale, setshowTokenSale] = useState(false);
  const [showDokumente, setshowDokumente] = useState(false);
  const [showToken, setshowToken] = useState(false);
  const [showRisiko, setshowRisiko] = useState(false);

  const [CurrentPage, setCurrentPage] = useState("Überblick");

  function fshowMobile_Überblick() {
    setshowMobile_Überblick(true);
    setshowMobile_Unternehmen(false);
    setshowTokenSale(false);
    setshowDokumente(false);
    setshowToken(false);
    setshowRisiko(false);
    setCurrentPage("Überblick");
  }

  function fshowMobile_Unternehmen() {
    setshowMobile_Überblick(false);
    setshowMobile_Unternehmen(true);
    setshowTokenSale(false);
    setshowDokumente(false);
    setshowToken(false);
    setshowRisiko(false);
    setCurrentPage("Unternehmen");
  }
  function fshowMobile_TokenSale() {
    setshowMobile_Überblick(false);
    setshowMobile_Unternehmen(false);
    setshowTokenSale(true);
    setshowDokumente(false);
    setshowToken(false);
    setshowRisiko(false);
    setCurrentPage("TokenSale");
  }
  function fshowMobile_Dokumente() {
    setshowMobile_Überblick(false);
    setshowMobile_Unternehmen(false);
    setshowTokenSale(false);
    setshowDokumente(true);
    setshowToken(false);
    setshowRisiko(false);
    setCurrentPage("Dokumente");
  }
  function fshowMobile_Token() {
    setshowMobile_Überblick(false);
    setshowMobile_Unternehmen(false);
    setshowTokenSale(false);
    setshowDokumente(false);
    setshowToken(true);
    setshowRisiko(false);
    setCurrentPage("Token");
  }
  function fshowMobile_Risiko() {
    setshowMobile_Überblick(false);
    setshowMobile_Unternehmen(false);
    setshowTokenSale(false);
    setshowDokumente(false);
    setshowToken(false);
    setshowRisiko(true);
    setCurrentPage("Risko");
  }
  useEffect(() => {
    document.title = "Tomorrow";
  }, []);
  return (
    <div>
      <div id="Desktop_Wrapper">
        <Top_menue />
        <div id="Full_Desktop_Wrapper">
          <div id="project_left_menue">
            <div id="project_left_menue_auswahl_wrapper">
              <button onClick={() => showÜberblickFrame()}>
                <Project_left_menue_auswahl
                  title="Überblick"
                  img={Home}
                  bgColor={auswahlÜberblickbg}
                />
              </button>
              <button onClick={() => showUnternehmenFrame()}>
                <Project_left_menue_auswahl
                  title="Unternehmen"
                  img={Unternehmen}
                  bgColor={auswahlUnternehmenbg}
                />
              </button>
              <button onClick={() => showTokenSaleFrame()}>
                <Project_left_menue_auswahl
                  title="TokenSale"
                  img={TokenSale}
                  bgColor={auswahlTokenSalebg}
                />
              </button>
              <button onClick={() => showDokumenteFrame()}>
                <Project_left_menue_auswahl
                  title="Dokumente"
                  img={Dokumente}
                  bgColor={auswahlDokumentebg}
                />
              </button>
              <button onClick={() => showTokenFrame()}>
                <Project_left_menue_auswahl
                  title="Token"
                  img={Token}
                  bgColor={auswahlTokenbg}
                />
              </button>
              <button onClick={() => showRisikoFrame()}>
                <Project_left_menue_auswahl
                  title="Risiko"
                  img={Risiko}
                  bgColor={auswahlRisikobg}
                />
              </button>
            </div>

            <div id="project_left_menue_button_wrapper">
              <div id="project_left_menue_button">
                <Project_left_menue_button title="Diesen Token vergleichen" />
                <Project_left_menue_button title="Was sind Token Sales?" />
              </div>
            </div>
          </div>

          <div id="project_mid_and_right">
            <div id="project_mid_changing">
              <FrameÜberblickTomorrow
                trigger={überblickshown}
                setTrigger={setüberblickshown}
              />
              <FrameUnternehmenTomorrow
                trigger={Unternehmenshow}
                setTrigger={setUnternehmenshow}
              />
              <FrameTokenSaleTomorrow
                trigger={TokenSaleshow}
                setTrigger={setTokenSaleshow}
              />
              <FrameDokumenteTomorrow
                trigger={Dokumenteshow}
                setTrigger={setDokumenteshow}
              />
              <FrameTokenTomorrow
                trigger={Tokenshow}
                setTrigger={setTokenshow}
              />
              <FrameRisikoTomorrow
                trigger={Risikoshow}
                setTrigger={setRisikoshow}
              />
            </div>
            <div id="project_right_menue">
              <div id="project_right_project">
                <h4 id="zum_project_h4">Zum Projekt</h4>

                <To_Project
                  logo={TomorrowLogo}
                  rightimg={arrow}
                  bgimg={TomorrowImg}
                />

                <div id="Social_Media_Wrapper">
                  <img src={FB} id="Social_Media_Img" />
                  <img src={LI} id="Social_Media_Img" />
                  <img src={YT} id="Social_Media_Img" />
                </div>
              </div>

              <div id="project_right_ähnlich_wrapper">
                <h4 id="Ähnliche_Projekte_h4">Ähnliche Projekte</h4>
                <div id="ähnliche_projekte_projekte_wrapper">
                  <To_Project
                    logo={VogemannLogo}
                    rightimg={Schiffahrtimg}
                    bgimg={VogemannImg}
                  />

                  <To_Project
                    logo={TomorrowLogo}
                    rightimg={FinanceImg}
                    bgimg={TomorrowImg}
                  />

                  <To_Project
                    logo={BitbondLogo}
                    rightimg={TechnologieImg}
                    bgimg={BitbondImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Tomorrow;
