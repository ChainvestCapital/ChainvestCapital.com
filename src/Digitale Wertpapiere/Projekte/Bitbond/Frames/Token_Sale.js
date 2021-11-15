import "./Token_Sale.css";
import Muster_Placeholder from "./Components/Muster_Placehodler";
import W25_h1 from "../../../Components/w25_h1";
import w50_h2 from "../../../Components/W50_h2";
import w25_h1 from "../../../Components/w25_h1";
import W50_h1 from "../../../Components/W50_h1";

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
          <div id="Ind_W50_2h"></div>
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
