import "./Design/BB1Überblick.css";

import überblick_top_infos from "../../components/überblick_top_infos";
import Kachel_Unternehmen from "../../components/Kacheln/Kachel_Unternehmen";
import Kachel_TokenSale from "../../components/Kacheln/Kachel_TokenSale";

function BB1Überblick(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Überblick</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>

      <div id="überblick_top_infos">
        <überblick_top_infos description="Erwartete Rendite" title="4%" />
        <überblick_top_infos description="Mindestinvestition" title="1€%" />
        <überblick_top_infos
          description="Finanzierungsvolumen"
          title="100.000.000$"
        />
        <überblick_top_infos description="Typ" title="Schuldverschreibung" />
      </div>

      <div id="überblick_content_wrapper">
        <div id="überblick_content_top">
          <Kachel_Unternehmen />
          <Kachel_TokenSale />
        </div>

        <div id="überblick_content_bottom">
          <div id="Behörde">
            <h3 id="kleine_kachel_h3">BaFin</h3>
            <h4 id="kleine_kachel_h4">Regulierende Behörde</h4>
          </div>
          <div id="Gründung">
            <h3 id="kleine_kachel_h3">2018</h3>
            <h4 id="kleine_kachel_h4">Gründung</h4>
          </div>
          <div id="Emissionszeitraum">
            <h3 id="kleine_kachel_h3">11.03.19-10.05.20</h3>
            <h4 id="kleine_kachel_h4">Emissionszeitraum</h4>
          </div>
          <div id="Kategorie">
            <h3 id="kleine_kachel_h3">Schifffahrt</h3>
            <h4 id="kleine_kachel_h4">Kategorie</h4>
          </div>
          <div id="Dokumente">
            <h3 id="kleine_kachel_h3">2018</h3>
            <h4 id="kleine_kachel_h4">WpPG</h4>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default BB1Überblick;
