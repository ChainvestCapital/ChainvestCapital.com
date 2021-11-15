import W25_h1 from "../../../Components/w25_h1";
import W50_h2 from "../../../Components/W50_h2";
import W100_h2 from "../../../Components/w25_h1";

import logo from "../../../../assets/images/logo.png";

import "./Unternehmen.css";
function Unternehmen(props) {
  return props.trigger ? (
    <div>
      <div id="Desktop_Unternehmen_Wrapper">
        <div id="Bitbond_Unternehmen_Wrapper">
          <div id="Bitbond_Unternehmen_Top">
            <W50_h2
              title="Geschäftstätigkeit"
              Text={props.Geschaeftstaetigkeit}
            />
            <div id="Bitbond_Unternehmen_Grid">
              <W25_h1 title="Unternehmensbewertung" Text="50.000.000 €" />
              <W25_h1 title="Kunden" Text="40.000+" />
              <W25_h1 title="Mitarbeiter" Text="40+" />
              <W25_h1 title="Kundeneinlagen" Text="70.000.000+ €" />
            </div>
          </div>

          <div id="Bitbond_Unternehmen_Bottom">
            <div id="Bitbond_Unternehmen_Grid">
              <W25_h1 title="Firmenname" Text={props.Firmenname} />
              <W25_h1 title="Ort" Text={props.Ort} />
              <W25_h1 title="Gründung" Text={props.Gruendung} />
              <W25_h1 title="Rechtsform" Text={props.Rechtsform} />
            </div>
            <W50_h2
              title="Anteilansprüche"
              Text="Die Summe aller Crowd-Anteile stellen zusammen mit dem im Handelsregister eingetragenen Stammkapital der Emittentin (abzüglich der Nennbeträge etwaiger von der Emittentin gehaltener eigenen Geschäftsanteile) und allen von der Emittentin ausgegebenen virtuellen Optionen,virtuellen Geschäftsanteilen oder ähnlichen Rechten, die die Emittentin unter Emissions- und Incentivierungsprogrammen ausgegeben hat, das gewinnberechtigte Kapital der Emittentin dar. Durch die Genussrechte wird keine gesellschaftsrechtliche Beteiligung an der Emittentin begründet."
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Unternehmen;
