import "./Token_Sale.css";
import Muster_Placeholder from "./Components/Muster_Placehodler";

function Token_Sale(props) {
  return props.trigger ? (
    <div>
      <div id="Desktop_Unternehmen_Wrapper">
        <Muster_Placeholder title="Token Sale" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Token_Sale;
