import "./Kategorien_Filter.css";
function Kategorien_Filter(props) {
  return (
    <div>
      <div id="Kategorien_Filter_Wrapper">
        <img src={props.Img} id="Kategorie_Wrapper_imgx" />

        <h3 id="Kategorien_Filter_h3">{props.HoverText}</h3>
      </div>
    </div>
  );
}

export default Kategorien_Filter;
