import Kachel_1h_2w from "../../components/Kacheln/Kachel_1h_2w";
import Kachel_FullW_1h from "../../components/Kacheln/Kachel_FullW_1h";
import Kachel_Klein from "../../components/Kacheln/Kachel_klein";
import "./Design/TokenSale_Tomorrow.css";

function TokenSale_Tomorrow(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Token Sale</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>

      <div id="TokenSale_Tomorrow_Wrapper">
        <div id="TokenSale_Tomorrow_row">
          <Kachel_Klein
            text="Gewinnbeteiligung"
            title="ERW. RENDITE
"
          />
          <Kachel_Klein
            text="Nachrangige Genussrechte"
            title="RECHTLICHE BEZEICHNUNG
"
          />
          <Kachel_1h_2w
            title="Laufzeit"
            text="Die Laufzeit der tokenbasierten Genussrechte beginnt 01. Oktober 2020 und endet mit Ablauf des 30. September 2030."
          />
        </div>
        <div id="TokenSale_Tomorrow_row">
          <Kachel_Klein
            text="EUR"
            title="ZAHLUNGSMÖGLICHKEITEN
"
          />
          <Kachel_1h_2w
            title="LOCK UP
            "
            text="Alle Anleger*innen sind verpflichtet, die tokenbasierten Genussrechte bis zum 31. Oktober 2021 nicht zu veräußern."
          />{" "}
          <Kachel_Klein
            text="17.10.2020-1.10.2021
            "
            title="EMMISSIONSZEITRAUM
"
          />
        </div>
        <Kachel_FullW_1h
          title="ERWEITERUNG DES ANGEBOTES
"
          text="Die Emittentin ist berechtigt, das Emissionsvolumen von bis zu 2.000.000 Stück tokenbasierten Genussrechten um bis zu 6.000.000 Stück auf bis zu 8.000.000 Stück tokenbasierte Genussrechte im Gesamtpreis von bis zu 8.000.000 Euro zu erhöhen."
        />

        <Kachel_FullW_1h
          title="KÜNDIGUNGSRECHTE"
          text="Anleger*innen können die tokenbasierten Genussrechte unter Einhaltung einer Kündigungsfrist von drei Monaten innerhalb der Laufzeit ab dem 30. September 2025 ordentlich kündigen. Ferner ist eine außerordentliche Kündigung aus wichtigem Grund für Anleger*innen möglich."
        />
      </div>
      <div id="TokenSale_Tomorrow_row">
        <Kachel_Klein text="2.000.000 €" title="FINANZIERUNGSVOLUMEN" />
        <Kachel_Klein text="EUR" title="Währung" />
        <Kachel_Klein text="100 €" title="MINDESTINVESTITION" />
        <Kachel_Klein text="25.000 €" title="MAXIMALINVESTITION" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default TokenSale_Tomorrow;
