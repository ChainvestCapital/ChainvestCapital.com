import "./Design/alleProjekte.css";
import { Route, Link } from "react-router-dom";

import Top_menue from "./components/navigation/top_menue";
import F from "./components/navigation/FooterComp";

import VogemannLogo from "./assets/images/VogemannLogo.png";
import VogemannTitle from "./assets/images/VogemannImg.png";

import Schiffahrtimg from "./assets/images/Schiffahrt.png";
import TechnologieImg from "./assets/images/Technologie.png";
import FinanceImg from "./assets/images/Finance.png";
import ImmobilienImg from "./assets/images/Immobilien.png";
import EnergieImg from "./assets/images/Energie.png";
import BlockchainImg from "./assets/images/Blockchain.png";
import UmweltImg from "./assets/images/Umwelt.png";
import GamingImg from "./assets/images/Gaming.png";

import ProjektComponentBox from "./components/projekte/ProjektComponentBox";
import Footer from "./components/Footer";

import Mobile_menue from "./mobile_components/moble_menue";
import Mobile_Footer from "./mobile_components/Mobile_Footer";

import Mobile_alle_Projekte_projekt from "./mobile_components/Mobile_alle_Projekte_projekt";

import Filtertrigger from "./assets/images/filtertrigger.png";

import FilterMenue from "./mobile_components/FilterMenue";
import Filterausklappen from "./mobile_components/mobile_filter_top";

import awsExports from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import Amplify from "aws-amplify";
import { useState, useEffect } from "react";

import AlleHover from "./components/Kategorien/AlleHover";
Amplify.configure(awsExports);

function AlleProjekte() {
  useEffect(() => {
    document.title = "Alle Projekte";
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
  function filterausklappen() {}
  function filtereinklappen() {}
  const [Filtereinklappenshow, setFiltereinklappenshow] = useState();
  const [FilterMenueshow, setFilterMenueshow] = useState();

  const [AktuellerKatFilter, setAktuellerKatFilter] = useState("Technologie");
  function switchAktuellerKatFilter(newAktuellerKatFilter) {
    setAktuellerKatFilter(newAktuellerKatFilter);
  }

  const [FilterArray, setFilterArray] = useState(ProjekteArray);

  return (
    <div>
      <div id="Desktop_Wrapper">
        <Top_menue />
        <div id="alle_projekte_wrapper">
          <div id="alle_projekte_filter_wrapper">
            <div id="alle_projekte_filter_wrapper_inner">
              <div id="alle_projekte_wrapper_heading">
                <h3 id="alle_projekte_wrapper_h3">Finanzierungsvolumen</h3>
                <div id="alle_projekte_wrapper_close">x</div>
              </div>

              <div id="alle_projekte_filter_eintrag_kreuz">
                <h3 id="alle_projekte_filter_eintrag_kreuz_h3">10.000 €</h3>

                <div id="alle_projekte_filter_eintrag_kreuz_kreuz"></div>
              </div>
              <div id="alle_projekte_filter_eintrag_kreuz">
                <h3 id="alle_projekte_filter_eintrag_kreuz_h3">50.000 €</h3>

                <div id="alle_projekte_filter_eintrag_kreuz_kreuz"></div>
              </div>
              <div id="alle_projekte_filter_eintrag_kreuz">
                <h3 id="alle_projekte_filter_eintrag_kreuz_h3">100.000 €</h3>

                <div id="alle_projekte_filter_eintrag_kreuz_kreuz"></div>
              </div>
              <div id="alle_projekte_filter_eintrag_kreuz">
                <h3 id="alle_projekte_filter_eintrag_kreuz_h3">200.000 €</h3>

                <div id="alle_projekte_filter_eintrag_kreuz_kreuz"></div>
              </div>
              <div id="alle_projekte_filter_eintrag_kreuz">
                <h3 id="alle_projekte_filter_eintrag_kreuz_h3">1.000.000 €</h3>

                <div id="alle_projekte_filter_eintrag_kreuz_kreuz"></div>
              </div>
            </div>

            <div id="alle_projekte_filter_wrapper_inner">
              <div id="alle_projekte_wrapper_heading">
                <h3 id="alle_projekte_wrapper_h3">Erwartete Rendite</h3>
                <div id="alle_projekte_wrapper_close">x</div>
              </div>

              <div id="alle_projekte_filter_eintrag_kreuz">
                <h3 id="alle_projekte_filter_eintrag_kreuz_h3">10.000 €</h3>

                <div id="alle_projekte_filter_eintrag_kreuz_kreuz"></div>
              </div>
              <div id="alle_projekte_filter_eintrag_kreuz">
                <h3 id="alle_projekte_filter_eintrag_kreuz_h3">50.000 €</h3>

                <div id="alle_projekte_filter_eintrag_kreuz_kreuz"></div>
              </div>
              <div id="alle_projekte_filter_eintrag_kreuz">
                <h3 id="alle_projekte_filter_eintrag_kreuz_h3">100.000 €</h3>

                <div id="alle_projekte_filter_eintrag_kreuz_kreuz"></div>
              </div>
              <div id="alle_projekte_filter_eintrag_kreuz">
                <h3 id="alle_projekte_filter_eintrag_kreuz_h3">200.000 €</h3>

                <div id="alle_projekte_filter_eintrag_kreuz_kreuz"></div>
              </div>
              <div id="alle_projekte_filter_eintrag_kreuz">
                <h3 id="alle_projekte_filter_eintrag_kreuz_h3">1.000.000 €</h3>

                <div id="alle_projekte_filter_eintrag_kreuz_kreuz"></div>
              </div>
            </div>

            <div id="alle_projekte_filter_wrapper_inner">
              <div id="alle_projekte_wrapper_heading">
                <h3 id="alle_projekte_wrapper_h3">Typ</h3>
                <div id="alle_projekte_wrapper_close">x</div>
              </div>

              <div id="alle_projekte_filter_eintrag_kreuz">
                <h3 id="alle_projekte_filter_eintrag_kreuz_h3">Eigenkapital</h3>

                <div id="alle_projekte_filter_eintrag_kreuz_kreuz"></div>
              </div>
              <div id="alle_projekte_filter_eintrag_kreuz">
                <h3 id="alle_projekte_filter_eintrag_kreuz_h3">Fremdkapital</h3>

                <div id="alle_projekte_filter_eintrag_kreuz_kreuz"></div>
              </div>
            </div>
          </div>

          <div id="alle_projekte_projekte_wrapper">
            <div id="alle_projekte_projekte_wrapper_Kategorien">
              <h2 id="alle_projekte_projekte_wrapper_projekte_kategorien">
                Kategorien:
              </h2>

              <div id="alle_projekte_kategorien_menue">
                <div>
                  <AlleHover Img={Schiffahrtimg} HoverText="Logistik" />
                </div>
                <div>
                  <AlleHover Img={TechnologieImg} HoverText="Technologie" />
                </div>
                <div>
                  <AlleHover Img={FinanceImg} HoverText="Finanzen" />
                </div>
                <div>
                  <AlleHover Img={EnergieImg} HoverText="Energie" />
                </div>
                <div>
                  <AlleHover Img={ImmobilienImg} HoverText="Immobilien" />
                </div>
                <div>
                  <AlleHover Img={BlockchainImg} HoverText="Blockchain" />
                </div>
                <div>
                  <AlleHover Img={UmweltImg} HoverText="Umwelt" />
                </div>
                <div>
                  <AlleHover Img={GamingImg} HoverText="Gaming" />
                </div>
              </div>
            </div>

            <div id="alle_projekte_projekte_wrapper_projekte">
              <ul id="alle_projekte_ul">
                {ProjekteArray.map((Projekt) => (
                  <li id="alle_projekte_li">
                    <Link to={Projekt.InternerLink}>
                      <ProjektComponentBox
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
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <div id="Mobile_Wrapper">
        <Mobile_menue />

        <div id="Mobile_alle_Projekte_Wrapper">
          <div onClick={() => filtereinklappen()}>
            <FilterMenue
              trigger={FilterMenueshow}
              setTrigger={setFilterMenueshow}
            />
          </div>

          <div onClick={() => filterausklappen()}>
            <Filterausklappen
              trigger={Filtereinklappenshow}
              setTrigger={setFiltereinklappenshow}
            />
          </div>

          <div id="Mobile_alle_Projekte_Projekte_wrapper">
            <Mobile_alle_Projekte_projekt
              logo={VogemannLogo}
              titleimg={VogemannTitle}
              title="Vogemann"
              Kategorie={Schiffahrtimg}
              Typ="Fremdkapital"
              Volumen="100.000.000$"
              Rendite="5%"
            />
            <Mobile_alle_Projekte_projekt
              logo={VogemannLogo}
              titleimg={VogemannTitle}
              title="Vogemann"
              Kategorie={Schiffahrtimg}
              Typ="Fremdkapital"
              Volumen="100.000.000$"
              Rendite="5%"
            />
            <Mobile_alle_Projekte_projekt
              logo={VogemannLogo}
              titleimg={VogemannTitle}
              title="Vogemann"
              Kategorie={Schiffahrtimg}
              Typ="Fremdkapital"
              Volumen="100.000.000$"
              Rendite="5%"
            />
          </div>
        </div>

        <Mobile_Footer />
      </div>
    </div>
  );
}

export default AlleProjekte;
