import "./Design/TokenSale_Vogemann.css";
import Kachel_Klein from "../../components/Kacheln/Kachel_klein";
import Kachel_1h_2w from "../../components/Kacheln/Kachel_1h_2w";
import Kachel_2w_2h from "../../components/Kacheln/Kachel_2w_2h";

function TokenSale_Vogemann(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">TokenSale</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>
      <div id="Token_Sale_Vogemann_Wrapper">
        <div id="TokenSale_Vogemann_left">
          <Kachel_Klein
            title="ERW. RENDITE
"
            text="8% p.a."
          />
          <Kachel_Klein title="FINANZIERUNGSVOLUMEN" text="50.000.000 $" />
          <Kachel_Klein
            title="RECHTLICHE BEZEICHNUNG"
            text="Nachrangige Genussrechte €"
          />
          <Kachel_Klein title="AGIO" text="2% auf Kaufpreis" />
          <Kachel_Klein
            title="EMMISSIONSZEITRAUM"
            text="01.07.2020-31.12.2020"
          />

          <Kachel_Klein title="AUSZAHLUNGSWÄHRUNG" text="USA" />
          <Kachel_Klein title="EMISSIONS-KOSTEN" text="4.250.000,00 USD" />
          <Kachel_Klein title="MINDESTINVESTITION" text="1000 $" />
        </div>
        <div id="TokenSale_Vogemann_Right">
          <div id="TokenSale_Vogemann_Right_top">
            <Kachel_1h_2w
              text="Die tokenisierten Genussrechte werden nicht an einem geregelten Markt oder MTF gehandelt und ein Antrag auf Zulassung ist nicht geplant."
              title="HANDELBARKEIT"
            />
            <Kachel_2w_2h
              text="Der Emissionserlös nach Abzug der emissionsbedingten Kosten in Höhe von voraussichtlich USD 45.750.000,00 wird von der Emittentin für die Finanzierung ihrer allgemeinen und satzungsgemäßen Geschäftstätigkeit, das heißt den Aufbau eines Portfolios in Handysize-, Supra- und Ultramax-Massengutschiffe mit einer Tragfähigkeit zwischen 30.000 bis 70.000 metrischen Tonnen, ausgestattet mit Bordkränen, die nicht älter als 10 Jahre alt sein dürfen und die überdurchschnittlich niedrigen Verbrauches- und Emissionswerten aufweisen, verwendet."
              title="MITTELVERWENDUNG"
            />
          </div>
          <div id="TokenSale_Vogemann_Right_unten">
            <Kachel_Klein
              title="Zinsbeginn"
              text="01.01.2021
"
            />
            <Kachel_Klein
              title="Laufzeit"
              text="max. 15 Jahre
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

export default TokenSale_Vogemann;
