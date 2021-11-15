import "./AlleProjekte_Projekt.css";

import arrow from "../assets/images/Arrow_white.png";
function AlleProjekte_Projekt(props) {
  return (
    <div>
      <div id="AlleProj_Proj_Comp_Wrapper">
        <div id="AlleProj_Proj_Comp_top">
          <img src={props.titleImg} id="AlleProj_Proj_Comp_BG_Img" />
          <img src={props.Logo} id="AlleProj_Proj_Comp_Logo_Img" />
        </div>
        <div id="AlleProj_Proj_Comp_Mid">
          <div id="AlleProj_Proj_Comp_Mid_Left">
            <h2 id="AlleProj_Proj_Comp_Mid_title_h2">{props.title} </h2>
            <h4 id="AlleProj_Proj_Comp_Bottom_Button_h4">{props.Emittent}</h4>
          </div>

          <div id="AlleProj_Proj_Comp_Mid_Kategorie">
            <img
              src={props.KategorieBildLink}
              id="AlleProj_Proj_Comp_Mid_Kat_img"
            />
          </div>
        </div>
        <div id="AlleProj_Proj_Comp_Bottom">
          <div id="AlleProj_Proj_Comp_Bottom_Button_Wrapper">
            <h2 id="AlleProj1_Proj_Comp_Bottom_Button_h2">
              {props.ErwarteteRendite}
            </h2>
            <h4 id="AlleProj_Proj_Comp_Bottom_Button_h4">Erwartete Rendite</h4>
          </div>
          <div id="AlleProj_Proj_Comp_Bottom_Button_Wrapper">
            <h2 id="AlleProj1_Proj_Comp_Bottom_Button_h2">
              {props.Finanzierungsvolumen}
            </h2>
            <h4 id="AlleProj_Proj_Comp_Bottom_Button_h4">
              Finanzierungsvolumen
            </h4>
          </div>
        </div>
        <div id="AlleProj_Proj_Comp_Go_To">
          <div id="Top_Menue_Bar_Button_yellow">
            <h3 id="AlleProj_Proj_Comp_Go_To_h3">Zum Projekt</h3>
            <img src={arrow} id="Top_Menue_Bar_Button_yellow_IMG" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlleProjekte_Projekt;
