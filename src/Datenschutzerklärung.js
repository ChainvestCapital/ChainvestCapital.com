import './Design/Dateschutzerklärung.css';



import Top_menue from './components/navigation/top_menue'

import Footer from './components/Footer';

import Mobile_menue from './mobile_components/moble_menue'



function Datenschutzerklärung() {


    return (
      
      <div  >
  
             <Top_menue/>

            <div id="DatenschutzWrapper">

                <h2 id="Datenschutzerklärung_h2">
                    Datenschutzerklärung
                </h2>

                <div id="Datenschutz_Content_Wrapper">
                    <h4 id="Datenschutzerklärung_h4">
                        Inhalt der Datenschutzerklärung
                    </h4>
                </div>

            </div>

            
            <Footer/>
  
      </div>
  
    );
  }
  
  export default Datenschutzerklärung;
  