import "./Test.css";
import { Route, Link } from "react-router-dom";

import logo from "./assets/images/logo.png";
function Test(props) {
  return (
    <div>
      <div id="Menue_Wrapper">
        <div id="Menue_Left_Side">
          <Link to="./">
            <div id="top_menue_logoWrapper">
              <img src={logo} id="top_menue_logoimg" />
            </div>
          </Link>
        </div>
        <div id="Menue_Right_Side">
          <div id="Right_Spalte">
            <div id="Right_Item_Item_top">
              <h2 id="Top_Menue_h2">Security Token Offering</h2>
            </div>
            <div id="Right_Item_Item">
              <h4 id="Top_Menue_h4">Alle Projekte</h4>
            </div>

            <div id="Right_Item_Item">
              <h4 id="Top_Menue_h4">Was sind STOs?</h4>
            </div>
            <div id="Right_Item_Item">
              <h4 id="Top_Menue_h4">Sekundärmarkt</h4>
            </div>
          </div>
        </div>

        <div id="Right_Spalte">
          <div id="Right_Item_Item_top">
            <h2 id="Top_Menue_h2">ChainvestCapital</h2>
          </div>
          <div id="Right_Item_Item">
            <h4 id="Top_Menue_h4">Über Uns</h4>
          </div>

          <div id="Right_Item_Item">
            <h4 id="Top_Menue_h4">Presse</h4>
          </div>
          <div id="Right_Item_Item">
            <h4 id="Top_Menue_h4">Bei uns listen</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
