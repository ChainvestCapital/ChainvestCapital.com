import './Design/Impressum.css';


import Top_menue from './components/navigation/top_menue'

import Footer from './components/Footer';

import Mobile_menue from './mobile_components/moble_menue'

function Impressum() {


  return (
    
    <div  >
  
    <Top_menue/>

   <div id="ImpressumWrapper">

       <h2 id="Impressum_h2">
       Impressum
       </h2>

       <div id="Impressum_Content_Wrapper">
           <h4 id="Impressum_h4">
               Inhalt der Impressum
           </h4>
       </div>

   </div>

   
   <Footer/>

</div>

  );
}

export default Impressum;
