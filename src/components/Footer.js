import "./Footer.css";
import { Route, Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";

function Footer(props) {
  return (
    <div>
      <div id="Footer_wrapper">
        <div id="Footer_top">
          <div id="Footer_left">
            <h2 id="Footer_left_h2">
              Let Security Token deploy their full potential
            </h2>

            <h4 id="Footer_h4">
              Lade dir die N26 App herunter und entdecke 100 % mobiles Banking.
              Verfügbar für iOS und Android.
            </h4>
          </div>

          <div id="Footer_right">
            <div id="Footer_Spalter">
              <h2 id="Footer_Spalte_Überschrift">Social Media</h2>

              <div id="Footer_spalte_button">
                <h3 id="Footer_spalte_h3">Facebook</h3>
              </div>

              <div id="Footer_spalte_button">
                <h3 id="Footer_spalte_h3">LinkedIn</h3>
              </div>
              <Link to="../alleProjekte">
                <div id="Footer_spalte_button">
                  <h3 id="Footer_spalte_h3">Instagram</h3>
                </div>
              </Link>
            </div>

            <div id="Footer_Spalter">
              <h2 id="Footer_Spalte_Überschrift">Unternehmen</h2>
              <Link to="../about">
                <div id="Footer_spalte_button">
                  <h3 id="Footer_spalte_h3">Über uns</h3>
                </div>
              </Link>

              <Link to="../Impressum">
                <div id="Footer_spalte_button">
                  <h3 id="Footer_spalte_h3">Presse </h3>
                </div>
              </Link>

              <Link to="../Partner">
                <div id="Footer_spalte_button">
                  <h3 id="Footer_spalte_h3">Partner</h3>
                </div>
              </Link>
            </div>

            <div id="Footer_Spalter">
              <h2 id="Footer_Spalte_Überschrift">Kontakt</h2>
              <Link to="../about">
                <div id="Footer_spalte_button">
                  <h3 id="Footer_spalte_h3">E-Mail</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div id="Footer_Buttom">
          <div id="Footer_Buttom_LEFT">
            <h4 id="Footer_h4">Copyright Chainvest Capital 2021</h4>
          </div>

          <div id="Footer_Buttom_menue">
            <div id="Footer_Buttom_menue_Button">
              <Link to="../Impressum">
                <h4 id="Footer_h4">Impressum </h4>
              </Link>
            </div>
            <div id="Footer_Buttom_menue_Button">
              <Link to="../Datenschutzerklärung">
                <h4 id="Footer_h4">Datenschutzerklärung </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
