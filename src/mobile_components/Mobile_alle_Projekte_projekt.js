import './Design/Mobile_alle_Projekte_projekt.css'



function Mobile_alle_Projekte_projekt(props) {



    return (
      
      <div>
         
         <div id="Mobile_alle_Projekte_projekt_wrapper">
             <div id="Mobile_alle_Projekte_projekt_top">
                <img src={props.titleimg} id="Mobile_alle_Projekte_projekt_top_title_img"/>
                <div id="Mobile_alle_Projekte_projekt_top_top">
                    <h2 id="Mobile_alle_Projekte_projekt_top_h2">
                        {props.title}
                    </h2>

                    <img src={props.Kategorie} id="Mobile_alle_Projekte_projekt_top_img"/>
                </div>
                <div id="Mobile_alle_Projekte_projekt_top_logo_wrapper">
                   
                    <img src={props.logo} id="Mobile_alle_Projekte_projekt_top_logo"/>                </div>

                <div id="Mobile_alle_Projekte_projekt_top_Übergang">

                </div>
             </div>

             <div id="Mobile_alle_Projekte_projekt_bottom">
                 <div id="Mobile_alle_Projekte_projekt_infos">
                     <h3 id="Mobile_alle_Projekte_projekt_h3">
                         {props.Volumen}
                     </h3>

                     <h5 id="Mobile_alle_Projekte_projekt_h5">
                         Finanzierungsvolumen
                     </h5>
                 </div>
                 <div id="Mobile_alle_Projekte_projekt_infos">
                     <h3 id="Mobile_alle_Projekte_projekt_h3">
                         {props.Rendite}
                     </h3>

                     <h5 id="Mobile_alle_Projekte_projekt_h5">
                         Erwartete Rendite
                     </h5>
                 </div>
                 <div id="Mobile_alle_Projekte_projekt_infos">
                     <h3 id="Mobile_alle_Projekte_projekt_h3">
                            {props.Typ}
                     </h3>

                     <h5 id="Mobile_alle_Projekte_projekt_h5">
                         Typ
                     </h5>
                 </div>
             </div>
         </div>
         
            
      </div>
  
    );
  }
  
  export default Mobile_alle_Projekte_projekt;
  