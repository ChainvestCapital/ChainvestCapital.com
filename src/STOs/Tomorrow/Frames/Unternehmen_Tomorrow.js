import Kachel_3w_2h from "../../components/Kacheln/Kachel_3w_2h";
import Kachel_Klein from "../../components/Kacheln/Kachel_klein";
import Kachel_Team from "../../components/Kacheln/Kachel_Team";
import "./Design/Unternehmen_Tomorrow.css";

function Unternehmen_Tomorrow(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Unternehmen</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>

      <div id="Unternehmen_Tomorrow_Wrapper">
        <div id="Unternehmen_Tomorrow_TOP">
          <div id="Unternehmen_Tomorrow_Left">
            <Kachel_Klein title="NAME" text="Tomorrow" />
            <Kachel_Klein title="RECHTFORM" text="GmbH" />
          </div>
          <div id="Unternehmen_Tomorrow_right">
            <Kachel_3w_2h
              title="UNTERNEHMEN"
              text="Die Tomorrow Bank verbindet als erster europäischer Akteur mobiles Banking mit nachhaltigen Finanzen. Als Neo-Bank nutzt Tomorrow die Banking Plattform und die Vollbank Lizenz der Solarisbank für ein nachhaltiges Neo-Banking-Angebot. Zunächst bietet Tomorrow  seinen über 40 000 Kunden ein mobiles und nachhaltiges Girokonto. Mit den Kundeneinlagen und der  beim Kauf anfallenden Interchange Fee finanziert das Fintech vielfältige nachhaltige Projekte. Zukünftig plant die Tomorrow Bank eine umfassende Finanz-Plattform zu entwickeln, bei der auch Spar- und Investmentoptionen angeboten werden."
            />
          </div>
        </div>
        <div id="Unternehmen_Tomorrow_Bottom">
          {" "}
          <Kachel_3w_2h
            title="ANTEILSANSPRÜCHE"
            text="Die Summe aller Crowd-Anteile stellen zusammen mit dem im Handelsregister eingetragenen Stammkapital der Emittentin (abzüglich der Nennbeträge etwaiger von der Emittentin gehaltener eigenen Geschäftsanteile) und allen von der Emittentin ausgegebenen virtuellen Optionen,virtuellen Geschäftsanteilen oder ähnlichen Rechten, die die Emittentin unter Emissions- und Incentivierungsprogrammen ausgegeben hat, das gewinnberechtigte Kapital der Emittentin dar. Durch die Genussrechte wird keine gesellschaftsrechtliche Beteiligung an der Emittentin begründet."
          />
          <div id="Kachel_Tomorrow_Spalten">
            <div id="Kachel_Team_top-tomorrow">
              <div id="Kachel_Unternehmen_topleft">
                <h3 id="Kachel_Unternehmen_h3">Tomorrow</h3>
              </div>
            </div>
            <div id="Kachel_Team_bottom">
              <div id="Kachel_Team_bottom_row_tomorrow">
                <h3 id="Kachel_Team_h4">Bewertung</h3>
                <h3 id="Kachel_Team_h4">50 Mio. €</h3>
              </div>
              <div id="Kachel_Team_bottom_row_tomorrow">
                <h3 id="Kachel_Team_h4">Kunden</h3>
                <h3 id="Kachel_Team_h4">40.000+</h3>
              </div>

              <div id="Kachel_Team_bottom_row_tomorrow">
                <h3 id="Kachel_Team_h4">Mitarbeiter</h3>
                <h3 id="Kachel_Team_h4">40+</h3>
              </div>
              <div id="Kachel_Team_bottom_row_tomorrow">
                <h3 id="Kachel_Team_h4">Kundeneinlagen</h3>
                <h3 id="Kachel_Team_h4">70 Mio. €</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Unternehmen_Tomorrow;
