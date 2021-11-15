import W25_h1 from "../../../Components/w25_h1";
import W50_h2 from "../../../Components/W50_h2";
import W100_h2 from "../../../Components/w25_h1";

import logo from "../../../../assets/images/logo.png";
import Firmen_Konstrukt_BB from "../../../../assets/images/Firmenkonstrukt_Bitbond.png";

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
            <W50_h2
              title="Verbindung zur Emittentin"
              Text="Die Bitbond GmbH ist alleinige Gesellschafterin (100%) der Emittentin. Die Bitbond
              GmbH ist somit in der Lage, in der Gesellschafterversammlung der Emittentin
              sämtliche in die Zuständigkeit der Gesellschafterversammlung fallenden Beschlüsse
              zu fassen und der Geschäftsführung Weisungen durch Gesellschafterbeschluss zu
              erteilen. Die Bitbond GmbH kann damit bedeutenden Einfluss auf die Emittentin
              ausüben."
            />
          </div>

          <div id="Bitbond_Unternehmen_Bottom">
            <div id="Bitbond_Unternehmen_Grid">
              <W25_h1 title="Firmenname" Text={props.FirmenName} />
              <W25_h1 title="Ort" Text={props.Ort} />
              <W25_h1 title="Gründung" Text={props.Gruendung} />
              <W25_h1 title="Rechtsform" Text={props.Rechtsform} />
            </div>
            <div id="BB1_Ind_w50_h2">
              <img src={Firmen_Konstrukt_BB} id="BB1_Ind_IMG" />{" "}
              <h3 id="BB1_Ind_w50_h2_h3">Firmen Konstrukt</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Unternehmen;
