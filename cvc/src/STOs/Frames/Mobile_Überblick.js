import './Design/Mobile_Überblick.css'


import Unternehmen from '../../assets/images/Unternehmen.png'
import TokenSale from '../../assets/images/TokenSale.png'





function Mobile_Überblick(props) {



    return (props.trigger)?(
      
      <div >

        <div id="Mobile_Überblick_Wrapper">
            <div id="Mobile_Überblick_Übersicht">
                <div id="Mobile_Überblick_Info_Wrapper">
                    <h2 id="Mobile_Überblick_Info_h2">
                        {props.Rendite}
                    </h2>

                    <h4 id="Mobile_Überblick_Info_h4">
                        Rendite
                    </h4>
                </div>

                <div id="Mobile_Überblick_Info_Wrapper">
                    <h2 id="Mobile_Überblick_Info_h2">
                        {props.Volumen}
                    </h2>

                    <h4 id="Mobile_Überblick_Info_h4">
                        Volumen
                    </h4>
                </div>

                <div id="Mobile_Überblick_Info_Wrapper">
                    <h2 id="Mobile_Überblick_Info_h2">
                        {props.Mindestinvestition}
                    </h2>

                    <h4 id="Mobile_Überblick_Info_h4">
                        Mindestinvestition
                    </h4>
                </div>

                <div id="Mobile_Überblick_Info_Wrapper">
                    <h2 id="Mobile_Überblick_Info_h2">
                        {props.Typ}
                    </h2>

                    <h4 id="Mobile_Überblick_Info_h4">
                        Typ
                    </h4>
                </div>
            </div>

            <div id="Mobile_Überblick_content">
                <div id="Mobile_Überblick_content_Unternehmen">
                    <div id="Mobile_Überblick_conten_Unternehmen_top">
                        <h3 id="Mobile_Überblick_conten_Unternehmen_top_h3">
                            Unternehmen
                        </h3>

                        <div id="Mobile_Überblick_conten_Unternehmen_top_OR">
                            <img src={Unternehmen} id="Mobile_Überblick_conten_Unternehmen_top_img"/>

                        </div>

                    </div>

                    <h4 id="Mobile_Überblick_conten_Unternehmen_h4">
                    Die Bitbond GmbH ist eine Darlehensplattform, dessen Haupttätigkeit in der Vergabe von Darlehen über Kryptowährungen wie Bitcoin oder Stellar Lumens an verschiedene Unternehmen unterschiedlicher Größe und Selbstständige besteht.
                    </h4>

                </div>

                
                
                <div id="Mobile_Überblick_content_Unternehmen">
                    <div id="Mobile_Überblick_conten_Unternehmen_top">
                        <h3 id="Mobile_Überblick_conten_Unternehmen_top_h3">
                            Token Handel
                        </h3>

                        <div id="Mobile_Überblick_conten_Unternehmen_top_OR">
                            <img src={TokenSale} id="Mobile_Überblick_conten_Unternehmen_top_img"/>

                        </div>

                    </div>

                    <h4 id="Mobile_Überblick_conten_Unternehmen_h4">
                    </h4>

                </div>
           
                <div id="Mobile_Überblick_Content_Smalls">
                    <div id="Mobile_Überblick_Content_Small">
                        <h3 id="Mobile_Überblick_Content_Smalls_h3">
                            BaFin
                        </h3>

                        <h5 id="Mobile_Überblick_Content_Smalls_h5">
                            Regulierende Behörde
                        </h5>
                    </div>

                    <div id="Mobile_Überblick_Content_Small">
                        <h3 id="Mobile_Überblick_Content_Smalls_h3">
                            2018
                        </h3>

                        <h5 id="Mobile_Überblick_Content_Smalls_h5">
                            Gründung
                        </h5>
                    </div>

                    <div id="Mobile_Überblick_Content_Small">
                        <h3 id="Mobile_Überblick_Content_Smalls_h3">
                            WpPG
                        </h3>

                        <h5 id="Mobile_Überblick_Content_Smalls_h5">
                            Dokumente
                        </h5>
                    </div>

                    <div id="Mobile_Überblick_Content_Small">
                        <h3 id="Mobile_Überblick_Content_Smalls_h3">
                        11.03.19- 10.05.19

                        </h3>

                        <h5 id="Mobile_Überblick_Content_Smalls_h5">
                        Emissionszeitraum
                        </h5>
                    </div>

                    <div id="Mobile_Überblick_Content_Small">
                        <h3 id="Mobile_Überblick_Content_Smalls_h3">
                            Schiffahrt
                        </h3>

                        <h5 id="Mobile_Überblick_Content_Smalls_h5">
                        Kategorie
                        </h5>
                    </div>

                    <div id="Mobile_Überblick_Content_Small">
                        <h3 id="Mobile_Überblick_Content_Smalls_h3">
                            BaFin
                        </h3>

                        <h5 id="Mobile_Überblick_Content_Smalls_h5">
                            Social Media
                        </h5>
                    </div>
                </div>
           
           
            </div>
       
       
       
       
       
       
       
        </div>
            
      </div>
  
    ):"";
  }
  
  export default Mobile_Überblick;
  