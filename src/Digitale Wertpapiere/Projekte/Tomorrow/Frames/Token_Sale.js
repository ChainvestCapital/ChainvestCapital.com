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
          <div id="Token_Sale_Wrapper_Top_Right">
            <W50_h1
              Text="Anleger*innen können die tokenbasierten Genussrechte unter Einhaltung einer Kündigungsfrist von drei Monaten innerhalb der Laufzeit ab dem 30. September 2025 ordentlich kündigen. Ferner ist eine außerordentliche Kündigung aus wichtigem Grund für Anleger*innen möglich."
              title="Kündigungsrechte"
            />{" "}
            <div id="Token_Sale_Wrapper_Top_Right_Bott">
              <W25_h1 Text="31. 10. 2021" title="Lock Up Frist" />
              <W25_h1 Text="Möglich" title="Außerordentliche Kündigung" />
            </div>
          </div>
        </div>
        <div id="Token_Sale_Wrapper_Bottom">
          <W25_h1 Text="25.000 €" title="Maximale Investitionssumme" />
          <W25_h1 Text={props.Blockchain} title="Blockchain" />
          <W50_h1
            Text="Die Emittentin ist berechtigt, das Emissionsvolumen von bis zu 2 Mio. Stück tokenbasierten Genussrechten um bis zu 6 Mio. Stück auf bis zu 8 Mio. Stück tokenbasierte Genussrechte im Gesamtpreis von bis zu 8 Mio. Euro zu erhöhen."
            title="Erweiterung des Angebots"
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Token_Sale;
