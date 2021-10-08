import './Design/Mobile_Footer.css'

import Logo from '../assets/images/logo.png'


function Mobile_Footer(props) {



    return (
      
      <div>
         
        <div id="mobile_Footer_wrapper">

          
          <div id="mobile_Footer_Content">
            <div id="mobile_Footer_Spalte">
              <h2 id="mobile_Footer_h2">
                  STOs
              </h2>

              <div id="mobile_Footer_Eintrag">
                <h3 id="mobile_Footer_h3">
                  Was sind STOs
                </h3>
              </div>

              <div id="mobile_Footer_Eintrag">
                <h3 id="mobile_Footer_h3">
                  STO Dashboard
                </h3>
              </div>

              <div id="mobile_Footer_Eintrag">
                <h3 id="mobile_Footer_h3">
                  Alle STOs
                </h3>
              </div>
            </div>

            <div id="mobile_Footer_Spalte">
              <h2 id="mobile_Footer_h2">
                  Chainvest
              </h2>

              <div id="mobile_Footer_Eintrag">
                <h3 id="mobile_Footer_h3">
                  About us
                </h3>
              </div>

              <div id="mobile_Footer_Eintrag">
                <h3 id="mobile_Footer_h3">
                  Impressum
                </h3>
              </div>

              <div id="mobile_Footer_Eintrag">
                <h3 id="mobile_Footer_h3">
                 Datenschutzerklärung
                </h3>
              </div>
            </div>


          </div>

          <img src={Logo} id="mobile_Footer_logo_img"/>


        </div>         
            
      </div>
  
    );
  }
  
  export default Mobile_Footer;
  