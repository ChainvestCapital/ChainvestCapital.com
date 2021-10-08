import './App.css';

import {Route, Link} from "react-router-dom";


import Home from './Home.js'
import alleProjekte from './alleProjekte.js'
import about from './about.js'
import Was_sind_STOs from './about.js'
import FürUnternehmen from './about.js'
import Impressum from './Impressum.js'
import Datenschutzerklärung from './Datenschutzerklärung.js'


import Bitbond from './STOs/Bitbond.js'
import MusterProject from './STOs/MusterProject.js'

function App() {
  return (
    
    <div >

          <Route exact path="/" component={Home} />
          <Route exact path="/alleProjekte" component={alleProjekte} />
          <Route exact path="/about" component={about} />
          <Route exact path="/Partner" component={about} />
          <Route exact path="/Was-sind-STOs" component={Was_sind_STOs} />
          <Route exact path="/Für-Unternehmen" component={FürUnternehmen} />
          <Route exact path="/Impressum" component={Impressum} />
          <Route exact path="/Datenschutzerklärung" component={Datenschutzerklärung} />




          <Route exact path="/security-token-offering/Bitbond" component={Bitbond} />

          <Route exact path="/security-token-offering/musterproject" component={MusterProject} />




    </div>

  );
}

export default App;
