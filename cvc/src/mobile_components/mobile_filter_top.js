import './Design/mobile_filter_top.css'

import Filtertrigger from '../assets/images/filtertrigger.png'


function mobile_filter_top(props) {



    return (props.trigger)? (
      
      <div>
         
         <div id="Mobile_alle_Projekte_Filter_ausklappen"

          >
           
            <h3 id="Mobile_alle_Projekte_h3">
              Filter ausklapen
            </h3>

            <div id="Mobile_alle_Projekte_ausklappen_trigger"
            >
              <img src={Filtertrigger} id="Mobile_alle_Projekte_trigger_img"/>
            </div>

          </div>
         
            
      </div>
  
    ):"";
  }
  
  export default mobile_filter_top;
  