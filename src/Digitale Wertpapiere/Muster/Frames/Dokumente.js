import "./Dokumente.css";
import Muster_Placeholder from "./Components/Muster_Placehodler";

function Dokumente(props) {
  return props.trigger ? (
    <div>
      <div id="Desktop_Unternehmen_Wrapper">
        <Muster_Placeholder title="Dokumente" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Dokumente;
