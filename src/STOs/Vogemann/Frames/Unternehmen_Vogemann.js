import "./Design/Unternehmen_Vogemann.css";
import Kachel_Klein from "../../components/Kacheln/Kachel_klein";
import Kachel_2w_2h from "../../components/Kacheln/Kachel_2w_2h";
import Kachel_FullW_2h from "../../components/Kacheln/Kachel_FullW_2h";
import Firmenkostrukt_Vogemann from "../../../assets/images/Firmenkonstrukt_Vogemann-wide.png";

function Unternehmen_Vogemann(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Unternehmen</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>
      <div id="Unternehmen_Vogemann_Wrapper">
        <div id="Kachel_FullW_1h">
          <Kachel_FullW_2h
            text="Die Vogemann Green Ship Token GmbH ist Teil der Hamburger Reederei H. Vogemann, die auf Massenguttransporte mit Bulkern spezialisiert ist. Das Geschäftsmodell des Schifffahrtsunternehmen stütz sich auf drei voneinander unabhängigen Säulen:
Die Maklerei, die Reederei und die Servicegesellschaften.
Neben der Bereederung der Reedereiflotte moderner Massengutfrachter fungiert die Vogelmann-Gruppe als Dienstleister für das kommerzielle und technische Management von Schiffen. Die Vogemann-Flotte umfasst derzeit 12 Bulker verschiedener Größen der Handysize-Klasse sowie zwei Produktentanker."
            title="Unternehmensprofil"
          />
        </div>
        <div id="Unternehmen_Vogemann_GeschäftplusFlotte">
          <div id="Unternehmen_Vogemann_GeschäftplusFlotte_left">
            <h5 id="kleine_kachel_h3_smaller">
              Die Hauptgeschäftstätigkeit der Vogenmann Green Ship Token GmbH
              ist der Erwerb, das Halten, das Verwalten und die Veräußerung von
              Beteiligungen an Gesellschaften, die Eigentümer der Green Ships
              sind sowie alle damit anfallenden Tätigkeiten.
            </h5>
            <h3 id="kleine_kachel_h4">GESCHÄFTSTÄTIGKEIT</h3>
          </div>
          <div id="Unternehmen_Vogemann_GeschäftplusFlotte_right">
            <div id="Vogemann_Flotte">
              <h3 id="kleine_kachel_h3">Flotte</h3>
              <div id="Vogemann_Flotte_Spalte">
                <h5 id="kleine_kachel_h4">JAHRE DURCHSCHNITTSALTER</h5>
                <h5 id="kleine_kachel_h4">8</h5>
              </div>
              <div id="Vogemann_Flotte_Spalte">
                <h5 id="kleine_kachel_h4">EIGENE SCHIFFE IM EINSATZ</h5>
                <h5 id="kleine_kachel_h4">14</h5>
              </div>
              <div id="Vogemann_Flotte_Spalte">
                <h5 id="kleine_kachel_h4">HANDYSIZE BULKER IM NEUBAU</h5>
                <h5 id="kleine_kachel_h4">8</h5>
              </div>
            </div>
          </div>
        </div>

        <div id="Vogemann_Firmenkonstrukt_Wrapper">
          <h3 id="kleine_kachel_h4">Firmenkosntrukt</h3>
          <img src={Firmenkostrukt_Vogemann} id="Firmenkostrukt_Vogemann_img" />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Unternehmen_Vogemann;
