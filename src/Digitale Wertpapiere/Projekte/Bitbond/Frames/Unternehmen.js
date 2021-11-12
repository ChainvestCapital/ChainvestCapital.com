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
            <W50_h2
              title="Geschäftstätigkeit"
              Text={props.Geschaeftstaetigkeit}
            />
          </div>

          <div id="Bitbond_Unternehmen_Bottom">
            <div id="Bitbond_Unternehmen_Grid">
              <W25_h1 title="Firmenname" Text={props.FirmenName} />
              <W25_h1 title="Ort" Text={props.Ort} />
              <W25_h1 title="Gründung" Text={props.Gruendung} />
              <W25_h1 title="Rechtsform" Text={props.Rechtsform} />
            </div>
            <W50_h2 title="Gründung" img={logo} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Unternehmen;
