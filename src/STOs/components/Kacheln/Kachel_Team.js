import "./Design/Kachel_Team.css";

import Unternehmen from "../../../assets/images/Unternehmen.png";

function Kachel_Team(props) {
  return (
    <div>
      <div id="Kachel_Team">
        <div id="Kachel_Team_top">
          <div id="Kachel_Unternehmen_topleft">
            <h3 id="Kachel_Unternehmen_h3">Team</h3>
          </div>
        </div>
        <div id="Kachel_Team_bottom">
          <div id="Kachel_Team_bottom_row">
            <h3 id="Kachel_Team_h4">Radoslav Albrecht</h3>
            <h3 id="Kachel_Team_h4">CEO</h3>
          </div>
          <div id="Kachel_Team_bottom_row">
            <h3 id="Kachel_Team_h4">Jarek Nowotka</h3>
            <h3 id="Kachel_Team_h4">CTO</h3>
          </div>

          <div id="Kachel_Team_bottom_row">
            <h3 id="Kachel_Team_h4">Michael Pinkus</h3>
            <h3 id="Kachel_Team_h4">CFO</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kachel_Team;
