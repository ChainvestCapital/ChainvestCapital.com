import './Design/mobile_menue_popup.css'
import {Route, Link} from "react-router-dom";

import CloseImg from '../assets/images/Close.png'
function mobile_menue_pop_up(props) {




    return(props.trigger)? (
      
      <div>

        <div id="mobile_menue_pop_up_wrapper">

           {props.children}
      
            <div id="mobile_menue_pop_up_close"
              onClick={()=>props.setTrigger(false)}
            >
              <img src={CloseImg} id="mobile_menue_CloseImg" />
            </div>

            <div id="mobile_menue_pop_up_content">

            <Link to="./">
                <div id="mobile_menue_pop_up_eintrag">
                 <h3 id="mobile_menue_pop_up_h3">
                  Home
                 </h3>
                </div>
              </Link>  


              <Link to="./alleProjekte">
                <div id="mobile_menue_pop_up_eintrag">
                 <h3 id="mobile_menue_pop_up_h3">
                  Security Token
                 </h3>
                </div>
              </Link>  

              <Link to="./about">
              <div id="mobile_menue_pop_up_eintrag">
                <h3 id="mobile_menue_pop_up_h3">
                  Chainvest
                </h3>
               </div>
              </Link>  

              

              <div id="mobile_menue_pop_up_eintrag">
                <h3 id="mobile_menue_pop_up_h3">
                  Account
                </h3>
              </div>


            </div>    
     
        </div>
         
        
      </div>
  
    ):"";
  }
  
  export default mobile_menue_pop_up;
  