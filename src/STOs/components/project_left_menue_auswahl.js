import './Design/project_left_menue_auswahl.css'





function Project_left_menue_auswahl(props) {
    return (
      
      <div >
        <div id="Project_left_menue_auswahl_wrapper">



            <div id="Project_left_menue_auswahl_icon" style={{backgroundColor: props.bgColor}}>

                <img src={props.img} id="Project_left_menue_auswahl_icon_img"/>
                
                
            </div>
            <h4 id="Project_left_menue_auswahl_h4">
              {props.title}
                    
            </h4>

        </div>

            
      </div>
  
    );
  }
  
  export default Project_left_menue_auswahl;
  