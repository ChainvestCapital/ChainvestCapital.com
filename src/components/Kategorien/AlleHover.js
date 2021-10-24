import "./AlleHover.css";
function AlleHover(props) {
  return (
    <div>
      <div id="AlleHover_Wrapper">
        <div id="AlleHover_LayerFront">
          <img src={props.Img} id="Kategorie_Wrapper_imgx" />
        </div>
        <div id="AlleHover_LayerBack">
          <h3 id="AlleHover_h4">{props.HoverText}</h3>
        </div>
      </div>
    </div>
  );
}

export default AlleHover;
