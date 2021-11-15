import "./Token_Sale.css";
import Muster_Placeholder from "./Components/Muster_Placehodler";
import W25_h1 from "../../../Components/w25_h1";
import w50_h2 from "../../../Components/W50_h2";
import w25_h1 from "../../../Components/w25_h1";
import W50_h1 from "../../../Components/W50_h1";
import Bitbond_TS_Kosten from "../Charts/Bitbond_TS_Kosten";
function Token_Sale(props) {
  return props.trigger ? (
    <div>
      <div id="Token_Sale_Wrapper">
        <div id="Token_Sale_Wrapper_Top">
          <div id="Token_Sale_Wrapper_Grid">
            <W25_h1
              title="Rechtliche Bezeichnung"
              Text={props.Rechtliche_Bezeichnung}
            />
            <W25_h1
              title="Zahlungsmöglichkeiten"
              Text={props.Zahlungsmoeglichkeiten}
            />
            <W25_h1 title="Emissionszeitraum" Text={props.Emissionszeitraum} />
            <W25_h1 title="Token Ticker" Text={props.Token_Ticker} />
          </div>{" "}
          <div id="Ind_W50_2h_BBTS">
            <div id="Ind_W50_2h_BBTS_TOP">
              <div id="Ind_W50_2h_BBTS_TOP_Left">
                <Bitbond_TS_Kosten />
              </div>
              <div id="Ind_W50_2h_BBTS_Right">
                <div id="Ind_W50_2h_BBTS_Right_Row">
                  <h4 id="Ind_W50_2h_BBTS_Right_h4">Max. Tippgeberprovision</h4>
                  <h4 id="Ind_W50_2h_BBTS_Right_h4_fett">5000</h4>
                </div>
                <div id="Ind_W50_2h_BBTS_Right_Row">
                  <h4 id="Ind_W50_2h_BBTS_Right_h4">
                    Wirtschaftsprüfung u. Abschluss
                  </h4>
                  <h4 id="Ind_W50_2h_BBTS_Right_h4_fett">1.785</h4>
                </div>
                <div id="Ind_W50_2h_BBTS_Right_Row">
                  <h4 id="Ind_W50_2h_BBTS_Right_h4">Marketing u. Vertrieb</h4>
                  <h4 id="Ind_W50_2h_BBTS_Right_h4_fett">400</h4>
                </div>
                <div id="Ind_W50_2h_BBTS_Right_Row">
                  <h4 id="Ind_W50_2h_BBTS_Right_h4">Rechtsberatung</h4>
                  <h4 id="Ind_W50_2h_BBTS_Right_h4_fett">120</h4>
                </div>
                <div id="Ind_W50_2h_BBTS_Right_Row">
                  <h4 id="Ind_W50_2h_BBTS_Right_h4">Softwareentwicklung</h4>
                  <h4 id="Ind_W50_2h_BBTS_Right_h4_fett">80</h4>
                </div>
                <div id="Ind_W50_2h_BBTS_Right_Row">
                  <h4 id="Ind_W50_2h_BBTS_Right_h4">
                    Zinsaufwand für die Vorfinanzierung
                  </h4>
                  <h4 id="Ind_W50_2h_BBTS_Right_h4_fett">8</h4>
                </div>
                <h4 id="Ind_W50_2h_BBTS_Right_h4_m">
                  Die gesamten Finanzierungskosten (bei Ausnutzung der maximalen
                  Tippgeberprovision) betragen: 7.393.000 €
                </h4>
              </div>
            </div>
            <div id="Ind_W50_2h_BBTS_Bottom">
              <h3 id="Ind_W50_2h_h3">Kosten de Emittentin (in TEUR)</h3>
            </div>
          </div>
        </div>
        <div id="Token_Sale_Wrapper_Bottom">
          <W25_h1 Text={props.ITIN} title="ITIN" />
          <W25_h1 Text={props.Blockchain} title="Blockchain" />
          <W50_h1
            Text="StellarExpert | BB1 by [Bitbond]GD5J6HLF5666X4AZLTFTXLY4 6J5SW7EXRKBLEYPJP33S33MXZGV6CWFN"
            title="Tracking"
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Token_Sale;
