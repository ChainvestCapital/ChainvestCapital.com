import "./Unternehmen.css";
import Muster_Placeholder from "./Components/Muster_Placehodler";
function Unternehmen(props) {
  return props.trigger ? (
    <div>
      <div id="Desktop_Unternehmen_Wrapper">
        <Muster_Placeholder title="Unternehmen" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Unternehmen;
