import "./Muster_Placehodler.css";

function Muster_Placeholder(props) {
  return (
    <div>
      <div id="Muster_Placeholder_Wrapper">
        <div id="Muster_Placeholder_Row1">
          <div id="Muster_Placeholder_Big">{props.title}</div>
          <div id="Muster_Placeholder_Big"></div>{" "}
        </div>
        <div id="Muster_Placeholder_Row2">
          <div id="Muster_Placeholder_Small"></div>
          <div id="Muster_Placeholder_Small"></div>
          <div id="Muster_Placeholder_Small"></div>
          <div id="Muster_Placeholder_Small"></div>
        </div>
        <div id="Muster_Placeholder_Row3">
          <div id="Muster_Placeholder_Full"></div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Muster_Placeholder;
