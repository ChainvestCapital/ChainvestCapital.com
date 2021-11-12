import "./Design/Sekundärmärkte.css";
import { Route, Link } from "react-router-dom";

import Footer from "./components/Footer";

import { useState, useEffect } from "react";
import Coming_Soon_SM from "./assets/images/Coming_Soon_SM.png";

import Coming_Soon_SM_mobile from "./assets/images/Coming_Soon_SM_mobile.png";

import Greem_Chart_img from "./assets/images/Green_chart_img.png";
import Blue_round_fixpadding from "./components/navigation/buttons/blue_round_fixpadding";
import Top_Menue_Bar from "./components/navigation/Top_Nav_Bar";
function Sekundärmärkte() {
  useEffect(() => {
    document.title = "Sekundärmärkte";
  }, []);
  return (
    <div>
      <div id="Desktop_Wrapper">
        <Top_Menue_Bar />
        <div id="Sekundärmärkte_Wrapper">
          <div id="Sekundärmärkte_top">
            <div id="Sekundärmärkte_top_left">
              <h2 id="Sekundärmärkte_top_h2">
                Security Token auf <br />
                Sekundärmärkten
              </h2>

              <h4 id="Sekundärmärkte_top_h4">
                Chainvest stellt die Schnittstelle zwischen spannenden
                Investitionsprojekten und einer breiten Investorencommunity dar.
                Über diese Plattform erhalten AnlegerInnen Zugang zu
                vielfältigen Security Token Offerings aus unterschiedlichen
                Branchen.
              </h4>
            </div>
            <div id="Sekundärmärkte_top_RIGHT">
              <div id="Sekundärmärkte_top_RIGHT_Grid">
                <div id="Sekundärmärkte_top_RIGHT_Grid_item_1">
                  <div id="Sekundärmärkte_top_RIGHT_Grid_item_1_underlay">
                    <img
                      src={Greem_Chart_img}
                      id="Sekundärmärkte_top_RIGHT_Grid_item_1_underlay_IMG"
                    />
                  </div>
                  <div id="Sekundärmärkte_top_RIGHT_Grid_item_1_overlay"></div>
                  <div id="Sekundärmärkte_top_RIGHT_Grid_item_1_ContentLay">
                    <h3 id="Sekundärmärkte_top_RIGHT_Grid_item_1_h3">
                      Was sind Security Token
                    </h3>
                  </div>
                </div>
                <div id="Sekundärmärkte_top_RIGHT_Grid_item_2">x</div>
                <div id="Sekundärmärkte_top_RIGHT_Grid_item_4">x</div>
                <div id="Sekundärmärkte_top_RIGHT_Grid_item_4">x</div>
              </div>
              <div id="Sekundärmärkte_top_RIGHT_Grid_temp">
                <Link to="./Was-sind-STOs">
                  <Blue_round_fixpadding text="Was sind STOs?" />
                </Link>
                <Link to="./">
                  <Blue_round_fixpadding text="Was bedeutet Sekundärmärkte?" />
                </Link>

                <Link to="./">
                  <Blue_round_fixpadding text="Welche Sekundärmärkte gibt es?" />
                </Link>
                <Link to="../alleProjekte">
                  <Blue_round_fixpadding text="Alle Projekte" />{" "}
                </Link>
              </div>
            </div>
          </div>

          <div id="Sekundärmärkte_Coming_Soon">
            <div id="Sekundärmärkte_Coming_Soon_IMG_Wrapper">
              <img src={Coming_Soon_SM} id="Sekundärmärkte_Coming_Soon_IMG" />
            </div>

            <div id="Sekundärmärkte_Coming_Soon_Overlay">
              <h2 id="Sekundärmärkte_Coming_Soon_Overlay_h2">
                Cooming
                <br />{" "}
              </h2>
              <h2 id="Sekundärmärkte_Coming_Soon_Overlay_h2_yellow">Soon </h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div id="Mobile_Wrapper">
        <div id="mobile_Sekundärmärkte_Wrapper">
          <div id="mobile_Sekundärmärkte_top">Top Mobile</div>
          <div id="mobile_Sekundärmärkte_coming_soon">
            <img
              src={Coming_Soon_SM_mobile}
              id="mobile_Sekundärmärkte_coming_soon_IMG"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sekundärmärkte;
