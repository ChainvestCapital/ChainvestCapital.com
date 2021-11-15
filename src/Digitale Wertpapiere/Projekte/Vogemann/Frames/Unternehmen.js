import W25_h1 from "../../../Components/w25_h1";
import W50_h2 from "../../../Components/W50_h2";
import W100_h2 from "../../../Components/w25_h1";

import Firmenkonstrukt_Vogemann from "../../../../assets/images/Firmenkonstrukt_Vogemann.png";

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
              title="Mittelverwendung"
              Text="Der Emissionserlös nach Abzug der emissionsbedingten Kosten in Höhe von voraussichtlich USD 45.750.000,00 wird von der Emittentin für die Finanzierung ihrer allgemeinen und satzungsgemäßen Geschäftstätigkeit, das heißt den Aufbau eines Portfolios in Handysize-, Supra- und Ultramax-Massengutschiffe mit einer Tragfähigkeit zwischen 30.000 bis 70.000 metrischen Tonnen, ausgestattet mit Bordkränen, die nicht älter als 10 Jahre alt sein dürfen und die überdurchschnittlich niedrigen Verbrauches- und Emissionswerten aufweisen, verwendet."
            />
          </div>

          <div id="Bitbond_Unternehmen_Bottom">
            <div id="Bitbond_Unternehmen_Grid">
              <W25_h1 title="Firmenname" Text={props.Firmenname} />
              <W25_h1 title="Ort" Text={props.Ort} />
              <W25_h1 title="Gründung" Text={props.Gruendung} />
              <W25_h1 title="Rechtsform" Text={props.Rechtsform} />
            </div>
            <div id="Indv_Vog_Unt_w50_h2">
              <div id="Indv_Vog_Unt_w50_h2_row_Wrapper">
                <div id="Indv_Vog_Unt_w50_h2_row">
                  <h3 id="Indv_Vog_Unt_w50_h2_row_h3">
                    Durchschnittsalter der Schiffe
                  </h3>
                  <h4 id="Indv_Vog_Unt_w50_h2_row_h4">8</h4>
                </div>
                <div id="Indv_Vog_Unt_w50_h2_row">
                  <h3 id="Indv_Vog_Unt_w50_h2_row_h3">
                    Eigene Schiffe im Einsatz
                  </h3>
                  <h4 id="Indv_Vog_Unt_w50_h2_row_h4">14</h4>
                </div>
                <div id="Indv_Vog_Unt_w50_h2_row">
                  <h3 id="Indv_Vog_Unt_w50_h2_row_h3">
                    Handysize Bulker im Neubau
                  </h3>
                  <h4 id="Indv_Vog_Unt_w50_h2_row_h4">8</h4>
                </div>
              </div>
              <h3 id="Indv_Vog_Unt_w50_h2_h3">Flotte </h3>
            </div>
          </div>
          <div id="Bitbond_Unternehmenskonstrukt">
            <img src={Firmenkonstrukt_Vogemann} id="Indv_Vog_Unt_w50_h2_img" />
            <h3 id="Indv_Vog_Unt_w50_h2_h3">Firmenkonstrukt </h3>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Unternehmen;
