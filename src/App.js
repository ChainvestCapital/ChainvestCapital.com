import "./App.css";

import { Route, Link } from "react-router-dom";

import Home from "./Archiv/Home.js";
import alleProjekte from "./alleProjekte.js";
import about from "./Archiv/about.js";
import Was_sind_STOs from "./Was_sind_STOs";
import FürUnternehmen from "./FürUnternehmen.js";
import Impressum from "./Impressum.js";
import Datenschutzerklärung from "./Datenschutzerklärung.js";
import ProjekteVergleichen from "./ProjekteVergleichen.js";
import MusterProject from "./STOs/MusterProject.js";
import Test from "./Test";
import Partner from "./Partner.js";
import Presse from "./Presse";

import Bitbond1 from "./STOs/BB1Token/Bitbond.js";
import Vogemann1 from "./STOs/Vogemann/Vogemann.js";
import Tomorrow1 from "./STOs/Tomorrow/Tomorrow.js";

import allData from "./allData.js";
import Home11 from "./Home11.js";
import Sekundärmärkte from "./Sekundärmärkte.js";
import Muster from "./Digitale Wertpapiere/Muster/Muster.js";
import Bitbond from "./Digitale Wertpapiere/Projekte/Bitbond/Bitbond";
import Vogemann from "./Digitale Wertpapiere/Projekte/Vogemann/Vogemann";
import Tomorrow from "./Digitale Wertpapiere/Projekte/Tomorrow/Tomorrow";

import Überuns from "./Über-uns.js";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home11} />
      <Route exact path="/Home" component={Home11} />
      <Route exact path="/alleProjekte" component={alleProjekte} />
      <Route exact path="/about" component={about} />
      <Route exact path="/über-uns" component={Überuns} />

      <Route exact path="/Was-sind-STOs" component={Was_sind_STOs} />
      <Route exact path="/Für-Unternehmen" component={FürUnternehmen} />
      <Route exact path="/Impressum" component={Impressum} />
      <Route exact path="/Test" component={Test} />
      <Route exact path="/Partner" component={Partner} />
      <Route exact path="/Presse" component={Presse} />

      <Route exact path="/Digitale-Wertpapiere/Muster" component={Muster} />
      <Route exact path="/Digitale-Wertpapiere/Bitbond" component={Bitbond} />
      <Route exact path="/Digitale-Wertpapiere/Vogemann" component={Vogemann} />
      <Route exact path="/Digitale-Wertpapiere/Tomorrow" component={Tomorrow} />

      <Route
        exact
        path="/Datenschutzerklärung"
        component={Datenschutzerklärung}
      />
      <Route
        exact
        path="/ProjekteVergleichen"
        component={ProjekteVergleichen}
      />

      <Route exact path="/Sekundärmärkte" component={Sekundärmärkte} />

      <Route
        exact
        path="/security-token-offering/Bitbond"
        component={Bitbond1}
      />
      <Route
        exact
        path="/security-token-offering/Vogemann"
        component={Vogemann1}
      />
      <Route
        exact
        path="/security-token-offering/Tomorrow"
        component={Tomorrow1}
      />

      <Route
        exact
        path="/security-token-offering/musterproject"
        component={MusterProject}
      />
      <Route exact path="/allData" component={allData} />
    </div>
  );
}

export default App;
