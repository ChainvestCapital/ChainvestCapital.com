import "./Design/Dokumente_Tomorrow.css";
import Kachel_Dokumente from "../../components/Kacheln/Kachel_Dokumente";
function Dokumente_Tomorrow(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Dokumente</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>
      <div id="Dokumente_Tomorrow_Wrapper">
        <Kachel_Dokumente
          title="Anlagebroschüre"
          desc="Ein Informationspapier, welches die Grundzüge des Token-Angebots und der Tomorrow GmbH darstellt und direkt durch diese ausgegeben wurde."
        />
        <Kachel_Dokumente
          desc="Am 17. Oktober 2020 veröffentlichtes Basisinformationsblatt zur Ausgabe der Tomorrow Bank Token, das durch die Bundesanstalt für Finanzdienstleitungsaufsicht (BaFin) auf Vollständigkeit geprüft wurde."
          title="Basisinformationsblatt"
        />
        <Kachel_Dokumente
          desc="Von der Emittentin veröffentlichte Ausgabebedingungen der tokenisierten Genussrechte."
          title="Genussrechtsbedingungen"
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Dokumente_Tomorrow;
