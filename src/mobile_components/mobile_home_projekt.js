import './Design/mobile_home_projekt.css'


function mobile_home_projekt(props) {
    return (
      
      <div>

          <div id="mobile_home_projekt_wrapper">

              <div id="mobile_home_projekt_top">  
                            <img src={props.titleImg} id="mobile_home_projekt_top_title_img"/>

                <div id="mobile_home_projekt_top_top">

                  <div id="mobile_home_projekt_top_top_ro">
                    <img src={props.Kategorie} id="mobile_home_projekt_top_img"/>
                  </div>


                </div>
                  <div id="mobile_home_projekt_top_logo_WRAPPER">
                    
                      <img src={props.Logo} id="mobile_home_projekt_top_logo"/>

                  </div>

                    <div id="mobile_home_projekt_übergang">
                        
                   </div>
              </div>

                

                <div id="mobile_home_projekt_bottom">

                  <h2 id="mobile_home_projekt_title_h2">
                    Reederei Vogemann
                  </h2>

                  <div id ="mobile_home_projekt_info">

                    <h3 id="mobile_home_projekt_h3">
                      {props.Volumen}
                    </h3>
                    <h5 id="mobile_home_projekt_h5">
                      Finanzierungsvolumen
                    </h5>

                  </div>

                  <div id ="mobile_home_projekt_info">

                    <h3 id="mobile_home_projekt_h3">
                      {props.Rendite}
                    </h3>
                    <h5 id="mobile_home_projekt_h5">
                    Erwartete Rendite
                    </h5>
                    
                  </div>

                  <div id ="mobile_home_projekt_info">

                    <h3 id="mobile_home_projekt_h3">
                      {props.Typ}
                    </h3>
                    <h5 id="mobile_home_projekt_h5">
                      Typ
                    </h5>
                    
                  </div>




              


              </div>


          </div>


            
      </div>
  
    );
  }
  
  export default mobile_home_projekt;
  