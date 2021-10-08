import './top_menue_hover.css'
import logo from '../../assets/images/logo.png'
import AccountImg from '../../assets/images/AccountImg.png'




import { useState } from 'react'
import {Route, Link} from "react-router-dom";



function Top_menue_hover(props) {
    
 
  const [chainvesthover, setchainvesthover] = useState(false);
  const [STOhover, setSTOhover] = useState(false);

 
  return (props.trigger)?(
      
      <div  >

        <div id="top_menue_hover_wrapper">

                <div id="top_hover_header">
                    <h2 id="top_hover_h2">
                        {props.hover}
                    </h2>
                </div>

                <div id="top_hover_STO_spalte">
                <Link to="./alleProjekte"> 
                    <div id="top_menue_chainvest">
                        <h3 id="top_menue_Eintrag">
                            Alle STOs
                        </h3>
                    </div>
                </Link>

                    <div id="top_menue_chainvest">
                        <h3 id="top_menue_Eintrag">
                            STO Dashboard
                        </h3>
                    </div>

                    <div id="top_menue_chainvest">
                        <h3 id="top_menue_Eintrag">
                            Projekte vergleichen
                        </h3>
                    </div>
                </div>
                

                <div id="top_menue_Chainvest_spalte">
                    <Link to="./about"> 
                    <div id="top_menue_chainvest">
                        <h3 id="top_menue_Eintrag">
                            Über uns
                        </h3>
                    </div>
                    </Link>
                    <div id="top_menue_chainvest">
                        <h3 id="top_menue_Eintrag">
                            Unsere Partner
                        </h3>
                    </div>

                    
                </div>

                <div id="top_menue_account_spalte">
                    <div id="top_menue_chainvest">
                        <h3 id="top_menue_Eintrag">
                            Log In
                        </h3>
                    </div>

                    <div id="top_menue_chainvest">
                        <h3 id="top_menue_Eintrag">
                            Register
                        </h3>
                    </div>

                   
                </div>

                
            
        </div>


          
            
      </div>
  
    ):"";
  }
  
  export default Top_menue_hover;
  