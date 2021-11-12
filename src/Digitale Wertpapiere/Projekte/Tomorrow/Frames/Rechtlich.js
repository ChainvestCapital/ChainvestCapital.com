import "./Rechtlich.css";
import Rechtlich_Kachel from "../../../Components/Rechtliche_Kachel";

function Rechtlich(props) {
  return props.trigger ? (
    <div>
      <div id="Desktop_Unternehmen_Wrapper">
        <Rechtlich_Kachel title="" Text="" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Rechtlich;
