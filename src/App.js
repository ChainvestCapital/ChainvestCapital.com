import "./App.css";

import { Route, Link } from "react-router-dom";

import Home from "./Home.js";
import alleProjekte from "./alleProjekte.js";
import about from "./about.js";
import Was_sind_STOs from "./Was_sind_STOs";
import FürUnternehmen from "./FürUnternehmen.js";
import Impressum from "./Impressum.js";
import Datenschutzerklärung from "./Datenschutzerklärung.js";
import ProjekteVergleichen from "./ProjekteVergleichen.js";
import MusterProject from "./STOs/MusterProject.js";
import Test from "./Test";
import Partner from "./Partner.js";
import Presse from "./Presse";

import Bitbond from "./STOs/BB1Token/Bitbond.js";
import Vogemann from "./STOs/Vogemann/Vogemann.js";
import Tomorrow from "./STOs/Tomorrow/Tomorrow.js";

import allData from "./allData.js";
import Home11 from "./Home11.js";
import Sekundärmärkte from "./Sekundärmärkte.js";
function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home11} />
      <Route exact path="/alleProjekte" component={alleProjekte} />
      <Route exact path="/about" component={about} />
      <Route exact path="/Was-sind-STOs" component={Was_sind_STOs} />
      <Route exact path="/Für-Unternehmen" component={FürUnternehmen} />
      <Route exact path="/Impressum" component={Impressum} />
      <Route exact path="/Test" component={Test} />
      <Route exact path="/Partner" component={Partner} />
      <Route exact path="/Presse" component={Presse} />

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
        component={Bitbond}
      />
      <Route
        exact
        path="/security-token-offering/Vogemann"
        component={Vogemann}
      />
      <Route
        exact
        path="/security-token-offering/Tomorrow"
        component={Tomorrow}
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
