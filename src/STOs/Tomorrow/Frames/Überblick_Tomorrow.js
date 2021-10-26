import Kachel_FullW_2h from "../../components/Kacheln/Kachel_FullW_2h";
import Kachel_Klein from "../../components/Kacheln/Kachel_klein";
import überblick_top_infos from "../../components/überblick_top_infos";

import "./Design/Überblick_Tomorrow.css";

function Überblick_Tomorrow(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Überblick</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>
      <div id="überblick_top_infos">
        <überblick_top_infos
          description="Erwartete Rendite"
          title="Gewinnbeteiligung"
        />
        <überblick_top_infos description="Mindestinvestition" title="100 €" />
        <überblick_top_infos
          description="Finanzierungsvolumen"
          title="3.000.000 €"
        />
        <überblick_top_infos description="Typ" title="Genussrecht" />
      </div>
      <div id="Überblick_Tomorrow_Wrapper">
        <Kachel_FullW_2h
          title="Unternehmen"
          text="Die Hamburger Smartphone-Bank Tomorrow ist eine auf Nachhaltigkeit ausgerichtete Neo-Bank. In Zusammenarbeit mit der Solarisbank AG bietet das Fintech Tomorrow ein digitales und ökologisch nachhaltiges Girokonto an. Dabei nutzt die Tomorrow GmbH die Infrastruktur und die Vollbanklizenz der Solarisbank und fungiert selbst als Technologie-Plattform. Tomorrow betreibt die App, stellt den Kunden-Service und steuert, gemeinsam mit der Solarisbank, die nachhaltige Anlage der Kundeneinlage. Die Tomorrow Bank spendet die beim Kauf anfallende Interchange Fee an Klimaschutzprojekte und legt die Kundeneinlagen mit nachhaltigen Kriterien an. Seit 2020 ist die Fintech-Unternehmung Teil des globalen B Corp-Netzwerkes. Zertifizierte B Corporations erfüllen die höchsten Standards für geprüfte soziale und ökologische Leistung, öffentliche Transparenz und rechtliche Rechenschaftspflicht."
        />

        <div id="Überblick_Tomorrow_Smalls_Wrapper">
          <Kachel_Klein title="Regulierende Behörde" text="BaFin" />
          <Kachel_Klein title="Gründung" text="2018" />
          <Kachel_Klein
            title="EMISSIONSZEITRAUM"
            text="17.10.2020-01.10.2021"
          />
          <Kachel_Klein title="Maximalinvestition" text="25.000 €" />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick_Tomorrow;
