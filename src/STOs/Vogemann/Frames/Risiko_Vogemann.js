import "./Design/Risiko_Vogemann.css";
import Kachel_Risiko from "../../components/Kacheln/KachelRisiko";

function Risiko_Vogemann(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Risiko</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>
      <div id="Vogemann_Risiko_Wrapper">
        <Kachel_Risiko
          text="Die Emittentin tätigt Investments in volatilen Märkten. Schiffsinvestments unterliegen erheblichen Risiken hinsichtlich der Schwankungsbreite der Einnahmen der Emittentin.Insoweit besteht das Risiko, dass die Emittentin nicht zu jeder Zeit über ausreichend Liquidität verfügt, um ihre Verpflichtungen gegenüber den Inhabern der Green Ship Token zu erfüllen. Daher besteht das Risiko, dass der Zeichner die bedingungsgemäß vereinbarten Zinszahlungen nicht, nur teilweise oder verspätet erhält sowie, dass die beim Erwerb geleistete Zeichnungssumme bei Fälligkeit nicht, nur teilweise oder nur verspätet zurückgezahlt werden kann. Etwaig vorgenommene Rück-/ Zinszahlungen können der Anfechtung im Konkurs / der Insolvenz der Emittentin unterliegen.Ferner besteht das Risiko, dass die Zeichner die Zeichnungssumme nicht, nicht vollständig oder nicht fristgerecht erbringen und damit kein ausreichendes Kapital zur Investition in die beabsichtigten Anlageobjekte zur Verfügung steht oder, dass solche Investitionen nicht gelingen.
          Es kann ferner nicht völlig ausgeschlossen werden, dass der Fall eintritt, dass die Emittentin Forderungsausfälle zu verbuchen hat, die sich zu einer signifikanten Größenordnung summieren."
          title="LIQUIDITÄTSRISIKO"
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Risiko_Vogemann;
