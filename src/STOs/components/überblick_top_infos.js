import './Design/überblick_top_infos.css'




function überblick_top_infos(props) {
    return (
      
      <div id="überblick_top_infos_wrapper">
        <h2 id="überblick_top_infos_h2">
          {props.title}
        </h2> 
        <h4 id="überblick_top_infos_description">
          {props.description}
        </h4>         
      </div>
  
    );
  }
  
  export default überblick_top_infos;
  