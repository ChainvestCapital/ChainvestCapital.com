import './top_menue.css'
import logo from '../../assets/images/logo.png'
import AccountImg from '../../assets/images/AccountImg.png'




import { useState } from 'react'
import {Route, Link} from "react-router-dom";

import Top_hover from './top_menue_hover'

function Top_menue(props) {
    
  const [Top_menue_hover,setTop_menue_hover] =useState(false)
  const [hoverstate,sethoverstate] =useState("Security Token Offering")

   window.addEventListener('scroll', () => {
    setTop_menue_hover(false)
  })
 
  return (
      
      <div
      onMouseOver={() => setTop_menue_hover(true)
       
      } 
     
      >

        
       
       <Top_hover trigger={Top_menue_hover} setTrigger={setTop_menue_hover} hover={hoverstate}/>


          <div id="top_menue_full">

            <Link to="./">
                <div id="top_menue_logoWrapper">
                <img src={logo} id="top_menue_logoimg"/>
                </div>
            </Link>
            
            
            <div id="top_menue_projekt_title">

                <h3 id="menue_projekt_title">
                    {props.title}
                </h3>

            </div>



            <div id="top_menue_menue">

              <div id="top_menue_menue_eintrag1"
               
               onMouseOver={() => 
                sethoverstate("Security Token Offering") }
              >
                
                
                  
                <Link to="./alleProjekte"> 
                <h3 id="menue_eintrag_h3">
                  Security Token Offerings
                </h3>

                </Link>
              </div>

              
              <div id="top_menue_menue_eintrag" 
              
            
              onMouseOver={() => 
                sethoverstate("Chainvest") }
              >
                        

       
                        <Link to="./about"> 

                <h3 id="menue_eintrag_h3">
                  Chainvest
                </h3>

                </Link>
              </div>



              <div id="top_menue_menue_eintrag2"  
              onMouseOver={() => 
                sethoverstate("Account") }
                >
               <img src={AccountImg} id="AccountImgImg"/>
              </div>


            </div>

          </div>
          
            
      </div>
  
    );
  }
  
  export default Top_menue;
  