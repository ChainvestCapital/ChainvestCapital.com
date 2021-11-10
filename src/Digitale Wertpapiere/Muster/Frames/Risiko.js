import "./Risiko.css";
import Muster_Placeholder from "./Components/Muster_Placehodler";

function Risiko(props) {
  return props.trigger ? (
    <div>
      <div id="Desktop_Unternehmen_Wrapper">
        <Muster_Placeholder title="Risiko" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Risiko;
