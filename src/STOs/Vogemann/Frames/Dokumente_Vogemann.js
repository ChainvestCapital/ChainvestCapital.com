import "./Design/Dokumente_Vogemann.css";
import Kachel_Dokumente from "../../components/Kacheln/Kachel_Dokumente";

function Dokumente_Vogemann(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Dokumente</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>
      <div id="Dokumente_Vogemann_Dokumente_Wrapper">
        <Kachel_Dokumente
          title="Wertpapierprospekt"
          desc="Am 03.07.2020 veröffentlichter Wertpapierprospekt zur Ausgabe des „GST“ Token, das durch die Bundesanstalt für Finanzdienstleistungsaufsicht (Bafin) auf Vollständigkeit geprüft wurde."
        />
        <Kachel_Dokumente
          title="Terms of Token Sale"
          desc="Bedingungen, die für die Durchführung des Security Token Offerings der Green Ship Token durch die Emittentin veröffentlicht wurde."
        />
        <Kachel_Dokumente
          title="Token Terms"
          desc="Von der Emittentin veröffentlichte Ausgabebedingungen der tokenisierten Genussrechte."
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Dokumente_Vogemann;
