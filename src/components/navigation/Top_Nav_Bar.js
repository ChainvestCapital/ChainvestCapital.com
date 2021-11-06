import "./Top_Nav_Bar.css";
import logo from "../../assets/images/logo.png";
import arrow from "../../assets/images/arrow.png";
import { Route, Link } from "react-router-dom";

function Top_Menue_Bar(props) {
  return (
    <div>
      <div id="Top_Menue_Bar_Wrapper">
        <img src={logo} id="Top_Menue_Bar_logo_img" />
        <div id="Top_Menue_Bar_Button_Wrapper">
          <Link to="">
            {" "}
            <div id="Top_Menue_Bar_Button_1">
              <h3 id="Top_Menue_Bar_h3">Digitale Wertpapiere</h3>
            </div>
          </Link>
          <Link to="/Für-Unternehmen">
            {" "}
            <div id="Top_Menue_Bar_Button_2">
              <h3 id="Top_Menue_Bar_h3">Für Unternehmen</h3>
            </div>
          </Link>
          <Link to="/alleProjekte">
            {" "}
            <div id="Top_Menue_Bar_Button_yellow">
              <h3 id="Top_Menue_Bar_h3_white">Alle Projekte</h3>
              <img src={arrow} id="Top_Menue_Bar_Button_yellow_IMG" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Top_Menue_Bar;
