import "./Design/Kachel_Dokumente.css";
import Download from "../../../assets/images/DownloadImg.png";
function Kachel_Dokumente(props) {
  return (
    <div>
      <div id="Kachel_Dokumente_Wrapper">
        <div id="Kachel_Dokumente_Top">
          <h3 id="kleine_kachel_h3">{props.title}</h3>
        </div>
        <div id="Kachel_Dokumente_Bottom">
          <img src={Download} id="Kachel_Download_img" />
          <h5 id="kleine_kachel_h4_undercase">{props.desc}</h5>
        </div>
      </div>
    </div>
  );
}

export default Kachel_Dokumente;
