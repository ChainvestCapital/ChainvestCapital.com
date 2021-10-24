import "./Design/Kachel_1h_2w_Blockchain.css";

function Kachel_1h_2w_Blockchain(props) {
  return (
    <div>
      <div id="Kachel_1h_2w_Blockchain">
        <div id="Kachel_1h_2w_Blockchain_left">
          <h3 id="kleine_kachel_h3">{props.text}</h3>
          <h5 id="kleine_kachel_h4">{props.title}</h5>
        </div>

        <div id="Kachel_1h_2w_Blockchain_right">
          <img src={props.img} id="Kachel_1h_2w_Blockchain_Img" />
        </div>
      </div>
    </div>
  );
}

export default Kachel_1h_2w_Blockchain;
