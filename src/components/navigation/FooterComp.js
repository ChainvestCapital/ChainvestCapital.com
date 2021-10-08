import './Footer.css'
import {Route, Link} from "react-router-dom";
import logo from '../../assets/images/logo.png'


function F(props) {
    return (
      
      <div>
         
         <div id="Footer">
             <div id="Footer_left">

                    <img src={logo} id="footer_logo_img"/>
                    <h4 id="footer_Copyright_h4">
                    Alle Recht vorenthalten. Chainvest Capital UG 2021
                    </h4>

             </div>
             <div id="Footer_right">
                 <div id="Footer_Spalte">
                     <h2 id="Footer_h2">
                            STOs
                     </h2>

                        <div id="Footer_Eintrag">
                            <h4 id="Footer_h4">
                             Was sind Stos
                             </h4>
                        </div>
                        <div id="Footer_Eintrag">
                            <h4 id="Footer_h4">
                             STO-Dashboard
                             </h4>
                        </div>
                        <div id="Footer_Eintrag">
                            <h4 id="Footer_h4">
                             Alle Projekte
                             </h4>
                        </div>
                     
                 </div>
                 <div id="Footer_Spalte">
                     <h2 id="Footer_h2">
                            CHAINVEST
                     </h2>

                        <div id="Footer_Eintrag">
                            <h4 id="Footer_h4">
                             About Chainvest
                             </h4>
                        </div>
                        <div id="Footer_Eintrag">
                            <h4 id="Footer_h4">

                        Impressum     
                            </h4>
                        </div>
                        <div id="Footer_Eintrag">
                            <h4 id="Footer_h4">
                            Datenschutzerklärung                             </h4>
                        </div>
                     
                 </div>
             </div>
         </div>
            
      </div>
  
    );
  }
  
  export default F;
  