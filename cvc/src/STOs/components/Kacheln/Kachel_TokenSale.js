import './Design/Kachel_TokenSale.css'

import TokenSale from '../../../assets/images/TokenSale.png'


function Kachel_TokenSale(props) {
    return (
      
      <div>
             <div id="Kachel_TokenSale">
                        <div id="Kachel_TokenSale_top">
                            <div id="Kachel_TokenSale_topleft">
                                <h3 id="Kachel_TokenSale_h3">
                                Token Sale
                                </h3>
                            </div>
                          
                            <div id="Kachel_Unternehmen_topright">
                                <img src={TokenSale} id="Kachel_TokenSale_topright_img"/>
                            </div>
                          </div>  
                        
                        
                    </div>    

      </div>
  
    );
  }
  
  export default Kachel_TokenSale;
  