import "./Rechtlich.css";
import Muster_Placeholder from "./Components/Muster_Placehodler";

function Rechtlich(props) {
  return props.trigger ? (
    <div>
      <div id="Desktop_Unternehmen_Wrapper">
        <Muster_Placeholder title="Rechtlich" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Rechtlich;
