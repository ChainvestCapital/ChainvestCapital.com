import "./Design/Home.css";
import { Route, Link } from "react-router-dom";

import alleProjekte from "./alleProjekte.js";
import about from "./about.js";
import Bitbond from "./STOs/Bitbond.js";

import Top_menue from "./components/navigation/top_menue";
import Blue_round_fixpadding from "./components/navigation/buttons/blue_round_fixpadding";
import Home_Projekt_Banner from "./components/projekte/home_projekt_banner";

import VogemannLogo from "./assets/images/VogemannLogo.png";
import VogemannTitle from "./assets/images/VogemannImg.png";

import TomorrowLogo from "./assets/images/TomorrowLogo.png";
import TomorrowTitle from "./assets/images/TomorrowImg.png";

import BitbondLogo from "./assets/images/BitbondLogo.png";
import BitbondTitle from "./assets/images/BitbondImg.png";

import Schiffahrtimg from "./assets/images/Schiffahrt.png";

import Schiffahrt from "./components/Kategorien/Schiffahrt";
import Technologie from "./components/Kategorien/Technologie";
import Finance from "./components/Kategorien/Finance";

import F from "./components/navigation/FooterComp";
import logo from "./assets/images/logo.png";

import Footer from "./components/Footer";

import HomeForm from "./assets/images/HomeForm.png";
import HomeBig from "./assets/images/Home_Big.png";

import STOImg from "./assets/images/STOImg.png";
import VergleichenImg from "./assets/images/VergleichenImg.png";
import ProjekteImg from "./assets/images/ProjekteImg.png";

import Mobile_home_projekt from "./mobile_components/mobile_home_projekt";
import moble_menue from "./mobile_components/moble_menue";
import mobile_footer from "./mobile_components/Mobile_Footer";

import Mobile_menue from "./mobile_components/moble_menue";

import awsExports from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import Amplify from "aws-amplify";

import { useState, useEffect } from "react";

Amplify.configure(awsExports);

function Home() {
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
  useEffect(() => {
    document.title = "Home";
  }, []);

  const Top_Section_Sub_Heading =
    "Chainvest stellt die Schnittstelle zwischen spannenden Investitionsprojekten und einer breiten Investorencommunity dar. Über diese Plattform erhalten AnlegerInnen Zugang zu vielfältigen Security Token Offerings aus unterschiedlichen Branchen.";
  return (
    <div>
      <div id="Desktop_Wrapper">
        <div id="menueComponent_placeholder">
          <Top_menue />
        </div>
        <div id="home_fullHero">
          <div id="home_hero_left">
            <h2 id="home_hero_left_CIAC">CONNECTING IDEAS AND CAPITAL</h2>
            <h1 id="home_hero_left_Heading">
              Alle Security Token Offerings an einem Ort
            </h1>
            <h4 id="home_hero_left_description">{Top_Section_Sub_Heading}</h4>

            <div id="home_hero_left_button_wrapper">
              <Link to="alleProjekte">
                <Blue_round_fixpadding text="Projekte ansehen" />
              </Link>

              <Link to="ProjekteVergleichen">
                <Blue_round_fixpadding text="Projekte vergleichen" />
              </Link>
              <Link to="Was-sind-STOs">
                <Blue_round_fixpadding text="Über STOs" />
              </Link>
            </div>
          </div>

          <div id="home_hero_right">
            <img src={HomeForm} id="Home_Form" />
            <img src={HomeBig} id="Home_Big" />
          </div>
        </div>

        <div id="Home_Farbübergang"></div>

        <div id="home_projekte">
          <h2 id="home_projekte_h2">Security Token Offerings auf Chainvest</h2>

          <ul>
            {ProjekteArray.map((Projekt) => (
              <li id="home_projekte_li">
                <Link to={Projekt.InternerLink}>
                  <Home_Projekt_Banner
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
          <div id="Home_more_project">
            <Link to="alleProjekte">
              <div id="Home_more_project_BUTTON">
                <h2 id="Home_more_project_BUTTON_h2">Alle Projekte ansehen</h2>
              </div>
            </Link>
          </div>
        </div>

        <div id="Home_Farbübergang180"></div>

        <div id="home_chainvest">
          <div id="home_chainvest_left">
            <h4 id="home_chainvest_h4">
              Das disruptive Potenzial der Blockchain-Technologie verändert die
              bestehende Infrastruktur der Kapitalmärkte. GründerInnen und
              AnlegerInnen werden neue Möglichkeiten der Kapitalaufnahme
              eröffnet, losgelöst von zentralen Instanzen. <br /> <br />
              Veränderungsprozesse sind aber auch gleichzeitig mit
              Unsicherheiten und das Lösen von zentralen Instanzen mit
              Ungewissheiten verbunden. Mit BLOCKCAP schaffen wir transparentere
              Rahmenbedingungen auf dem Security Token Markt und so mehr
              Vertrauen in die Tokenisierung von Finanzinstrumenten. <br />{" "}
              <br />
              Als Informationsplattform für Security Token informiert
              BLOCKCAP rund um die Fragestellungen der Blockchain-Technologie im
              Finanzdienstleistungssektor. Mit BLOCKCAP erhalten AnlegerInnen
              Zugang zu vielfältigen Investitionsprojekten aus unterschiedlichen
              Branchen.
            </h4>
          </div>

          <div id="home_chainvest_right">
            <img src={logo} id="home_chainvest_img" />
            <Link to="./about">
              <Blue_round_fixpadding text="Mehr über uns" />
            </Link>
          </div>
        </div>

        <Footer />
      </div>

      <div id="Mobile_Wrapper">
        <Mobile_menue />
        <div id="mobile_home_top_section">
          <div id="mobile_home_top_text">
            <h3 id="mobile_home_top_text_h3">Connecting Ideas and Capital</h3>

            <h2 id="mobile_home_top_text_h2">
              Alle Security Token Offerings an einem Ort
            </h2>

            <h5 id="mobile_home_top_text_h5">
              BLOCKCAP stellt die Schnittstelle zwischen spannenden
              Investitionsprojekten und einer breiten Investorencommunity dar.
              Über diese Plattform erhalten AnlegerInnen Zugang zu vielfältigen
              Security Token Offerings aus unterschiedlichen Branchen.
            </h5>
          </div>

          <div id="mobile_home_top_menue">
            <div id="mobile_home_top_menue_eintrag_wrappper">
              <div id="mobile_home_top_menue_eccplise">
                <img
                  src={ProjekteImg}
                  id="mobile_home_top_menue_eccplise_img"
                />
              </div>

              <div id="mobile_home_top_menue_h4">Projekte ansehen</div>
            </div>

            <div id="mobile_home_top_menue_eintrag_wrappper">
              <div id="mobile_home_top_menue_eccplise">
                <img src={STOImg} id="mobile_home_top_menue_eccplise_img" />
              </div>

              <div id="mobile_home_top_menue_h4">Über STOs</div>
            </div>

            <div id="mobile_home_top_menue_eintrag_wrappper">
              <div id="mobile_home_top_menue_eccplise">
                <img
                  src={VergleichenImg}
                  id="mobile_home_top_menue_eccplise_img"
                />
              </div>

              <div id="mobile_home_top_menue_h4">Projekte vergleichen</div>
            </div>
          </div>
        </div>

        <div id="home_mobile_projekte_section">
          <div id="home_mobile_projekte_wrapper">
            <ul id="home_mobile_projekte_wrapper_ul">
              {ProjekteArray.map((Projekt) => (
                <li id="home_projekte_li_Mobil">
                  <Link to={Projekt.InternerLink}>
                    <Mobile_home_projekt
                      title={Projekt.name}
                      Kategorie={Projekt.KategorieBildLink}
                      Volumen={Projekt.Finanzierungsvolumen}
                      Rendite={Projekt.ErwRendite}
                      Typ={Projekt.Typ}
                      Logo={Projekt.LogoLink}
                      titleImg={Projekt.TitleLink}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link to="./alleProjekte">
          <div id="home_mobile_projekte_alle_wrapper">
            <div id="home_mobile_projekte_alle_ecclipse">
              <img src={ProjekteImg} id="home_mobile_projekte_alle_img" />
            </div>

            <h3 id="home_mobile_projekte_alle_h3">Alle Projekte ansehen</h3>
          </div>
        </Link>
        <div id="mobile_home_Chainvest_section"></div>
      </div>
    </div>
  );
}

export default Home;
