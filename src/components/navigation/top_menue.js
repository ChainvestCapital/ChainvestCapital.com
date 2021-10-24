import "./top_menue.css";
import logo from "../../assets/images/logo.png";
import AccountImg from "../../assets/images/AccountImg.png";

import { useState } from "react";
import { Route, Link } from "react-router-dom";

import Top_hover from "./top_menue_hover";

function Top_menue(props) {
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
            <Link to="/alleProjekte">
              <div id="Right_Item_Item">
                <h4 id="Top_Menue_h4">Alle Projekte</h4>
              </div>
            </Link>
            <Link to="">
              <div id="Right_Item_Item">
                <h4 id="Top_Menue_h4">Was sind STOs?</h4>
              </div>
            </Link>

            <Link to="">
              <div id="Right_Item_Item">
                <h4 id="Top_Menue_h4">Sekundärmarkt</h4>
              </div>
            </Link>
          </div>
        </div>

        <div id="Right_Spalte">
          <div id="Right_Item_Item_top">
            <h2 id="Top_Menue_h2">ChainvestCapital</h2>
          </div>

          <Link to="/about">
            <div id="Right_Item_Item">
              <h4 id="Top_Menue_h4">Über Uns</h4>
            </div>
          </Link>
          <Link to="./Partner">
            <div id="Right_Item_Item">
              <h4 id="Top_Menue_h4">Partner</h4>
            </div>
          </Link>

          <Link to="/Für-Unternehmen">
            <div id="Right_Item_Item">
              <h4 id="Top_Menue_h4">Bei uns listen</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Top_menue;
