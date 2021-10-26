import Kachel_1h_2w from "../../components/Kacheln/Kachel_1h_2w";
import Kachel_1h_2w_Blockchain from "../../components/Kacheln/Kachel_1h_2w_Blockchain";
import Kachel_2w_2h from "../../components/Kacheln/Kachel_2w_2h";
import Kachel_Klein from "../../components/Kacheln/Kachel_klein";
import Ethereum from "../../../assets/images/Ethereum.png";
import "./Design/Token_Vogemann.css";

function Token_Vogemann(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Token</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>
      <div id="Vogemann_Token_Wrapper">
        <div id="Vogemann_Token_Top">
          <div id="Vogemann_Token_left">
            <Kachel_Klein text="GST" title="TICKER" />
            <Kachel_Klein text="50.000.000" title="ANZAHL" />
            <Kachel_Klein
              text="06.07.2020
"
              title="TOKENERSTELLUNG"
            />

            <Kachel_Klein text="1 $" title="NENNWERT" />
          </div>
          <div id="Vogemann_Token_right">
            <Kachel_2w_2h
              text="Die Token können auf der Ethereum Blockchain transferiert werden. Die Übertragung der zu Grunde liegenden Rechte erfolgt nach erfolgreicher Bestätigung innerhalb des Netzwerkes. Es besteht allerdings keine Zulassung zu einem geregelten Markt oder sonstigen Handelsplatz, multilateralen Handelssystem oder organisierten Handelssystem, was eine faktische Einschränkung der Handelbarkeit darstellen kann."
              title="ÜBERTRAGUNG"
            />
          </div>
        </div>

        <div id="Vogemann_Token_Under">
          <div id="Vogemann_Token_Under_LEFT">
            <Kachel_1h_2w_Blockchain
              img={Ethereum}
              title="Blockchain"
              text="Blockchain"
            />
          </div>

          <div id="Vogemann_Token_Under_Right">
            <Kachel_Klein text="DE000A2P1QZ6" title="ISIN" />
            <Kachel_Klein
              text="Nicht definiert"
              title="MAXIMALE MENGE
"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Token_Vogemann;
