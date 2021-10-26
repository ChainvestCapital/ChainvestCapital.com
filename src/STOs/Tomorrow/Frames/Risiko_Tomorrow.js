import Kachel_Risiko from "../../components/Kacheln/KachelRisiko";
import Kachel_Dokumente from "../../components/Kacheln/Kachel_Dokumente";

function Risiko_Tomorrow(props) {
  return props.trigger ? (
    <div>
      <div id="project_changing_heading_wrapper">
        <h4 id="project_changing_heading">Risiko</h4>
        <div id="project_changing_heading_unterstrich"></div>
      </div>
      <div id="Risiko_Tomorrow_Wrapper">
        <Kachel_Risiko
          title="MAXIMALES RISIKO – TOTALVERLUSTRISIKO"
          text="Es besteht das Risiko des Totalverlusts des Anlagebetrags, der Zinsansprüche sowie der Ansprüche auf Gewinn- und Exit-Beteiligung. Der Eintritt Einzelner oder das kumulative Zusammenwirken verschiedener Risiken kann erhebliche nachteilige Auswirkungen auf die erwarteten Ergebnisse der Emittentin haben, die bis zu deren Insolvenz führen könnten.
Individuell können dem*der Anleger*in zusätzliche Vermögensnachteile entstehen, etwa wenn der Anleger den Erwerb der Kapitalanlage durch ein Darlehen fremdfinanziert oder wenn er trotz des bestehenden Verlustrisikos die Rückzahlung des Anlagebetrags, der Zinsansprüche sowie der Ansprüche auf Gewinn- und Exit-Beteiligung aus der Kapitalanlage fest zur Deckung anderer Verpflichtungen einplant. Solche zusätzlichen Vermögensnachteile können im schlechtesten Fall bis hin zur Privatinsolvenz des*der Anlegers*in führen. Daher sollte der*die Anleger*in alle Risiken unter Berücksichtigung seiner persönlichen Verhältnisse prüfen und gegebenenfalls individuellen fachlichen Rat einholen. Von einer Fremdfinanzierung der Kapitalanlage (z.B. durch einen Bankkredit) wird ausdrücklich abgeraten.
Die Kapitalanlage ist nur als Beimischung in ein Anlageportfolio und nur für Anleger*innen geeignet, die einen entstehenden Verlust bis zum Totalverlust ihres Anlagebetrages hinnehmen könnten. Diese Kapitalanlage eignet sich nicht für Anleger*innen mit kurzfristigem Liquiditätsbedarf und ist nicht zur Altersvorsorge geeignet."
        />
        <Kachel_Risiko
          title="RISIKO AUFGRUND VORINSOLVENZLICHER DURCHSETZUNGSSPERRE
"
          text="Für alle Zahlungsansprüche der Anleger*innen gilt eine vorinsolvenzliche Durchsetzungssperre. Der*Die Anleger*in verpflichtet sich, sämtliche Ansprüche auf Zahlung der Zinsen sowie auf Rückzahlung des Anlagebetrags sowie der Ansprüche auf Gewinn- und Exit-Beteiligung aus dem Genussrecht solange und soweit nicht geltend zu machen, wie die teilweise oder vollständige Erfüllung dieser Ansprüche zu einer Überschuldung der Emittentin im Sinne des § 19 InsO oder einer drohenden Zahlungsunfähigkeit im Sinne des § 18 InS oder einer Zahlungsunfähigkeit im Sinne des § 17 Ins O in ihrer jeweils geltenden Fassung führen würde (vorinsolvenzliche Durchsetzungssperre). Die vorinsolvenzliche Durchsetzungssperre kann zu einer dauerhaften Nichterfüllung der Ansprüche des*der Anleger*in aus dem Genussrecht führen. Daher ist das Bestehen eines Anspruchs der Anleger*in auf Zahlungen von der wirtschaftlichen Situation der Emittentin und insbesondere auch von deren Liquiditätslage abhängig. Für den*die Anleger*in besteht das Risiko, dass er*sie im Falle des Vorliegens eines solchen Zahlungsvorbehaltes keine Zahlungen zum eigentlichen Zahlungstermin mangels Vorliegen eines Anspruchs von der Emittentin verlangen kann. Wird der Zahlungsvorbehalt nicht beseitigt, hat dies den Totalverlust des Anlagebetrages für den*die Anleger*in zur Folge."
        />

        <Kachel_Risiko
          title="NACHRANGRISIKO"
          text="Bei dem Wertpapier handelt es sich um ein nachrangiges Genussrecht mit vorinsolvenzlicher Durchsetzungssperre. Die Nachrangforderungen des*der Anleger*in treten im Falle der Eröffnung des Insolvenzverfahrens über das Vermögen der Emittentin im Rang hinter die Forderungen im Sinne von § 39 Absatz 1 Nr. 1 bis 5 der Insolvenzordnung zurück. Das heißt,der*die Anleger*in wird mit seinen Forderungen erst nach vollständiger und endgültiger Befriedigung dieser Forderungen berücksichtigt. Die Höhe der tatsächlichen Zahlungen an den*die Anleger*in ist damit abhängig von der Höhe der Insolvenzmasse. Reicht die Insolvenzmasse nicht aus, um auf nachrangige Forderungen im Insolvenzverfahren Zahlungen zu leisten,hätte dies für den*die Anleger*in den Totalverlust des Anlagebetrags zur Folge. Der*Die Anleger*in trägt daher ein unternehmerisches Risiko, das höher ist als das Risiko eines regulären Fremdkapitalgebers. Der*Die Anleger*in wird dabei nicht selbst Gesellschafter*in der Emittentin und erwirbt keine Gesellschafterrechte. Es handelt sich nicht um eine sogenannte mündelsichere Beteiligung, sondern um eine unternehmerische Finanzierung mit eigenkapitalähnlicher Haftungsfunktion."
        />

        <Kachel_Risiko
          title="FEHLENDE BESICHERUNG DES GENUSSRECHTS"
          text="Da das Genussrecht unbesichert ist, könnte der*die Anleger*in im Insolvenzfall der Emittentin weder seine Forderung auf Rückzahlung des eingesetzten Kapitals noch seine Zinszahlungsansprüche sowie Ansprüche auf Gewinn- und Exit-Beteiligung aus Sicherheiten befriedigen. Im Insolvenzfall könnte dies dazu führen, dass die Ansprüche der einzelnen Anleger*innen nicht oder nur zu einem geringeren Teil durchgesetzt werden können. Dies könnte dazu führen, dass Zinszahlungen, Rückzahlung des Anlagebetrags sowie Zahlungen der Gewinn- und Exit-Beteiligung nicht oder nicht rechtzeitig geleistet werden können oder dass es zum teilweisen oder vollständigen Verlust des investierten Kapitals kommt."
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Risiko_Tomorrow;
