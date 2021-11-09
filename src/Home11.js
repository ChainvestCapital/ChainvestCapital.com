import "./Design/Home11.css";
import { Route, Link } from "react-router-dom";

import awsExports from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import Amplify from "aws-amplify";

import { useState, useEffect } from "react";
import Home11_Proj_Comp from "./components/Home11_Proj_Comp";
import Top_nav_Bar from "./components/navigation/Top_Nav_Bar";
import Footer_11 from "./components/Footer_11";
Amplify.configure(awsExports);

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const [ProjekteArray, setProjekteArray] = useState([]);
  const fetchProjekte = async () => {
    try {
      const ProjekteData = await API.graphql(graphqlOperation(listProjekts));

      const ProjekteList = ProjekteData.data.listProjekts.items;
      setProjekteArray(ProjekteList);
      console.log(ProjekteList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjekte();
  }, []);

  return (
    <div>
      <div id="Desktop_Wrapper">
        <Top_nav_Bar />
        <div id="Div_Home_Top_Section">
          <div id="Div_Home_Top_Section_Left">
            <h1 id="CV_h1_dark">Digitale Wertpapiere auf</h1>
            <h1 id="CV_h1_yellow">Chainvest</h1>
            <h3 id="CV_h3_dark">
              BLOCKCAP stellt die Schnittstelle zwischen spannenden
              Investitionsprojekten und einer breiten Investorencommunity dar.
              Über diese Plattform erhalten AnlegerInnen Zugang zu vielfältigen
              Security Token Offerings aus unterschiedlichen Branchen.
            </h3>
          </div>
          <div id="Div_Home_Top_Section_Right">
            <div id="Div_Home_Top_Section_Right_Spalte_left">
              <div id="Div_Home_Top_Section_Right_TL_Wrapper">TL</div>
              <div id="Div_Home_Top_Section_Right_BL_Wrapper">BL</div>
            </div>

            <div id="Div_Home_Top_Section_Right_Spalte_right">
              <div id="Div_Home_Top_Section_Right_TR_Wrapper">TR</div>
              <div id="Div_Home_Top_Section_Right_BR_Wrapper">
                <h3 id="Div_Home_Top_Section_Right_BR_Wrapper_h3">
                  Was sind digitale Wertpapiere ?
                </h3>
                <h5 id="Div_Home_Top_Section_Right_BR_Wrapper_h5">
                  BLOCKCAP stellt die Schnittstelle zwischen spannenden
                  Investitionsprojekten und einer breiten Investorencommunity
                  dar. Über diese Plattform erhalten AnlegerInnen Zugang zu
                  vielfältigen Security Token Offerings aus unterschiedlichen
                  Branchen.
                </h5>
              </div>
            </div>
          </div>{" "}
          <div id="Div_Home_Top_Section_Layer"></div>
          <div id="Div_Home_Top_Section_Layer_Form"></div>
        </div>

        <div id="Div_Home_Projekt_Section">
          <div id="Div_Home_Projekt_Section_Padding">
            {" "}
            <h5 id="Div_Home_CV_Section_LEFT_h5">Digitale Wertpapiere</h5>
            <h2 id="Div_Home_CV_Section_LEFT_h2">Projekte</h2>
            <ul id="home_projekte_ul_id">
              {ProjekteArray.map((Projekt) => (
                <li id="home_projekte_li_11">
                  <Link to={Projekt.InternerLink}>
                    <Home11_Proj_Comp
                      title={Projekt.name}
                      KategorieBildLink={Projekt.KategorieBildLink}
                      Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                      ErwarteteRendite={Projekt.ErwRendite}
                      Typ={Projekt.Typ}
                      Logo={Projekt.LogoLink}
                      titleImg={Projekt.TitleLink}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="./alleProjekte">
              <div id="Div_Home_Projekt_Section_ALLE_BUTTON">
                <h2 id="Div_Home_Projekt_Section_alle_h2">Alle Projekte</h2>
              </div>
            </Link>
          </div>
          <div id="Div_Home_Projekte_Section_Layer"></div>
          <div id="Div_Home_Projekte_Section_Layer_Form"></div>
          <div id="Div_Home_CV_Section">
            <div id="Div_Home_CV_Section_iNNER">
              <div id="Div_Home_CV_Section_LEFT">
                <h5 id="Div_Home_CV_Section_LEFT_h5">Über uns</h5>
                <h2 id="Div_Home_CV_Section_LEFT_h2">
                  Was ist <br />
                  Chainvest
                  <br /> Capital
                </h2>
              </div>
              <div id="Div_Home_CV_Section_RIGHT">
                <h4 id="Div_Home_CV_Section_RIGHT_h4">
                  Das disruptive Potenzial der Blockchain-Technologie verändert
                  die bestehende Infrastruktur der Kapitalmärkte. GründerInnen
                  und AnlegerInnen werden neue Möglichkeiten der Kapitalaufnahme
                  eröffnet, losgelöst von zentralen Instanzen. <br />
                  <br />
                  Veränderungsprozesse sind aber auch gleichzeitig mit
                  Unsicherheiten und das Lösen von zentralen Instanzen mit
                  Ungewissheiten verbunden. Mit Chainvest Capital schaffen wir
                  transparentere Rahmenbedingungen auf dem Markt für digitale
                  Wertpapiere und so mehr Vertrauen in die Tokenisierung von
                  Finanzinstrumenten.
                  <br />
                  <br /> Als Informationsplattform für digitalisierte
                  Wertpapiere informiert Chainvest Capital rund um die
                  Fragestellungen der Blockchain-Technologie im
                  Finanzdienstleistungssektor. Mit Chainvest Capital  erhalten
                  AnlegerInnen Zugang zu vielfältigen Investitionsprojekten aus
                  unterschiedlichen Branchen.
                </h4>
              </div>{" "}
            </div>

            <div id="Div_Home_CV_Section_Layer"></div>
          </div>{" "}
        </div>
        <Footer_11 />
      </div>
      <div id="Mobile_Wrapper">Mobile</div>
    </div>
  );
}

export default Home;
