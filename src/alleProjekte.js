import './Design/alleProjekte.css';
import {Route, Link} from "react-router-dom";

import Top_menue from './components/navigation/top_menue'
import F from './components/navigation/FooterComp'

import VogemannLogo from './assets/images/VogemannLogo.png'
import VogemannTitle from './assets/images/VogemannImg.png'




import Schiffahrtimg from './assets/images/Schiffahrt.png'
import TechnologieImg from './assets/images/Technologie.png'
import FinanceImg from './assets/images/Finance.png'

import ProjektComponentBox from './components/projekte/ProjektComponentBox'
import Footer from './components/Footer';

import Mobile_menue from './mobile_components/moble_menue';
import Mobile_Footer from './mobile_components/Mobile_Footer'

import Mobile_alle_Projekte_projekt from './mobile_components/Mobile_alle_Projekte_projekt';
 
import Filtertrigger from './assets/images/filtertrigger.png'

import FilterMenue from './mobile_components/FilterMenue'
import Filterausklappen from './mobile_components/mobile_filter_top'
import { useState } from 'react';




function AlleProjekte() {

  function filterausklappen() {
    setFilterMenueshow(true)
    setFiltereinklappenshow(false);
    
  }

  function filtereinklappen() {
    setFilterMenueshow(false)
    setFiltereinklappenshow(true);
  }


  const[FilterMenueshow,setFilterMenueshow]=useState(false)

  const[Filtereinklappenshow,setFiltereinklappenshow]=useState(true)

  return (
    
    <div >
      
      <div id="Desktop_Wrapper">


        <Top_menue />

          <div id="alle_projekte_wrapper">

            <div id="alle_projekte_filter_wrapper">

                <div id="alle_projekte_filter_wrapper_inner">

                  <div id="alle_projekte_wrapper_heading">
                    <h3 id="alle_projekte_wrapper_h3">
                      Finanzierungsvolumen
                    </h3>
                    <div id="alle_projekte_wrapper_close">
                      x
                    </div>
                  </div>
                  
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      10.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">

                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      50.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      100.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      200.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      1.000.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>

                </div>

                <div id="alle_projekte_filter_wrapper_inner">

                  <div id="alle_projekte_wrapper_heading">
                    <h3 id="alle_projekte_wrapper_h3">
                      Erwartete Rendite
                    </h3>
                    <div id="alle_projekte_wrapper_close">
                      x
                    </div>
                  </div>

                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      10.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">

                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      50.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      100.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      200.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      1.000.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>

                </div>

                <div id="alle_projekte_filter_wrapper_inner">

                  <div id="alle_projekte_wrapper_heading">
                    <h3 id="alle_projekte_wrapper_h3">
                      Typ
                    </h3>
                    <div id="alle_projekte_wrapper_close">
                      x
                    </div>
                  </div>

                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      Eigenkapital
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">

                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                     Fremdkapital
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>
      

                </div>


            </div>


            <div id="alle_projekte_projekte_wrapper">

                <div id="alle_projekte_projekte_wrapper_Kategorien">

                    <h2 id="alle_projekte_projekte_wrapper_projekte_kategorien">
                      Kategorien wählen:
                    </h2>

                    <div id="alle_projekte_kategorien_menue">
                    
                      <div id="alle_projekte_kategorie_kachel">
                         <img src={Schiffahrtimg} id="alle_projekte_kategorie_kachel_img" />
                      </div>

                        <div id="TrennStrich">                    
                        </div>

                      <div id="alle_projekte_kategorie_kachel">
                         <img src={TechnologieImg} id="alle_projekte_kategorie_kachel_img" />
                      </div>

                      <div id="TrennStrich">                    
                      </div>

                      <div id="alle_projekte_kategorie_kachel">
                         <img src={FinanceImg} id="alle_projekte_kategorie_kachel_img" />
                      </div>

                    </div>



                </div>

                <div id="alle_projekte_projekte_wrapper_projekte">

                    
                    <ProjektComponentBox /> 
              


                </div>

            </div>

          </div>







        <Footer/>
        </div>

      <div id="Mobile_Wrapper">
        

      <Mobile_menue/>

      <div id="Mobile_alle_Projekte_Wrapper">
      <div onClick={()=>filtereinklappen() }>
              <FilterMenue trigger={FilterMenueshow} setTrigger={setFilterMenueshow} />
      </div>
     
      <div  onClick={()=>filterausklappen()}>
        <Filterausklappen trigger={Filtereinklappenshow} setTrigger={setFiltereinklappenshow}
        />
      </div>
      


          

          <div id="Mobile_alle_Projekte_Projekte_wrapper">
          <Mobile_alle_Projekte_projekt logo={VogemannLogo} titleimg={VogemannTitle} title="Vogemann" Kategorie={Schiffahrtimg} Typ="Fremdkapital" Volumen="100.000.000$" Rendite="5%" />
          <Mobile_alle_Projekte_projekt logo={VogemannLogo} titleimg={VogemannTitle} title="Vogemann" Kategorie={Schiffahrtimg} Typ="Fremdkapital" Volumen="100.000.000$" Rendite="5%" />
          <Mobile_alle_Projekte_projekt logo={VogemannLogo} titleimg={VogemannTitle} title="Vogemann" Kategorie={Schiffahrtimg} Typ="Fremdkapital" Volumen="100.000.000$" Rendite="5%" />
          </div>



               
      </div>

        
        


          <Mobile_Footer/>
      </div>





    </div>

  );
}

export default AlleProjekte;
