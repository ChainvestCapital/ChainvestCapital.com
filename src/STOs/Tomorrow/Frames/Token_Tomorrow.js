import "./Design/Token_Tomorrow.css";
import Kachel_Risiko from "../../components/Kacheln/KachelRisiko";
import Ethereum from "../../../assets/images/Ethereum.png";
import Kachel_Klein from "../../components/Kacheln/Kachel_klein";
import Kachel_1h_2w_Blockchain from "../../components/Kacheln/Kachel_1h_2w_Blockchain";
import Kachel_2w_2h from "../../components/Kacheln/Kachel_2w_2h";
import Kachel_1h_2w from "../../components/Kacheln/Kachel_1h_2w";

function Token_Tomorrow(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Token</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>
      <div id="Token_Tomorrow_Wrapper">
        <div id="Tomorrow_Token_Left">
          <div id="Tomorrow_Token_Left_top">
            <Kachel_Klein
              text="Tomorrow-Token
"
              title="TICKER"
            />
            <Kachel_Klein
              text="2.000.000
"
              title="ANZAHL"
            />
            <Kachel_Klein
              text="1 €
"
              title="NENNWERT"
            />
            <Kachel_Klein
              text="01.10.2021
"
              title="ERSTELLUNG"
            />
          </div>

          <Kachel_1h_2w_Blockchain
            text="Ethereum"
            img={Ethereum}
            title="Blockchain"
          />
        </div>
        <div id="Tomorrow_Token_Right">
          <Kachel_2w_2h
            text="Dem Smart Contract der Tomorrow-Token ist auf der Ethereum Blockchain ein Registerzugeordnet, dem sämtliche Tomorrow-Token-Übertragungen und eine Liste mit denjenigenEthereum - Adressen, denen Tomorrow-Token zugeordnet sind, entnommen werden können."
            title="REGISTER"
          />
          <Kachel_1h_2w
            text="Die tokenbasierten Genussrechte können durch Abtretung jederzeit auf Dritteübertragen werden. "
            title="Übertragung"
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Token_Tomorrow;
