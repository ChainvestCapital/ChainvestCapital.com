import "./ProjektComponentBox.css";
import VogemannLogo from "../../assets/images/VogemannLogo.png";
import VogemannTitle from "../../assets/images/VogemannImg.png";
import Schiffahrtimg from "../../assets/images/Schiffahrt.png";

function ProjektComponentBox(props) {
  return (
    <div>
      <div id="ProjektCompBox_wrapper">
        <div id="ProjektComponentBox_top">
          <img src={props.titleImg} id="ProjektComponentBox_top_img" />
          <div id="ProjektComponentBox_top_Farbverlauf"></div>

          <div id="ProjektComponentBox_top_heading">
            <h3 id="ProjektComponentBox_top_heading_h3">{props.title}</h3>
            <img
              src={props.KategorieBildLink}
              id="ProjektComponentBox_top_heading_img"
            />
          </div>
          <div id="ProjektComponentBox_Logo_wrapper">
            <img src={props.Logo} id="ProjektComponentBox_logo_img" />
          </div>
        </div>
        <div id="ProjektComponentBox_bottom">
          <div id="ProjektComponentBox_Eintrag">
            <h3 id="ProjektComponentBox_h3">{props.Finanzierungsvolumen}</h3>
            <h4 id="ProjektComponentBox_h4">Finanzierungsvolumen</h4>
          </div>
          <div id="ProjektComponentBox_Eintrag">
            <h3 id="ProjektComponentBox_h3">{props.ErwarteteRendite} </h3>
            <h4 id="ProjektComponentBox_h4">Erwartete Rendite</h4>
          </div>
          <div id="ProjektComponentBox_Eintrag">
            <h3 id="ProjektComponentBox_h3">{props.Typ} </h3>
            <h4 id="ProjektComponentBox_h4">Typ</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjektComponentBox;
