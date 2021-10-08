import './Design/mobil_menue.css'

import logo from '../assets/images/logo.png'
import hamburgerimg from '../assets/images/hamburgerimg.png'
import Mobile_menue_pop_up from './mobile_menue_pop_up';
import { useState } from 'react';

function Mobile_menue(props) {

  const[mobile_menue_popup, setmobile_menue_popup]= useState(false)


    return (
      
      <div>
         
            <Mobile_menue_pop_up trigger={mobile_menue_popup} setTrigger={setmobile_menue_popup}/>
         

            <div id="mobile_menue_wrapper">

                <img src={logo} id="mobile_menue_wrapper_logo"/>


                <div id="mobile_menue_wrapper_hamburger"
                onClick={()=>setmobile_menue_popup(true)}>
                    <img src={hamburgerimg} id="mobile_menue_wrapper_hamburger_img"/>
                </div>

            </div>

        
            
      </div>
  
    );
  }
  
  export default Mobile_menue;
  