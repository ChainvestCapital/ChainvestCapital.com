import "./Home11_Proj_Comp.css";
import BitbondLogo from "../assets/images/BitbondLogo.png";
import BitbondTitle from "../assets/images/BitbondImg.png";
import arrow from "../assets/images/arrow.png";
function Home11_Proj_Comp(props) {
  return (
    <div>
      <div id="Home11_Proj_Comp_Wrapper">
        <div id="Home11_Proj_Comp_top">
          <img src={props.titleImg} id="Home11_Proj_Comp_BG_Img" />
          <img src={props.Logo} id="Home11_Proj_Comp_Logo_Img" />
        </div>
        <div id="Home11_Proj_Comp_Mid">
          <h2 id="Home11_Proj_Comp_Mid_title_h2">{props.title} </h2>
          <div id="Home11_Proj_Comp_Mid_Kategorie">
            <img
              src={props.KategorieBildLink}
              id="Home11_Proj_Comp_Mid_Kat_img"
            />
          </div>
        </div>
        <div id="Home11_Proj_Comp_Bottom">
          <div id="Home11_Proj_Comp_Bottom_Button_Wrapper">
            <h2 id="Home11_Proj_Comp_Bottom_Button_h2">
              {props.ErwarteteRendite}
            </h2>
            <h4 id="Home11_Proj_Comp_Bottom_Button_h4">Erwartete Rendite</h4>
          </div>
          <div id="Home11_Proj_Comp_Bottom_Button_Wrapper">
            <h2 id="Home11_Proj_Comp_Bottom_Button_h2">
              {props.Finanzierungsvolumen}{" "}
            </h2>
            <h4 id="Home11_Proj_Comp_Bottom_Button_h4">Finanzierungsvolumen</h4>
          </div>
        </div>
        <div id="Home11_Proj_Comp_Go_To">
          <div id="Home11_Proj_Comp_Bottom_Button">
            <img src={arrow} id="Home11_Proj_Comp_Bottom_Button_IMG" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home11_Proj_Comp;
