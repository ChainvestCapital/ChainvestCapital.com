import './Design/To_Project.css'


import BitbondImg from '../../assets/images/BitbondImg.png'


function To_Project(props) {
    

    return (
      
      <div >
        
            <div id="to_project_wrapper" style={{ backgroundImage: `url(${props.bgimg})` }}>
                <div id="to_project_left">
                    <img src={props.logo} id="to_project_left_img"/>
                </div>
                <div id="to_project_right">
                    <img src={props.rightimg} id="To_Project_img" />
                </div>
            </div>

            
      </div>
  
    );
  }
  
  export default To_Project;
  