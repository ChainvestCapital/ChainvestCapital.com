import "./Dokumente.css";
import Dokumente_Wrapper_Box from "../../../Components/Dokumente_Wrapper_Box ";
function Dokumente(props) {
  return props.trigger ? (
    <div>
      <div id="Dokumente_Wrapper">
        <Dokumente_Wrapper_Box
          title="Wertpapierprospekt"
          text="Am 30.01.2019 veröffentlichter Wertpapierprospekt zur Ausgabe der BB1 Token, das durch die Bundesanstalt für Finanzdienstleitungsaufsicht (BaFin) auf Vollständigkeit geprüft wurde."
        />
        <Dokumente_Wrapper_Box
          title="Lightpaper"
          text="Am 30.01.201Ein Informationspapier, welches die Grundzüge des Token-Angebots und der Bitbond GmbH darstellt und direkt durch diese ausgegeben wurde."
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Dokumente;
