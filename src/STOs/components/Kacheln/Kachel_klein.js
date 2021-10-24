import "./Design/Kachel_klein.css";

function Kachel_Klein(props) {
  return (
    <div>
      <div id="Kachel_Klein_Wrapper">
        <h3 id="kleine_kachel_h3">{props.text}</h3>
        <h5 id="kleine_kachel_h4">{props.title}</h5>
      </div>
    </div>
  );
}

export default Kachel_Klein;
