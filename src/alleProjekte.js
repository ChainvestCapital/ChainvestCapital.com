import "./Design/alleProjekte.css";
import { Route, Link } from "react-router-dom";

import Schiffahrtimg from "./assets/images/Schiffahrt.png";
import TechnologieImg from "./assets/images/Technologie.png";
import FinanceImg from "./assets/images/Finance.png";
import ImmobilienImg from "./assets/images/Immobilien.png";
import EnergieImg from "./assets/images/EnergieIconi.png";
import BlockchainImg from "./assets/images/Blockchain.png";
import UmweltImg from "./assets/images/Umwelt.png";
import GamingImg from "./assets/images/Gaming.png";

import ProjektComponentBox from "./components/projekte/ProjektComponentBox";
import Footer from "./components/Footer";

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
import AlleProjekte_Projekt from "./components/AlleProjekte_Projekt";
import Top_nav_Bar from "./components/navigation/Top_Nav_Bar";
import Footer_11 from "./components/Footer_11";
import Kategorien_Filter from "./components/Kategorien_Filter";

import Mobile_menue from "./mobile_components/moble_menue.js";
import Mobile_Footer from "./MobileComponents/Mobile_Footer";
import Mobile_Home_Projekt_Box from "./MobileComponents/Mobile_Home_Projekt_Box";

Amplify.configure(awsExports);

function AlleProjekte() {
  useEffect(() => {
    document.title = "Alle Projekte";
  }, []);

  const [shownProjects, setshownProjects] = useState([]);

  const [ProjekteArray, setProjekteArray] = useState([]);
  const fetchProjekte = async () => {
    try {
      const ProjekteData = await API.graphql(graphqlOperation(listProjekts));

      const ProjekteList = ProjekteData.data.listProjekts.items;
      setProjekteArray(ProjekteList);
      console.log(ProjekteList);
      setshownProjects(ProjekteList);
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

  /////////////////////////////////////////////////////

  //Filter
  const [AllArray, setAllArray] = useState([]);

  const [LogistikArray, setLogistikArray] = useState([]);
  const [FinanzenArray, setFinanzenArray] = useState([]);
  const [BlockchainArray, setBlockchainArray] = useState([]);
  const [TechnologieArray, setTechnologieArray] = useState([]);
  const [EnergieArray, setEnergieArray] = useState([]);
  const [GamingArray, setGamingArray] = useState([]);
  const [ImmobilienArray, setImmobilienArray] = useState([]);
  const [UmwelttArray, setUmwelttArray] = useState([]);

  //Build up Arrays

  function BuildLogistikArray(AlleProjekte) {
    setLogistikArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Logistik") {
        LogistikArray.push(projektmap);
        console.log(LogistikArray);
        setshownProjects(LogistikArray);
        console.log(shownProjects);
      } else {
        setLogistikArray([]);
        console.log("S");
      }
    });
  }
  function BuildGamingArray(AlleProjekte) {
    setGamingArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Gaming") {
        GamingArray.push(projektmap);
        setshownProjects(GamingArray);
      } else {
        setGamingArray([]);
      }
    });
    function BuildEnergieArray(AlleProjekte) {
      setEnergieArray([]);
      setshownProjects([]);

      AlleProjekte.map((projektmap) => {
        if (projektmap.Kategorie === "Energie") {
          EnergieArray.push(projektmap);
          setshownProjects(EnergieArray);
        } else {
          setEnergieArray([]);
        }
      });
    }
  }

  function BuildUmweltArray(AlleProjekte) {
    setUmwelttArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Umwelt") {
        UmwelttArray.push(projektmap);
        setshownProjects(UmwelttArray);
      } else {
        setUmwelttArray([]);
      }
    });
  }
  function BuildImmobilienArray(AlleProjekte) {
    setImmobilienArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Immobilien") {
        ImmobilienArray.push(projektmap);

        setshownProjects(ImmobilienArray);
        console.log(shownProjects);
      } else {
        setImmobilienArray([]);
      }
    });
  }

  function BuildEnergieArray(AlleProjekte) {
    setEnergieArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Energie") {
        EnergieArray.push(projektmap);

        setshownProjects(EnergieArray);
        console.log(EnergieArray);
      } else {
        setEnergieArray([]);
      }
    });
  }

  function BuildBlockchainArray(AlleProjekte) {
    setBlockchainArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Blockchain") {
        BlockchainArray.push(projektmap);
        setshownProjects(BlockchainArray);
        console.log(shownProjects);
      } else {
        setBlockchainArray([]);
        console.log("F");
      }
    });
  }

  function BuildFinanzenArray(AlleProjekte) {
    setFinanzenArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Finanzen") {
        FinanzenArray.push(projektmap);
        console.log(FinanzenArray);
        setshownProjects(FinanzenArray);
        console.log(shownProjects);
      } else {
        setFinanzenArray([]);
        console.log("F");
      }
    });
  }
  function BuildTechnologieArray(AlleProjekte) {
    setTechnologieArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Technologie") {
        TechnologieArray.push(projektmap);
        console.log(TechnologieArray);
        setshownProjects(TechnologieArray);
        console.log(shownProjects);
      } else {
        setTechnologieArray([]);
        console.log("F");
      }
    });
  }

  function BuildAllArray(AlleProjekte) {
    setshownProjects(AlleProjekte);
  }

  function Keinegefunden() {
    if (shownProjects.length == 0) {
      return (
        <div id="KeinegefundenWrapper">
          <h2 id="Keinegefunden_h2">
            Aktuelle leider keine Projekte in dieser Kategorie gefunden
          </h2>
        </div>
      );
    }
  }

  //Filtermenue Links ausklappen

  useEffect(() => {}, LogistikArray);

  //Filter used
  const [AP_FV_E1_K, setAP_FV_E1_K] = useState("unclicked");
  const [AP_FV_E2_K, setAP_FV_E2_K] = useState("unclicked");
  const [AP_FV_E3_K, setAP_FV_E3_K] = useState("unclicked");
  const [AP_FV_E4_K, setAP_FV_E4_K] = useState("unclicked");
  const [AP_FV_E5_K, setAP_FV_E5_K] = useState("unclicked");

  const [AP_ER_E1_K, setAP_ER_E1_K] = useState("unclicked");
  const [AP_ER_E2_K, setAP_ER_E2_K] = useState("unclicked");
  const [AP_ER_E3_K, setAP_ER_E3_K] = useState("unclicked");
  const [AP_ER_E4_K, setAP_ER_E4_K] = useState("unclicked");
  const [AP_ER_E5_K, setAP_ER_E5_K] = useState("unclicked");

  const [AP_TY_E1_K, setAP_TY_E1_K] = useState("unclicked");
  const [AP_TY_E2_K, setAP_TY_E2_K] = useState("unclicked");

  const [f1h1, setf1h1] = useState(1);
  const [f1h2, setf1h2] = useState(1);
  const [f1h3, setf1h3] = useState(1);
  const [f1h4, setf1h4] = useState(1);
  const [f1h5, setf1h5] = useState(1);

  const [f2h1, setf2h1] = useState(1);
  const [f2h2, setf2h2] = useState(1);
  const [f2h3, setf2h3] = useState(1);
  const [f2h4, setf2h4] = useState(1);
  const [f2h5, setf2h5] = useState(1);

  const [f3h1, setf3h1] = useState(1);
  const [f3h2, setf3h2] = useState(1);

  function AP_FV_E1_K_c() {
    setf1h1(f1h1 + 1);
    if (f1h1 % 2 == 0) {
      setAP_FV_E1_K("unclicked");
    } else {
      setAP_FV_E1_K("clicked");
    }
  }
  function AP_FV_E2_K_c() {
    setf1h2(f1h2 + 1);
    if (f1h2 % 2 == 0) {
      setAP_FV_E2_K("unclicked");
    } else {
      setAP_FV_E2_K("clicked");
    }
  }
  function AP_FV_E3_K_c() {
    setf1h3(f1h3 + 1);
    if (f1h3 % 2 == 0) {
      setAP_FV_E3_K("unclicked");
    } else {
      setAP_FV_E3_K("clicked");
    }
  }
  function AP_FV_E4_K_c() {
    setf1h4(f1h4 + 1);
    if (f1h4 % 2 == 0) {
      setAP_FV_E4_K("unclicked");
    } else {
      setAP_FV_E4_K("clicked");
    }
  }
  function AP_FV_E5_K_c() {
    setf1h5(f1h5 + 1);
    if (f1h5 % 2 == 0) {
      setAP_FV_E5_K("unclicked");
    } else {
      setAP_FV_E5_K("clicked");
    }
  }

  function AP_ER_E1_K_c() {
    setf2h1(f2h1 + 1);
    if (f2h1 % 2 == 0) {
      setAP_ER_E1_K("unclicked");
    } else {
      setAP_ER_E1_K("clicked");
    }
  }

  function AP_ER_E2_K_c() {
    setf2h2(f2h2 + 1);
    if (f2h2 % 2 == 0) {
      setAP_ER_E2_K("unclicked");
    } else {
      setAP_ER_E2_K("clicked");
    }
  }

  function AP_ER_E3_K_c() {
    setf2h3(f2h3 + 1);
    if (f2h3 % 2 == 0) {
      setAP_ER_E3_K("unclicked");
    } else {
      setAP_ER_E3_K("clicked");
    }
  }

  function AP_ER_E4_K_c() {
    setf2h4(f2h4 + 1);
    if (f2h4 % 2 == 0) {
      setAP_ER_E4_K("unclicked");
    } else {
      setAP_ER_E4_K("clicked");
    }
  }
  function AP_ER_E5_K_c() {
    setf2h1(f2h5 + 1);
    if (f2h5 % 2 == 0) {
      setAP_ER_E5_K("unclicked");
    } else {
      setAP_ER_E5_K("clicked");
    }
  }

  function AP_TY_E1_K_c() {
    setf3h1(f3h1 + 1);
    if (f3h1 % 2 == 0) {
      setAP_TY_E1_K("unclicked");
    } else {
      setAP_TY_E1_K("clicked");
    }
  }

  function AP_TY_E2_K_c() {
    setf3h2(f3h2 + 1);
    if (f3h2 % 2 == 0) {
      setAP_TY_E2_K("unclicked");
    } else {
      setAP_TY_E2_K("clicked");
    }
  }

  const [isfilter1active, setisfilter1active] = useState("filter1inactive");
  const [hfilter1active, sethfilter1active] = useState(0);
  const [alle_projekte_wrapper_icon, setalle_projekte_wrapper_icon] = useState(
    "alle_projekte_wrapper_icon_inactive"
  );

  const [isfilter2active, setisfilter2active] = useState("filter1inactive");
  const [hfilter2active, sethfilter2active] = useState(0);
  const [alle_projekte_wrapper_icon2, setalle_projekte_wrapper_icon2] =
    useState("alle_projekte_wrapper_icon_inactive");

  const [isfilter3active, setisfilter3active] = useState("filter1inactive");
  const [hfilter3active, sethfilter3active] = useState(0);
  const [alle_projekte_wrapper_icon3, setalle_projekte_wrapper_icon3] =
    useState("alle_projekte_wrapper_icon_inactive");

  function FIlter1ausklappem() {
    sethfilter1active(hfilter1active + 1);
    if (hfilter1active % 2 == 0) {
      console.log("FF");
      setisfilter1active("filter1active");
      setalle_projekte_wrapper_icon("alle_projekte_wrapper_icon_active");
    } else {
      setisfilter1active("filter1inactive");
      setalle_projekte_wrapper_icon("alle_projekte_wrapper_icon_inactive");
    }
  }

  function FIlter2ausklappem() {
    sethfilter2active(hfilter2active + 1);
    if (hfilter2active % 2 == 0) {
      setisfilter2active("filter1active");
      setalle_projekte_wrapper_icon2("alle_projekte_wrapper_icon_active");
    } else {
      setisfilter2active("filter1inactive");
      setalle_projekte_wrapper_icon2("alle_projekte_wrapper_icon_inactive");
    }
  }
  function FIlter3ausklappem() {
    sethfilter3active(hfilter3active + 1);
    if (hfilter3active % 2 == 0) {
      setisfilter3active("filter3active");
      setalle_projekte_wrapper_icon3("alle_projekte_wrapper_icon_active");
    } else {
      setisfilter3active("filter3inactive");
      setalle_projekte_wrapper_icon3("alle_projekte_wrapper_icon_inactive");
    }
  }

  const [mobileFilterStatus, setmobileFilterStatus] = useState(false);
  const [mobile_Filter_Box_Status, setmobile_Filter_Box_Status] = useState(
    "Menue_Filter_Box_unclicked"
  );

  const [MobMiF1H1, setMobMiF1H1] = useState(1);
  function MobMIR1() {
    setMobMiF1H1(MobMiF1H1 + 1);
    if (MobMiF1H1 % 2 == 0) {
      setmobile_Filter_Box_Status("Menue_Filter_Box_unclicked");
    } else {
      setmobile_Filter_Box_Status("Menue_Filter_Box_clicked");
    }
  }

  return (
    <div>
      <div id="Desktop_Wrapper">
        <div id="alle_projekte_ALL_wrapper">
          <div id="alle_projekte_Layer"></div>
          <Top_nav_Bar />
          <div id="alle_projekte_wrapper">
            <div id="alle_projekte_filter_wrapper">
              <div id="alle_projekte_filter_wrapper_inner">
                <div id={isfilter1active}>
                  {" "}
                  <div
                    id="alle_projekte_Filter1_wrapper_heading"
                    onClick={() => FIlter1ausklappem()}
                  >
                    <h3 id="alle_projekte_wrapper_h3">Mindestinvestition</h3>
                    <div id={alle_projekte_wrapper_icon}>
                      <img
                        src={Filtertrigger}
                        id="alle_projekte_wrapper_close_img"
                      />
                    </div>
                  </div>
                  <div id="Filter_row_wrapper">
                    <h3 id="AlleProjekte_e_H3">1-50 €</h3>
                    <div id={AP_FV_E1_K} onClick={() => AP_FV_E1_K_c()}></div>
                  </div>
                  <div id="Filter_row_wrapper">
                    <h3 id="AlleProjekte_e_H3">50-100 €</h3>
                    <div id={AP_FV_E2_K} onClick={() => AP_FV_E2_K_c()}></div>
                  </div>
                  <div id="Filter_row_wrapper">
                    <h3 id="AlleProjekte_e_H3">100-500 €</h3>
                    <div id={AP_FV_E3_K} onClick={() => AP_FV_E3_K_c()}></div>
                  </div>
                  <div id="Filter_row_wrapper">
                    <h3 id="AlleProjekte_e_H3">500-1000 €</h3>
                    <div id={AP_FV_E4_K} onClick={() => AP_FV_E4_K_c()}></div>
                  </div>
                  <div id="Filter_row_wrapper">
                    <h3 id="AlleProjekte_e_H3">1000 € +</h3>
                    <div id={AP_FV_E5_K} onClick={() => AP_FV_E5_K_c()}></div>
                  </div>
                </div>
              </div>

              <div id="alle_projekte_filter_wrapper_inner">
                <div id={isfilter2active}>
                  {" "}
                  <div
                    id="alle_projekte_Filter1_wrapper_heading"
                    onClick={() => FIlter2ausklappem()}
                  >
                    <h3 id="alle_projekte_wrapper_h3">Erw. Rendite</h3>
                    <div id={alle_projekte_wrapper_icon2}>
                      <img
                        src={Filtertrigger}
                        id="alle_projekte_wrapper_close_img"
                      />
                    </div>
                  </div>
                  <div id="Filter_row_wrapper">
                    <h3 id="AlleProjekte_e_H3">1-4 %</h3>
                    <div id={AP_ER_E1_K} onClick={() => AP_ER_E1_K_c()}></div>
                  </div>
                  <div id="Filter_row_wrapper">
                    <h3 id="AlleProjekte_e_H3">4-8 %</h3>
                    <div id={AP_ER_E2_K} onClick={() => AP_ER_E2_K_c()}></div>
                  </div>
                  <div id="Filter_row_wrapper">
                    <h3 id="AlleProjekte_e_H3">8-12 %</h3>
                    <div id={AP_ER_E3_K} onClick={() => AP_ER_E3_K_c()}></div>
                  </div>
                  <div id="Filter_row_wrapper">
                    <h3 id="AlleProjekte_e_H3">12 % +</h3>
                    <div id={AP_ER_E4_K} onClick={() => AP_ER_E4_K_c()}></div>
                  </div>
                  <div id="Filter_row_wrapper">
                    <h3 id="AlleProjekte_e_H3">Variabel</h3>
                    <div id={AP_ER_E5_K} onClick={() => AP_ER_E5_K_c()}></div>
                  </div>
                </div>
              </div>

              <div id="alle_projekte_filter_wrapper_inner">
                <div id={isfilter3active}>
                  {" "}
                  <div
                    id="alle_projekte_Filter1_wrapper_heading"
                    onClick={() => FIlter3ausklappem()}
                  >
                    <h3 id="alle_projekte_wrapper_h3">Blockchain</h3>
                    <div id={alle_projekte_wrapper_icon3}>
                      <img
                        src={Filtertrigger}
                        id="alle_projekte_wrapper_close_img"
                      />
                    </div>
                  </div>
                  <div id="Filter_row_wrapper">
                    <h3 id="AlleProjekte_e_H3">Ethereum</h3>
                    <div id={AP_TY_E1_K} onClick={() => AP_TY_E1_K_c()}></div>
                  </div>
                  <div id="Filter_row_wrapper">
                    <h3 id="AlleProjekte_e_H3">Stellar</h3>
                    <div id={AP_TY_E2_K} onClick={() => AP_TY_E2_K_c()}></div>
                  </div>
                  <div id="Filter_row_wrapper">
                    <h3 id="AlleProjekte_e_H3">Private</h3>
                    <div id={AP_TY_E2_K} onClick={() => AP_TY_E2_K_c()}></div>
                  </div>
                  <div id="Filter_row_wrapper">
                    <h3 id="AlleProjekte_e_H3">Sonstige</h3>
                    <div id={AP_TY_E2_K} onClick={() => AP_TY_E2_K_c()}></div>
                  </div>
                </div>
              </div>
            </div>

            <div id="alle_projekte_projekte_wrapper">
              <div id="alle_projekte_projekte_wrapper_Kategorien">
                <h2 id="alle_projekte_projekte_wrapper_projekte_kategorien">
                  Kategorie wählen:
                </h2>

                <div id="alle_projekte_kategorien_menue">
                  <div
                    id="FilterButtonAlle"
                    onClick={() => BuildAllArray(ProjekteArray)}
                  >
                    <h2 id="FilterButtonAlle_h2">Alle</h2>
                  </div>
                  <div onClick={() => BuildLogistikArray(ProjekteArray)}>
                    <Kategorien_Filter
                      Img={Schiffahrtimg}
                      HoverText="Logistik"
                    />
                  </div>
                  <div onClick={() => BuildTechnologieArray(ProjekteArray)}>
                    <Kategorien_Filter
                      Img={TechnologieImg}
                      HoverText="Technologie"
                    />
                  </div>
                  <div onClick={() => BuildFinanzenArray(ProjekteArray)}>
                    <Kategorien_Filter Img={FinanceImg} HoverText="Finanzen" />
                  </div>
                  <div onClick={() => BuildEnergieArray(ProjekteArray)}>
                    <Kategorien_Filter Img={EnergieImg} HoverText="Energie" />
                  </div>
                  <div onClick={() => BuildImmobilienArray(ProjekteArray)}>
                    <Kategorien_Filter
                      Img={ImmobilienImg}
                      HoverText="Immobilien"
                    />
                  </div>

                  <div onClick={() => BuildUmweltArray(ProjekteArray)} v>
                    <Kategorien_Filter Img={UmweltImg} HoverText="Umwelt" />
                  </div>
                  <div onClick={() => BuildGamingArray(ProjekteArray)}>
                    <Kategorien_Filter Img={GamingImg} HoverText="Gaming" />
                  </div>
                </div>
              </div>

              <div id="alle_projekte_projekte_wrapper_projekte">
                <ul id="alle_projekte_ul">
                  {shownProjects.map((Projekt) => (
                    <li id="alle_projekte_li">
                      <Link to={Projekt.InternerLink}>
                        <AlleProjekte_Projekt
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
                {Keinegefunden()}
              </div>
            </div>
          </div>
          <Footer />{" "}
        </div>
      </div>

      <div id="Mobile_Wrapper">
        <div id="Mobile_AlleP_Wrapper">
          {" "}
          <Mobile_menue />
          <div id="Mobile_AlleP_Layer"></div>
          <div id="Mobile_AlleP_Wrapper_Content">
            <div id="Mobile_AlleP_Top_Sec">
              <h2 id="Mobile_AlleP_Top_Sec_H2">Alle</h2>
              <h2 id="Mobile_AlleP_Top_Sec_H2_yellow">Projekte</h2>
            </div>
            <div id="Mobile_AlleP_Filter_Wrapper">
              <h2
                id="Mobile_AlleP_Filter_Wrapper_h3"
                onClick={() => setmobileFilterStatus(true)}
              >
                Filter öffnen
              </h2>
              <img
                src={Filtertrigger}
                onClick={() => setmobileFilterStatus(true)}
                id="FilerImg"
              />

              {mobileFilterStatus && (
                <div id="Mobile_AlleP_Filter_Wrapper_AUSGEKLAPPT_Wrapper">
                  <div id="Mobile_AlleP_Filter_Wrapper_AUSGEKLAPPT_Wrapper_top">
                    <h3 id="Mobile_AlleP_Filter_Wrapper_h3">
                      Filter schließen
                    </h3>{" "}
                    <div
                      id="Mobile_Filter_Closing"
                      onClick={() => setmobileFilterStatus(false)}
                    >
                      <img src={Filtertrigger} id="FilerImgTurn" />
                    </div>
                  </div>
                  <div id="Mobile_AlleP_Filter_Wrapper_AUSGEKLAPPT_Wrapper_buttom">
                    <div id="Mobile_AlleP_Filter_Wrapper_AUSGEKLAPPT_Wrapper_buttom_Left">
                      <div id="Mobile_AlleP_Filter_Wrapper_AUSGEKLAPPT_Wrapper_buttom_Left_top">
                        <h4 id="Mobil_Filter_Pop_Up_h4">Mindestinvestition</h4>
                        <div id="Menue_Filter_row" onClick={() => MobMIR1()}>
                          <h4 id="Menue_Filter_h4">>50 €</h4>
                          <div id={mobile_Filter_Box_Status}></div>
                        </div>
                        <div id="Menue_Filter_row" onClick={() => MobMIR1()}>
                          <h4 id="Menue_Filter_h4">50 €</h4>
                          <div id={mobile_Filter_Box_Status}></div>
                        </div>
                        <div id="Menue_Filter_row" onClick={() => MobMIR1()}>
                          <h4 id="Menue_Filter_h4">100 €</h4>
                          <div id={mobile_Filter_Box_Status}></div>
                        </div>
                        <div id="Menue_Filter_row" onClick={() => MobMIR1()}>
                          <h4 id="Menue_Filter_h4">500 €</h4>
                          <div id={mobile_Filter_Box_Status}></div>
                        </div>
                        <div id="Menue_Filter_row" onClick={() => MobMIR1()}>
                          <h4 id="Menue_Filter_h4">1000 €</h4>
                          <div id={mobile_Filter_Box_Status}></div>
                        </div>
                      </div>
                      <div id="Mobile_AlleP_Filter_Wrapper_AUSGEKLAPPT_Wrapper_buttom_Left_bott">
                        <h4 id="Mobil_Filter_Pop_Up_h4">Blockchain</h4>
                        <div id="Menue_Filter_row" onClick={() => MobMIR1()}>
                          <h4 id="Menue_Filter_h4">Ethereum</h4>
                          <div id={mobile_Filter_Box_Status}></div>
                        </div>
                        <div id="Menue_Filter_row" onClick={() => MobMIR1()}>
                          <h4 id="Menue_Filter_h4">Stellar</h4>
                          <div id={mobile_Filter_Box_Status}></div>
                        </div>
                        <div id="Menue_Filter_row" onClick={() => MobMIR1()}>
                          <h4 id="Menue_Filter_h4">Privat</h4>
                          <div id={mobile_Filter_Box_Status}></div>
                        </div>
                        <div id="Menue_Filter_row" onClick={() => MobMIR1()}>
                          <h4 id="Menue_Filter_h4">Sonstige</h4>
                          <div id={mobile_Filter_Box_Status}></div>
                        </div>
                      </div>
                    </div>
                    <div id="Mobile_AlleP_Filter_Wrapper_AUSGEKLAPPT_Wrapper_buttom_Right">
                      <h4 id="Mobil_Filter_Pop_Up_h4">Kategorien</h4>
                      <div id="Mobile_Filter_Kategorien_Filter_Wrapper">
                        <div id="Mobile_Filter_Kategorien_Filter_Box">
                          <img
                            src={Schiffahrtimg}
                            id="Mobile_Filter_Kategorien_Filter_Box_Img"
                          />
                          <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                            Schiffahrt
                          </h4>
                        </div>
                        <div id="Mobile_Filter_Kategorien_Filter_Box">
                          <img
                            src={Schiffahrtimg}
                            id="Mobile_Filter_Kategorien_Filter_Box_Img"
                          />
                          <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                            Schiffahrt
                          </h4>
                        </div>
                        <div id="Mobile_Filter_Kategorien_Filter_Box">
                          <img
                            src={Schiffahrtimg}
                            id="Mobile_Filter_Kategorien_Filter_Box_Img"
                          />
                          <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                            Schiffahrt
                          </h4>
                        </div>
                        <div id="Mobile_Filter_Kategorien_Filter_Box">
                          <img
                            src={Schiffahrtimg}
                            id="Mobile_Filter_Kategorien_Filter_Box_Img"
                          />
                          <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                            Schiffahrt
                          </h4>
                        </div>
                        <div id="Mobile_Filter_Kategorien_Filter_Box">
                          <img
                            src={Schiffahrtimg}
                            id="Mobile_Filter_Kategorien_Filter_Box_Img"
                          />
                          <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                            Schiffahrt
                          </h4>
                        </div>
                        <div id="Mobile_Filter_Kategorien_Filter_Box">
                          <img
                            src={Schiffahrtimg}
                            id="Mobile_Filter_Kategorien_Filter_Box_Img"
                          />
                          <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                            Schiffahrt
                          </h4>
                        </div>
                        <div id="Mobile_Filter_Kategorien_Filter_Box">
                          <img
                            src={Schiffahrtimg}
                            id="Mobile_Filter_Kategorien_Filter_Box_Img"
                          />
                          <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                            Schiffahrt
                          </h4>
                        </div>
                        <div id="Mobile_Filter_Kategorien_Filter_Box">
                          <img
                            src={Schiffahrtimg}
                            id="Mobile_Filter_Kategorien_Filter_Box_Img"
                          />
                          <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                            Schiffahrt
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div id="Mobile_AlleP_Projekte_Wrapper">
              <div id="Mobile_AlleP_Projekte_Box_Wrapper">
                <ul id="Mobile_Home_Projekt_Sec_Grid">
                  {ProjekteArray.map((Projekt) => (
                    <li id="home_mobil_projekte_li_11">
                      <Link to={Projekt.InternerLink}>
                        <Mobile_Home_Projekt_Box
                          title={Projekt.name}
                          KategorieBildLink={Projekt.KategorieBildLink}
                          Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                          ErwarteteRendite={Projekt.ErwRendite}
                          Typ={Projekt.Typ}
                          Logo={Projekt.LogoLink}
                          titleImg={Projekt.TitleLink}
                          Mindestinvestition={Projekt.Mindestinvestition}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
        <Mobile_Footer />
      </div>
    </div>
  );
}

export default AlleProjekte;
