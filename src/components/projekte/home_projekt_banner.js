import "./home_projekt_banner.css";
import projektBild from "../../assets/images/VogemannImg.png";
import LogoBild from "../../assets/images/VogemannLogo.png";

import Schiffahrt from "../Kategorien/Schiffahrt";

function home_projekt_banner(props) {
  return (
    <div>
      <div id="home_projekte_banner_full">
        <div id="home_projekte_banner_left">
          <div id="home_projekte_banner_img_wrapper">
            <img src={props.titleImg} id="home_projekte_banner_img" />
          </div>
          <img src={props.Logo} id="home_projekte_banner_logo_img" />
          <div id="home_projekte_banner_farbübergang"></div>
        </div>

        <div id="home_projekte_banenr_right">
          <div id="home_projekte_banenr_right_top">
            <div id="Kategorie_Wrapper">
              <img src={props.KategorieBildLink} id="Kategorie_Wrapper_img" />
            </div>
          </div>

          <h3 id="home_projekt_title">{props.title}</h3>
          <div id="home_projekte_banenr_right_content">
            <div id="home_projekte_banenr_right_eintrag">
              <h3 id="home_projekte_banenr_right_h3">
                {props.Finanzierungsvolumen}
              </h3>
              <h4 id="home_projekte_banenr_right_h4">Finanzierungsvolumen</h4>
            </div>

            <div id="home_projekte_banenr_right_eintrag">
              <h3 id="home_projekte_banenr_right_h3">
                {props.ErwarteteRendite}
              </h3>
              <h4 id="home_projekte_banenr_right_h4">Erwartete Rendite</h4>
            </div>

            <div id="home_projekte_banenr_right_eintrag">
              <h3 id="home_projekte_banenr_right_h3">{props.Typ}</h3>
              <h4 id="home_projekte_banenr_right_h4">Typ</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home_projekt_banner;
