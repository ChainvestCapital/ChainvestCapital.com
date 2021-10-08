import './Footer.css'
import {Route, Link} from "react-router-dom";

import Logo from '../assets/images/logo.png'

function Footer(props) {
    return (
      
      <div>

          <div id="Footer_wrapper">

              <div id="Footer_left">
              <Link to="./" >
                  <img src={Logo} id="Footer_logo"/>
              </Link>
                  
                  <h4 id="Footer_h4">
                  Alle Recht vorenthalten. Chainvest Capital UG 2021
                  </h4>
             
              </div>

              <div id="Footer_right">

                  <div id="Footer_Spalter">
                        <h2 id="Footer_Spalte_Überschrift">
                            STOs
                        </h2>

                        <div id="Footer_spalte_button">
                            <h3 id="Footer_spalte_h3">
                                    Was sind STOs?
                            </h3>
                        </div>

                        <div id="Footer_spalte_button">
                            <h3 id="Footer_spalte_h3">
                                    STO Dashboard
                            </h3>
                        </div>
                        <Link to="./alleProjekte" >
                            <div id="Footer_spalte_button">
                            <h3 id="Footer_spalte_h3">
                                    Alle Projekte
                            </h3>
                            </div>
                        </Link>
                        
                  </div>

                  <div id="Footer_Spalter">
                        <h2 id="Footer_Spalte_Überschrift">
                            Chainvest
                        </h2>
                        <Link to="./about" >
                            <div id="Footer_spalte_button">
                            <h3 id="Footer_spalte_h3">
                                    About
                            </h3>
                            </div>
                        </Link>
                        
                        <Link to="./Impressum">
                            <div id="Footer_spalte_button">
                                <h3 id="Footer_spalte_h3">
                                        Impressum
                                </h3>
                            </div>                        
                        </Link>


                        <Link to="./Datenschutzerklärung">
                            <div id="Footer_spalte_button">
                                <h3 id="Footer_spalte_h3">
                                        Datenschutzerklärung
                                </h3>
                            </div>
                        </Link>



                       
                  </div>

              </div>

          </div>
            
      </div>
  
    );
  }
  
  export default Footer;
  