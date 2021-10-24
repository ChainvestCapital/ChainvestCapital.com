import "./Design/BB1TokenSale.css";

import STO_Kosten from "../STO_Kosten";
import Kachel_Klein from "../../components/Kacheln/Kachel_klein";
import TokenSale_TokenPreis from "../TokenSale_TokenPreis";
function BB1TokenSale(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Token Sale</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>
      <div id="TokenSale_Content">
        <div id="TokenSale_Left">
          <Kachel_Klein title="ERW. RENDITE" text="4,00% + var." />
          <Kachel_Klein
            title="RECHTLICHE BEZEICHNUNG"
            text="Nachrangige Schuldverschreibung"
          />
          <Kachel_Klein
            title="ZAHLUNGS-MÖGLICHKEITEN"
            text="EUR, XLM, BTC, ETH"
          />
          <Kachel_Klein title="MINDESTINVESTITION" text="1 €" />
          <Kachel_Klein title="FINANZIERUNGSVOLUMEN" text="100.000.000 €" />
          <Kachel_Klein title="EMISSIONSZEITRAUM" text="11.03.19- 10.05.19" />
        </div>
        <div id="TokenSale_Right">
          <STO_Kosten />
          <TokenSale_TokenPreis />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default BB1TokenSale;
