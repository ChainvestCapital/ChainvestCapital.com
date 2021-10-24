import "./Design/BB1Dokumente.css";
import Kachel_Dokumente from "../../components/Kacheln/Kachel_Dokumente";
function BB1Dokumente(props) {
  return props.trigger ? (
    <div>
      <div id="Dokumente_Wrapper">
        <div id="project_changing_heading_wrapper">
          <h4 id="project_changing_heading">Dokumente</h4>
          <div id="project_changing_heading_unterstrich"></div>
        </div>
        <div id="Dokumente_Bottom_Wrapper">
          <Kachel_Dokumente
            title="Wertpapierprospekt"
            desc="Am 30.01.2019 veröffentlichter Wertpapierprospekt zur Ausgabe der BB1 Token, das durch die Bundesanstalt für Finanzdienstleitungsaufsicht (BaFin) auf Vollständigkeit geprüft wurde."
          />
          <Kachel_Dokumente
            title="Lightpaper"
            desc="Ein Informationspapier, welches die Grundzüge des Token-Angebots und der Bitbond GmbH darstellt und direkt durch diese ausgegeben wurde."
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default BB1Dokumente;
