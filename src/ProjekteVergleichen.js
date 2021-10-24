import "./Design/Impressum.css";

import Top_menue from "./components/navigation/top_menue";

import Footer from "./components/Footer";

import Mobile_menue from "./mobile_components/moble_menue";

function ProjekteVergleichen() {
  return (
    <div>
      <Top_menue />

      <div id="ImpressumWrapper">
        <h2 id="ProjekteVerg_h2">ProjekteVerg_h2</h2>
      </div>

      <Footer />
    </div>
  );
}

export default ProjekteVergleichen;
