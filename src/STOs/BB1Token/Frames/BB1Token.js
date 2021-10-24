import "./Design/BB1Token.css";
import Kachel_Klein from "../../components/Kacheln/Kachel_klein";
import Kachel_1h_2w from "../../components/Kacheln/Kachel_1h_2w";
import Kachel_2w_2h from "../../components/Kacheln/Kachel_2w_2h";
import Kachel_1h_2w_Blockchain from "../../components/Kacheln/Kachel_1h_2w_Blockchain";

import Stellar from "../../../assets/images/Stellar.png";

function BB1Token(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Token</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>
      <div id="Token_Content_Wrapper">
        <div id="Token_Content_Top">
          <div id="Token_Content_Left">
            <div id="Token_Content_Left_top">
              <Kachel_Klein title="TICKER" text="BB1" />
              <Kachel_Klein
                title="Max. Anzahl
"
                text="100.000.000
"
              />
              <Kachel_Klein title="Burning" text="Nein" />
              <Kachel_Klein title="Bisher emittiert" text="2,668,471" />
              <Kachel_Klein title="ISIN" text="DE000A2TR7Q2" />
              <Kachel_Klein title="ITIN" text="8WR5-AKBG-X" />
            </div>
            <div id="Token_Content_Left_bottom">
              <Kachel_1h_2w
                title="ERSTELLUNG"
                text="Bei Zahlungseingang wird die entsprechende Anzahl an Token generiert."
              />
            </div>
          </div>
          <div id="Token_Content_Right">
            <Kachel_2w_2h
              text="Nicht ausgeschlossen werden kann, dass Tokeninhaber die BB1-Token direkt an andere Parteien übertragen und/oder BB1-Token auf Antrag von Anlegern oder anderen an einer Onlinehandelsplattform für Kryptowährungen gelistet werden."
              title="ÜBERTRAGUNG"
            />
            <Kachel_2w_2h
              text="Die tokenbasierten Schuldverschreibungen werden nicht zum Handel an einem geregelten Markt im Sinne der Richtlinie 2014/65/EU vom 15. Mai 2014 des Europäischen Parlaments und des Rates oder an einem anderen gleichwertigen Markt zugelassen oder einbezogen. Der Bitbond Token kann nach Ende der Zeichnungsfrist an der integrierten, dezentralisierten Börse der Stellar Blockchain (DEX) gehandelt werden."
              title="HANDEL"
            />
          </div>
        </div>

        <div id="Token_Content_Bottom">
          <Kachel_1h_2w
            title="TRACKING"
            text="StellarExpert | BB1 by [Bitbond]GD5J6HLF5666X4AZLTFTXLY4
            6J5SW7EXRKBLEYPJP33S33MXZGV6CWFN"
          />
          <Kachel_1h_2w_Blockchain
            title="Blockchain"
            text="Stellar"
            img={Stellar}
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default BB1Token;
