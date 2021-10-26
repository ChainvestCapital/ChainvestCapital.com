import "./Design/FrameÜberblickVogemann.css";
import überblick_top_infos from "../../components/überblick_top_infos";
import Kachel_Unternehmen from "../../components/Kacheln/Kachel_Unternehmen";
import Kachel_TokenSale from "../../components/Kacheln/Kachel_TokenSale";

function FrameÜberblickVogemann(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Überblick</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>
      <div id="überblick_top_infos">
        <überblick_top_infos description="Erwartete Rendite" title="8 %" />
        <überblick_top_infos description="Mindestinvestition" title="1000 $" />
        <überblick_top_infos
          description="Finanzierungsvolumen"
          title="50.000.000$"
        />
        <überblick_top_infos description="Typ" title="Genussrecht" />
      </div>
      <div id="Vogemann_Überblick_Content_Wrapper">
        <div id="Vogemann_Überblick_Top">
          <Kachel_Unternehmen
            text="Die Vogemann Green Ship Token GmbH ist Teil der Hamburger Reederei H .Vogemann, die auf Massenguttransporte mit Bulkern spezialisiert ist. Neben der Bereederung der Reedereiflotte moderner Massengutfrachter fungiert die Vogemann-Gruppe als Dienstleister für das kommerzielle und technische Management von Schiffen."
            title="UNTERNEHMEN"
          />
          <Kachel_TokenSale />
        </div>

        <div id="Vogemann_Überblick_Bottom">
          <div id="überblick_content_bottom_Vogemann">
            <div id="Behörde">
              <h3 id="kleine_kachel_h3">FinMa</h3>
              <h4 id="kleine_kachel_h4">Regulierende Behörde</h4>
            </div>
            <div id="Gründung">
              <h3 id="kleine_kachel_h3">1886</h3>
              <h4 id="kleine_kachel_h4">Gründung</h4>
            </div>
            <div id="Emissionszeitraum">
              <h3 id="kleine_kachel_h3">GST</h3>
              <h4 id="kleine_kachel_h4">TOKEN TICKER</h4>
            </div>
            <div id="Kategorie">
              <h3 id="kleine_kachel_h3">Schifffahrt</h3>
              <h4 id="kleine_kachel_h4">Kategorie</h4>
            </div>
            <div id="Dokumente">
              <h3 id="kleine_kachel_h3">Vorhanden</h3>
              <h4 id="kleine_kachel_h4">WpPG</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default FrameÜberblickVogemann;
