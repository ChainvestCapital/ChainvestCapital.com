import './Design/FilterMenue.css'

import Filtertrigger from '../assets/images/filtertrigger.png'

import Schiffahrtimg from '../assets/images/Schiffahrt.png'
import TechnologieImg from '../assets/images/Technologie.png'
import FinanceImg from '../assets/images/Finance.png'


function MobileFilterMenue(props) {



    return (props.trigger)? (
      
      <div>
         
         <div id="mobile_Filter_Menue">

               <div id="Mobile_alle_Projekte_Filter_ausklappen_e"

                     >
                     
                     <h3 id="Mobile_alle_Projekte_h3"
                       onClick={()=> props.setTrigger(false)}

                     >
                        Filter einklappen
                        
                     </h3>

                     <div id="Mobile_alle_Projekte_ausklappen_trigger"
                     onClick={()=> props.setTrigger(false)}

                    >
                        <img src={Filtertrigger} id="Mobile_alle_Projekte_trigger_img_transform"/>
                     </div>

                     </div>

                     {props.children}

                  <div id="Mobile_Filter_Menue_Kategorien_Wrapper">
                     <h3 id="Mobile_Filter_Menue_h3">
                        Kategorie wählen
                     </h3>

                     <div id="Mobile_Filter_Menue_Kategorien">
                        <div id="Mobile_Filter_Menue_Kategorien_aktegorie">
                           <img src={Schiffahrtimg} id="Mobile_Filter_Menue_Kategorien_aktegorie_IMG"/>
                        </div>

                        <div id="Mobile_Filter_Menue_Kategorien_aktegorie">
                           <img src={TechnologieImg} id="Mobile_Filter_Menue_Kategorien_aktegorie_IMG"/>
                        </div>

                        <div id="Mobile_Filter_Menue_Kategorien_aktegorie">
                           <img src={FinanceImg} id="Mobile_Filter_Menue_Kategorien_aktegorie_IMG"/>
                        </div>

                         
                        
                        <div id="Mobile_Filter_Menue_Kategorien_aktegorie">
                           <img src={FinanceImg} id="Mobile_Filter_Menue_Kategorien_aktegorie_IMG"/>
                        </div>

                       
                        
                        <div id="Mobile_Filter_Menue_Kategorien_aktegorie">
                           <img src={Schiffahrtimg} id="Mobile_Filter_Menue_Kategorien_aktegorie_IMG"/>
                        </div> 
                        
                        <div id="Mobile_Filter_Menue_Kategorien_aktegorie">
                           <img src={TechnologieImg} id="Mobile_Filter_Menue_Kategorien_aktegorie_IMG"/>
                        </div>

                       

                     </div>
                  </div>

                  <div id="Mobile_Filter_Menue_Volumen_Wrapper">
                    
                     <h3 id="Mobile_Filter_Menue_h3">
                        Finanzierungsvolumen
                     </h3>

                     <div id="Mobile_Filter_Menue_Volumen">
                        <div id="Mobile_Filter_Menue_Volumen_row">
                           <h4 id="Mobile_Filter_Menue_Volumen_h4">
                              10.000 $
                           </h4>
                           <div id="Mobile_Filter_Menue_Volumen_row_choice">

                           </div>
                        </div>

                        <div id="Mobile_Filter_Menue_Volumen_row">
                           <h4 id="Mobile_Filter_Menue_Volumen_h4">
                              50.000 $
                           </h4>
                           <div id="Mobile_Filter_Menue_Volumen_row_choice">
                              
                           </div>
                        </div>

                        <div id="Mobile_Filter_Menue_Volumen_row">
                           <h4 id="Mobile_Filter_Menue_Volumen_h4">
                              100.000 $
                           </h4>
                           <div id="Mobile_Filter_Menue_Volumen_row_choice">
                              
                           </div>
                        </div>

                        <div id="Mobile_Filter_Menue_Volumen_row">
                           <h4 id="Mobile_Filter_Menue_Volumen_h4">
                              200.000 $
                           </h4>
                           <div id="Mobile_Filter_Menue_Volumen_row_choice">
                              
                           </div>
                        </div>

                        <div id="Mobile_Filter_Menue_Volumen_row">
                           <h4 id="Mobile_Filter_Menue_Volumen_h4">
                              1.000.000 $
                           </h4>
                           <div id="Mobile_Filter_Menue_Volumen_row_choice">
                              
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               
         
            
      </div>
  
    ):"";
  }
  
  export default MobileFilterMenue;
  