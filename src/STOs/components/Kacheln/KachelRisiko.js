import "./Design/KachelRisiko.css";

function Kachel_Risiko(props) {
  return (
    <div>
      <div id="Kachel_Risiko">
        <h3 id="kleine_kachel_h3_Risiko">{props.title}</h3>
        <h5 id="kleine_kachel_h4_Risiko">{props.text}</h5>
      </div>
    </div>
  );
}

export default Kachel_Risiko;
