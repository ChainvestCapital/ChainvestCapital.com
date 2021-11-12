import "./Top_Nav_Bar_White.css";
import Logo_White from "../../assets/images/Logo_White.png";
import arrow from "../../assets/images/Arrow_white.png";
import { Route, Link } from "react-router-dom";

function Top_Menue_Bar_White(props) {
  return (
    <div>
      <div id="Top_Navigation_Bar_no">
        <Link to="../home">
          <img src={Logo_White} id="Top_Menue_Bar_logo_img_x" />
        </Link>
        <div id="Top_Navigation_Bar_RightWrapper_INNer">
          <div id="Top_Navigation_Bar_Spalte1_no">
            {" "}
            <h3 id="Top_Menue_Bar_h3_white">Digitale Wertpapiere</h3>
            <div id="Top_Navigation_Bar_Spalte1_Item1">
              <h3 id="Top_Menue_Bar_h3_black">Was ist das?</h3>
            </div>{" "}
            <Link to="../alleProjekte">
              <div id="Top_Navigation_Bar_Spalte1_Item1">
                <h3 id="Top_Menue_Bar_h3_black">Alle Projekte</h3>
              </div>
            </Link>
            <div id="Top_Navigation_Bar_Spalte1_Item1">
              <h3 id="Top_Menue_Bar_h3_black">Sekundärmärkte</h3>
            </div>
          </div>{" "}
          <div id="Top_Navigation_Bar_RightWrapper_INNerx">
            <Link to="../Für_Unternehmen">
              <div id="Top_Navigation_Bar_Spalte2">
                {" "}
                <h3 id="Top_Menue_Bar_h3_white">Für unternehmen</h3>
              </div>{" "}
            </Link>
            <Link to="../About">
              {" "}
              <div id="Top_Navigation_Bar_Spalte3">
                {" "}
                <h3 id="Top_Menue_Bar_h3_white">Über Uns</h3>
              </div>{" "}
            </Link>
            <Link to="../alleProjekte">
              {" "}
              <div id="Top_Menue_Bar_Button_yellow">
                <h3 id="Top_Menue_Bar_h3_white">Alle Projekte</h3>
                <img src={arrow} id="Top_Menue_Bar_Button_yellow_IMG" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top_Menue_Bar_White;
