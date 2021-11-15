import Risiko_Kachel from "../../../Components/Risiko_Kachel";
import "./Risiko.css";

function Risiko(props) {
  return props.trigger ? (
    <div>
      <div id="Desktop_Risiko_Wrapper">
        <Risiko_Kachel
          title="MAXIMALES RISIKO – TOTALVERLUSTRISIKO
"
          text="
Es besteht das Risiko des Totalverlusts des Anlagebetrags, der Zinsansprüche sowie der Ansprüche auf Gewinn- und Exit-Beteiligung. Der Eintritt Einzelner oder das kumulative Zusammenwirken verschiedener Risiken kann erhebliche nachteilige Auswirkungen auf die erwarteten Ergebnisse der Emittentin haben, die bis zu deren Insolvenz führen könnten.
Individuell können dem*der Anleger*in zusätzliche Vermögensnachteile entstehen, etwa wenn der Anleger den Erwerb der Kapitalanlage durch ein Darlehen fremdfinanziert oder wenn er trotz des bestehenden Verlustrisikos die Rückzahlung des Anlagebetrags, der Zinsansprüche sowie der Ansprüche auf Gewinn- und Exit-Beteiligung aus der Kapitalanlage fest zur Deckung anderer Verpflichtungen einplant. Solche zusätzlichen Vermögensnachteile können im schlechtesten Fall bis hin zur Privatinsolvenz des*der Anlegers*in führen. Daher sollte der*die Anleger*in alle Risiken unter Berücksichtigung seiner persönlichen Verhältnisse prüfen und gegebenenfalls individuellen fachlichen Rat einholen. Von einer Fremdfinanzierung der Kapitalanlage (z.B. durch einen Bankkredit) wird ausdrücklich abgeraten.
Die Kapitalanlage ist nur als Beimischung in ein Anlageportfolio und nur für Anleger*innen geeignet, die einen entstehenden Verlust bis zum Totalverlust ihres Anlagebetrages hinnehmen könnten. Diese Kapitalanlage eignet sich nicht für Anleger*innen mit kurzfristigem Liquiditätsbedarf und ist nicht zur Altersvorsorge geeignet."
        />
        <Risiko_Kachel
          title="RISIKO AUFGRUND VORINSOLVENZLICHER DURCHSETZUNGSSPERRE"
          text="Für alle Zahlungsansprüche der Anleger*innen gilt eine vorinsolvenzliche Durchsetzungssperre. Der*Die Anleger*in verpflichtet sich, sämtliche Ansprüche auf Zahlung der Zinsen sowie auf Rückzahlung des Anlagebetrags sowie der Ansprüche auf Gewinn- und Exit-Beteiligung aus dem Genussrecht solange und soweit nicht geltend zu machen, wie die teilweise oder vollständige Erfüllung dieser Ansprüche zu einer Überschuldung der Emittentin im Sinne des § 19 InsO oder einer drohenden Zahlungsunfähigkeit im Sinne des § 18 InS oder einer Zahlungsunfähigkeit im Sinne des § 17 Ins O in ihrer jeweils geltenden Fassung führen würde (vorinsolvenzliche Durchsetzungssperre). Die vorinsolvenzliche Durchsetzungssperre kann zu einer dauerhaften Nichterfüllung der Ansprüche des*der Anleger*in aus dem Genussrecht führen. Daher ist das Bestehen eines Anspruchs der Anleger*in auf Zahlungen von der wirtschaftlichen Situation der Emittentin und insbesondere auch von deren Liquiditätslage abhängig. Für den*die Anleger*in besteht das Risiko, dass er*sie im Falle des Vorliegens eines solchen Zahlungsvorbehaltes keine Zahlungen zum eigentlichen Zahlungstermin mangels Vorliegen eines Anspruchs von der Emittentin verlangen kann. Wird der Zahlungsvorbehalt nicht beseitigt, hat dies den Totalverlust des Anlagebetrages für den*die Anleger*in zur Folge."
        />
        <Risiko_Kachel
          title="NACHRANGRISIKO"
          text="Bei dem Wertpapier handelt es sich um ein nachrangiges Genussrecht mit vorinsolvenzlicher Durchsetzungssperre. Die Nachrangforderungen des*der Anleger*in treten im Falle der Eröffnung des Insolvenzverfahrens über das Vermögen der Emittentin im Rang hinter die Forderungen im Sinne von § 39 Absatz 1 Nr. 1 bis 5 der Insolvenzordnung zurück. Das heißt,der*die Anleger*in wird mit seinen Forderungen erst nach vollständiger und endgültiger Befriedigung dieser Forderungen berücksichtigt. Die Höhe der tatsächlichen Zahlungen an den*die Anleger*in ist damit abhängig von der Höhe der Insolvenzmasse. Reicht die Insolvenzmasse nicht aus, um auf nachrangige Forderungen im Insolvenzverfahren Zahlungen zu leisten,hätte dies für den*die Anleger*in den Totalverlust des Anlagebetrags zur Folge. Der*Die Anleger*in trägt daher ein unternehmerisches Risiko, das höher ist als das Risiko eines regulären Fremdkapitalgebers. Der*Die Anleger*in wird dabei nicht selbst Gesellschafter*in der Emittentin und erwirbt keine Gesellschafterrechte. Es handelt sich nicht um eine sogenannte mündelsichere Beteiligung, sondern um eine unternehmerische Finanzierung mit eigenkapitalähnlicher Haftungsfunktion."
        />
        <Risiko_Kachel
          title="FEHLENDE BESICHERUNG DES GENUSSRECHTS"
          text="Da das Genussrecht unbesichert ist, könnte der*die Anleger*in im Insolvenzfall der Emittentin weder seine Forderung auf Rückzahlung des eingesetzten Kapitals noch seine Zinszahlungsansprüche sowie Ansprüche auf Gewinn- und Exit-Beteiligung aus Sicherheiten befriedigen. Im Insolvenzfall könnte dies dazu führen, dass die Ansprüche der einzelnen Anleger*innen nicht oder nur zu einem geringeren Teil durchgesetzt werden können. Dies könnte dazu führen, dass Zinszahlungen, Rückzahlung des Anlagebetrags sowie Zahlungen der Gewinn- und Exit-Beteiligung nicht oder nicht rechtzeitig geleistet werden können oder dass es zum teilweisen oder vollständigen Verlust des investierten Kapitals kommt."
        />
        <Risiko_Kachel
          title="ENDFÄLLIGKEIT DER TILGUNG"
          text="Die Tilgung des Anlagebetrags der Anleger*innen soll insgesamt am Ende der Laufzeit erfolgen. Sollte die Emittentin bis dahin das für die Tilgung erforderliche Kapital nicht aus ihrer laufenden Geschäftstätigkeit erwirtschaften können / oder keine dann erforderliche Anschlussfinanzierung erhalten, besteht das Risiko, dass die endfällige Tilgung nicht oder nicht zum geplanten Zeitpunkt erfolgen kann."
        />
        <Risiko_Kachel
          title="VERÄUSSERLICHKEIT (FUNGIBILITÄT), VERFÜGBARKEIT DESI NVESTIERTEN KAPITALS, LANGFRISTIGE BINDUNG"
          text="Das Genussrecht ist mit einer festen Vertragslaufzeit versehen. Derzeit existiert kein liquider Zweitmarkt für die abgeschlossenen Genussrechte. Eine Veräußerung der Genussrechte durch den*die Anleger*in ist zwar grundsätzlich rechtlich möglich, die Möglichkeit zum Verkauf ist jedoch aufgrund der geringen Marktgröße und Handelsvolumina nicht sichergestellt. Es ist auch möglich, dass eine Abtretung nicht zum Nennwert erfolgen kann, dass ein*e Käufer*in gefunden wird oder der Verkauf nur zum geringeren Preis als gewünscht erfolgen kann. Das eingesetzte Kapital kann daher bis zum Beginn des ordentlichen Kündigungsrechts für die Anleger*innen gebunden sein."
        />
        <Risiko_Kachel
          title="MÖGLICHE VERLÄNGERUNG DER KAPITALBINDUNG"
          text="Da es sich um ein nachrangiges Genussrecht handelt, darf das Genussrechtskapital nur zurückgezahlt werden, wenn dies bei der Emittentin nicht zur Zahlungsunfähigkeit und / oder Überschuldung führen würde (vorinsolvenzliche Durchsetzungsperre). Wäre dies der Fall, verlängerte sich die Laufzeit des Genussrechts automatisch bis zu dem Zeitpunkt, zu dem dieser Zustand nicht mehr bestünde. Die Anlage ist damit für Anleger*innen nicht empfehlenswert, die darauf angewiesen sind, exakt zum geplanten Laufzeitende ihr Geld zurück zu erhalten. Würde die wirtschaftliche Schieflage der Emittentin nicht behoben, könnte es zum Teil- oder Totalverlust des investierten Vermögens und der Zins- und Rückzahlungsansprüche sowie der Ansprüche auf Gewinn- und Exit-Beteiligung kommen."
        />
        <Risiko_Kachel
          title="VERLUST DES PRIVATE KEY"
          text="Über die Genussrechte wird ein Token ausgestellt, der die Genussrechte repräsentiert. Hierdurch werden die Genussrechte handelbar. Die Token werden den jeweiligen Wallets der Anleger zugeteilt. Nach der Ausgabe und Einbuchung in die Wallets sind die Token nur über deren jeweiligen persönlichen Zugang (sog. Private Key) zu ihrer Wallet oder den Wallet Partner zugänglich. Sollte der private Key in die Hände Dritter gelangen, so kann dieser Dritte die Wallet eines Anlegers missbrauchen und unbefugt Vermögenstransaktionen vornehmen. Der Verlust des Private Key, auch wenn dieser schlichtweg „vergessen“ wurde, führt zu einem unwiederbringlichen Verlust der Token."
        />
        <Risiko_Kachel
          title="TECHNOLOGIERISIKEN"
          text="Die Blockchain-Technologie sowie alle damit in Verbindung stehenden technologischen Komponenten befinden sich nach wie vor in einem frühen technischen Entwicklungsstadium. Der Token entsteht, indem die Emittentin die Anzahl der gezeichneten Token auf der Blockchain generiert und dann auf die Wallet Adressen der Anleger überträgt, indem die Token den jeweiligen Adressen der Anleger zugewiesen werden. Die Blockchain-Technologie kann Fehler enthalten, die derzeit nicht bekannt sind, aus denen sich zukünftig aber unabsehbare Folgen ergeben könnten. Die Blockchain Technologie kann ferner technischen Schwierigkeiten ausgesetzt sein, die deren Funktionsfähigkeit beeinträchtigt. Ein teilweiser oder vollständiger Zusammenbruch der Blockchain kann die Emission der tokenbasierten Genussrechte und die Handelbarkeit der Token stören oder unmöglich machen. Im schlimmsten Fall kann dies zum unwiederbringlichen Verlust der Token und damit zum Verlust der tokenbasierten Genussrechte führen."
        />
        <Risiko_Kachel
          title="RISIKO AUFGRUND DER WIDERRUFSRECHTE DER ANLEGER"
          text="Bei Inanspruchnahme des gesetzlichen Widerrufsrechts durch Anleger*innen besteht aufgrund der dann entstehenden Verpflichtung der Emittentin zur Rückzahlung bereits eingezahlter Anlagebeträge das Risiko, dass es zu entsprechenden Liquiditätsabflüssen bei der Emittentin kommt. In diesem Fall könnten geplante Investitionen nicht oder nicht wie geplant vorgenommen werden. In einem solchen Fall könnten die wirtschaftlichen Ergebnisse der Emittentin von der Prognose abweichen."
        />
        <Risiko_Kachel
          title="KEINE GESELLSCHAFTSRECHTLICHEN MITWIRKUNGSRECHTE"
          text="Die Genussrechte gewähren keine gesellschaftsrechtlichen Mitwirkungsrechte in der Emittentin, insbesondere keine Teilnahme- oder Stimmrecht ein Gesellschafterversammlungen. Anleger*innen haben damit nicht die Möglichkeit, auf die Realisierung des unternehmerischen Risikos einzuwirken (insbesondere haben sie nicht die Möglichkeit, verlustbringende Geschäftstätigkeiten auf Ebene der Emittentin zu beenden, ehe das eingebrachte Kapital verbraucht ist)."
        />
        <Risiko_Kachel
          title="VERWÄSSERUNG"
          text="Es besteht das Risiko einer wirtschaftlichen Verwässerung der Beteiligung der Anleger an der Tomorrow GmbH. Hierdurch werden mittelbar auch die Ansprüche der Anleger aus den Genussrechten verwässert. Dies ist zunächst dann der Fall, wenn die Tomorrow GmbH zukünftig weitere Geschäftsanteile im Rahmen einer Kapitalerhöhung ausgibt. Insoweit vermindert sich daher bei Ausgabe neuer Geschäftsanteile an der Tomorrow GmbH die Beteiligungsquote der Anleger*innen und damit einhergehend auch die prozentuale Gewinn- und Exit-Beteiligung."
        />
        <Risiko_Kachel
          title="GESCHÄFTSRISIKO DER EMITTENTIN"
          text="Es handelt sich um eine unternehmerische Finanzierung. Der*Die Anleger*in trägt das Risiko einer nachteiligen Geschäftsentwicklung der Emittentin. Es besteht das Risiko, dass der Emittentin in Zukunft nicht die erforderlichen Mittel zur Verfügung stehen, um die Zinsforderungen, Rückzahlung des Anlagebetrags sowie Forderungen aufgrund der Gewinn- und Exit-Beteiligung zu erfüllen. Weder der wirtschaftliche Erfolg der zukünftigen Geschäftstätigkeit der Emittentin noch der Erfolg der von der Emittentin verfolgten unternehmerischen Strategie können mit Sicherheit vorhergesehen werden. Die Emittentin kann Höhe und Zeitpunkt von Zuflüssen weder zusichern noch garantieren.
Der wirtschaftliche Erfolg hängt von mehreren Einflussgrößen ab,insbesondere von:
1. Der Fähigkeit der Emittentin die genannten Vorhaben zu Kund*innenwachstum und Monetarisierung im geplanten Kostenrahmen durchzuführen. Hierbei kann der Erfolg der Marketingmaßnahmen ausbleiben oder die Entwicklung der entsprechenden Software und Produkte länger brauchen als geplant.
2. Zahlungs- und Leistungsfähigkeit von Kund*innen und Vertragspartnern der Emittentin
3. Veränderungen in den rechtlichen Rahmenbedingungen. Insbesonder ein der Bankenaufsicht und Fintech Regulierung auf nationaler und EU Ebene.
Verschiedene weitere Faktoren wie insbesondere Veränderung der Konjunkturlage verbunden mit veränderter Kaufkraft der Kunden der Emittentin, Veränderung der Wettbewerbsbedingungen, Planungsfehler, Umweltrisiken, die Abhängigkeit von Schlüsselpersonen sowie Veränderungen der rechtlichen und steuerrechtlichen Rahmenbedingungen können nachteilige Auswirkungen auf die Emittentin haben. Dies kann zur Folge haben,dass die Ansprüche aus dem Genussrecht nicht oder nicht in der geplanten Höhe bedient werden können bis hin zum Totalverlust der Einlage."
        />
        <Risiko_Kachel
          title="RISIKO AUFGRUND VON PANDEMIEN (COVID-19)"
          text="Es besteht das Risiko, dass eine globale Ausbreitung von Krankheiten, wie z.B. Covid-19, die geplante Ausübung von Investitionen oder der Geschäftstätigkeit der Emittentin nachhaltig gestört wird."
        />
        <Risiko_Kachel
          title="AUSFALLRISIKO DER EMITTENTIN (EMITTENTENRISIKO)"
          text="Die Emittentin kann zahlungsunfähig werden oder in Überschuldung geraten. Dies kann insbesondere der Fall sein, wenn die Emittentin geringere Einnahmen und/oder höhere Ausgaben als erwartet zu verzeichnen hat oder wenn die Emittentin eine etwaig erforderliche Anschlussfinanzierung nicht einwerben kann. Die Insolvenz der Emittentin kann zum Verlust der Einlage und der Zinsen sowie der Ansprüche aufgrund der Gewinn- und Exit-Beteiligung führen, da die Emittentin keinem Einlagensicherungssystem angehört."
        />
        <Risiko_Kachel
          title="FRÜHE UNTERNEHMENSPHASE"
          text="Bei der Emittentin handelt es sich um ein Unternehmen in einer frühen Unternehmensphase. Die Finanzierung eines solchen jungen Unternehmens ist mit spezifischen Risiken verbunden. Setzt sich eine Geschäftsidee am Markt nicht durch oder kann der geplante Geschäftsaufbau nicht wie erhofft umgesetzt werden, besteht für Anleger*innen ein Totalverlustrisiko. Der Unternehmenserfolg hängt von verschiedenen Faktoren, wie z.B. der Finanzierung, dem Team, Fachkräften und Berater*innen, dem Marktumfeld, Lieferant*innenbeziehungen, technologischen Entwicklungen,Schutzrechten, gesetzlichen Rahmenbedingungen, Wettbewerber*innen und weiteren Faktoren, ab.
Für Anleger*innen, die in ein Frühphasenunternehmen investieren, ist es wesentlich wahrscheinlicher, dass sie ihr investiertes Kapital verlieren, als dass sie eine Rendite auf das eingesetzte Kapital erzielen."
        />
        <Risiko_Kachel
          title="RISIKEN AUS DER GESCHÄFTSTÄTIGKEIT UND DER UMSETZUNG DER VONDER EMITTENTIN VERFOLGTEN UNTERNEHMERISCHEN STRATEGIE"
          text="Verschiedene Risikofaktoren können die Fähigkeit der Emittentin beeinträchtigen, ihren Verpflichtungen aus den Genussrechtsbedingungen nachzukommen.
Dies sind zum einen Risiken aus der Umsetzung der von der Emittentin verfolgten unternehmerischen Strategie. Die Umsetzung dieser Strategie könnte komplexer sein als erwartet. Es könnten unerwartete und / oder höhere Umsetzungsrisiken auftreten und / oder Geschäftsprozesse mitmehr Aufwand und Kosten verbunden sein als erwartet. Es könnten Planungsfehler zutage treten oder Vertragspartner*innen der Emittentin mangelhafte Leistungen erbringen. Erforderliche Genehmigungen und / oder Zulassungen könnten nicht erteilt werden. Es könnte zu Verzögerungen imgeplanten Ablauf und / oder zu Problemen bei der Erzielung von Einnahmen in der geplanten Höhe oder zum geplanten Zeitpunkt kommen. Die rechtlichen Anforderungen könnten sich verändern und dadurch könnten Änderungen oder zusätzliche Maßnahmen im Zusammenhang mit der Umsetzung der unternehmerischen Strategie erforderlich werden, was zu Mehrkosten und / oder Verzögerungen führen könnte.Diese und / oder weitere Risiken könnten sich negativ auf die Vermögens-,Finanz- und Ertragslage der Emittentin auswirken. Der Emittentin könnten infolgedessen in Zukunft nicht die erforderlichen Mittel zur Verfügung stehen, um die Zinsforderungen, Rückzahlung des Anlagebetrags sowie Ansprüche aufgrund der Gewinn- und Exit-Beteiligung der Anleger*innen zu erfüllen.
Zum anderen ist die allgemeine Geschäftstätigkeit der Emittentin mit Risiken verbunden, wie marktbezogene Risiken (z.B. Nachfrage- und Absatzrückgang; Zahlungsschwierigkeiten oder Insolvenzen von Kund*innen;Kostenerhöhung und Kapazitätsengpässe auf Beschaffungsseite; politische Veränderungen; Zins- und Inflationsentwicklungen; Veränderung der rechtlichen und steuerlichen Rahmenbedingungen der Tätigkeit der Emittentin) und unternehmensbezogene Risiken (z.B. Qualitätsrisiken; Produktmängel; Finanzierungs- und Zinsänderungsrisiken; Risiken aus Marken und Schutzrechten; Abhängigkeit von Partner*innenunternehmen und qualifiziertem Personal; Risiken aus unzureichendem Versicherungsschutz,aus der Gesellschafter- und / oder Konzernstruktur, aus der internen Organisation, aus Vermögensbewertungen und Steuernachforderungen).
Diese und / oder weitere Risiken könnten sich negativ auf die Vermögens-,Finanz- und Ertragslage der Emittentin auswirken. Der Emittentin könnten infolgedessen in Zukunft nicht die erforderlichen Mittel zur Verfügung stehen, um die Zinsforderungen oder anderer Rückzahlungsansprüche der Anleger*innen zu erfüllen und das eingesetzte Darlehenskapital zurückzuzahlen."
        />
        <Risiko_Kachel
          title="KAPITALSTRUKTURRISIKO"
          text="Die Emittentin wird möglicherweise zusätzliche Fremdkapitalfinanzierungen in Anspruch nehmen und dadurch Verpflichtungen eingehen, die (unabhängig von ihrer Einnahmesituation) zusätzlich zu den Forderungen der Anleger*innen aus den tokenbasierten Genussrechten zu bedienen sind."
        />
        <Risiko_Kachel
          title="SCHLÜSSELPERSONENRISIKO, MANAGEMENT"
          text="Durch einen möglichen Verlust von Kompetenzträge*innen besteht das Risiko, dass der Emittentin Fachwissen nicht mehr zur Verfügung steht und somit ein qualifiziertes Investitions- und Risikomanagement nicht mehr in vollem Umfang gewährleistet werden kann. Der Verlust solcher unternehmenstragenden Personen könnte einen nachteiligen Effekt auf die wirtschaftliche Entwicklung der Emittentin haben. Dadurch könnte sich die Höhe der Zinszahlungen, Rückzahlung des Anlagebetrags und Zahlungen aufgrund der Gewinn- und Exit-Beteiligung an die Anleger*innen reduzieren oder diese könnten ausfallen. Auch Managementfehler auf Ebene der Emittentin und / oder wesentlicher Vertragspartner*innen der Emittentin sind nicht auszuschließen. Es kann in technischer, rechtlicher oder wirtschaftlicher Hinsicht zu Fehleinschätzungen kommen. Ebenfalls kann nicht ausgeschlossen werden, dass sich die Gesellschafterstruktur in Zukunft ändert und dritte Personen einen beherrschenden Einfluss auf die Emittentin gewinnen können."
        />
        <Risiko_Kachel
          title="AUFSICHTSRECHTSRISIKO"
          text="Es besteht das Risiko, dass die rechtlichen Rahmenbedingungen so geändert werden oder sich die Tätigkeit der Emittentin so verändert, dass die Emittentin ein Investmentvermögen im Sinne des Kapitalanlagengesetzbuchs darstellt, sodass die Bundesanstalt für Finanzdienstleistungsaufsicht Maßnahmen nach § 15 des Kapitalanlagegesetzbuches ergreifen und insbesondere die Rückabwicklung der Geschäfte anordnen kann. Dies kann zu geringeren Zinszahlungen, Rückzahlungen des Anlagebetrags sowie Zahlungen aufgrund der Gewinn- und Exit-Beteiligung an die Anleger*innen bis hin zum Totalverlust der Einlage führen."
        />
        <Risiko_Kachel
          title="GENEHMIGUNGSRISIKO"
          text="Das Anbieten von Banking-Dienstleistungen ist an Vorschriften, Genehmigungen und Auflagen geknüpft. Der Tomorrow GmbH können Genehmigungen entzogen oder der Verkauf untersagt werden. Der Wegfall von Kapitalzuflüssen aufgrund eines Produktions- oder Dienstleistungsstopps von einzelnen Produkten oder Dienstleistungen kann dazu führen, dass die Emittentin nicht in der Lage ist, die Zinsforderungen oder Ansprüche aufgrund der Gewinn- und Exit-Beteiligung der Anleger*innen zu erfüllen und das eingesetzte Genussrechtskapital zurückzuzahlen."
        />
        <Risiko_Kachel
          title="RISIKEN BEI AUFNAHME WEITERER GESCHÄFTSFELDER"
          text="Ein Risiko für die Vermögens-, Finanz- und Ertragslage der Emittentin kann sich daraus ergeben, dass die Emittentin zukünftig weitere Geschäftsfelder aufnimmt, die zum Zeitpunkt der Veröffentlichung der Genussrechtsbedingungen noch nicht bekannt sind. Sollte die Emittentin in der Zukunft weitere Geschäftsfelder aufnehmen, so wird sie dafür finanzielle Mittel aufwenden müssen. Durch die Aufnahme von weiteren Geschäftsfeldern könnten der Emittentin nicht ausreichend Mittel verbleiben, um das ursprüngliche Geschäftsfeld erfolgreich zu bearbeiten, sodass sich die Aufnahme weiterer Geschäftsfelder nachteilig auf die Fähigkeit auswirken könnte, Zinsforderungen oder Ansprüche aufgrund der Gewinn- und Exit-Beteiligung der Anleger*innen zu erfüllen und das eingesetzte Genussrechtskapital zurückzuzahlen."
        />
        <Risiko_Kachel
          title="PROGNOSERISIKO"
          text="Die Prognosen hinsichtlich der Kosten für die Umsetzung der unternehmerischen Strategie, der erzielbaren Erträge und weiterer Aspekte könnten sich als unzutreffend erweisen. Bisherige Markt- oder Geschäftsentwicklungen sind keine Grundlage oder Indikator für zukünftige Entwicklungen"
        />
        <Risiko_Kachel
          title="RECHTSÄNDERUNGSRISIKO"
          text="Die Darstellung der rechtlichen Folgen eines Investments in das Genussrecht der Emittentin beruht auf dem Strand des zum Zeitpunkt der Veröffentlichung der Genussrechtsbedingungen geltenden Rechts und den bisher angewendeten Rechtsnormen durch Behörden und Gerichte. Ebenso könnten künftige Änderungen von Rechtsnormen negative Folgen für die Emittentin und ihre Anleger*innen haben."
        />
        <Risiko_Kachel
          title="EXPANSIONSRISIKEN"
          text="Die Emittentin beabsichtigt ihre Produkte und Dienstleistungen zukünftig auch im EU-Ausland beginnend in Frankreich anzubieten. Sollte die Emittentin keinen geeigneten Marktzugang finden, könnte dies dazu führen,dass die Emittentin nicht wie geplant expandieren kann. Dies könnte dazuführen, dass die Emittentin nicht die erforderlichen Kapitalzuflüsse erwirtschaftet um die Ansprüche der Anleger*innen auf Zinszahlungen bzw.Zahlungen aufgrund der Gewinn- und Exit-Beteiligung zu leisten."
        />
        <Risiko_Kachel
          title="NEUE WETTBEWERBER*INNEN"
          text="In den Geschäftsfeldern, in denen die Emittentin aktiv ist, könnte es zu einem Markteintritt von Konkurrent*innen und somit zu einem verstärkten Wettbewerb kommen. Dieser Wettbewerb könnte sich, wenn kapitalstärkere Wettbewerber*innen in den Markt eintreten, deutlich intensivieren. Dies könnte den Preisdruck erhöhen, die Nachfrage nach Produkten der Emittentin senken oder sonstige denkbare nachteilige Auswirkungen auf die geschäftliche Entwicklung der Emittentin haben. Weiterhin kann nicht ausgeschlossen werden, dass die Wettbewerber*innen Produkte oder Dienstleistungen entwickeln und anbieten, die denen der Emittentin überlegen sind und / oder auf eine größere Marktakzeptanz stoßen. Generell ist nicht sichergestellt, dass sich die Emittentin in dem gegenwärtigen und künftig zunehmenden Wettbewerb erfolgreich behaupten wird. Der Eintritt eines jeden dieser vorgenannten Umstände könnte die Vermögens-, Finanz- und Ertragslage der Emittentin wesentlich nachteilig beeinflussen."
        />
        <Risiko_Kachel
          title="NATURKATASTROPHEN UND HÖHERE GEWALT"
          text="Sowohl die Anleger*innen als auch die Emittentin unterliegen einem allgemeinen Risiko von Naturkatastrophen und höherer Gewalt. Das können beispielsweise Erdbeben, Vulkanausbrüche, Dürren, Überschwemmungen,Waldbrände, Atomunfälle, (Bürger*innen-)Kriege oder kriegsähnliche Zustände oder Pandemien (im Folgenden „Ereignisse“) sein. Diese Ereignisse müssen sich nicht zwingend in der Region oder am Standort der Emittentin zutragen, sondern können auch an einem anderen Ort auf der Welt stattfinden. Durch die stark vernetzte und globalisierte Welt können sich derartige Ereignisse negativ auf die Geschäftsentwicklung der Emittentin auswirken.Die Ereignisse müssen nicht zwingend unmittelbar wirken, sondern können auch mittelbar bspw. über behördliche (Schutz-)Anordnungen Auswirkungen auf den Geschäftsbetrieb oder die Prognose der Geschäftsentwicklung(Produktion, Absatz, Umsatz, Kostenentwicklung, Erlösentwicklung, etc.)entfalten. So können derartige Ereignisse z.B. Zulieferer*innen oder Partner*innen unternehmen der Emittentin betreffen und sich somit auf die Lieferketten und die Aufrechterhaltung des Geschäftsbetriebs auswirken.Derartige Ereignisse könnten auch die Möglichkeit der Fortführung des Geschäftsbetriebs in den Büroräumen oder Produktionsstätten der Emittentinbeeinträchtigen. Die Fähigkeit der Emittentin und ihrer Kooperationspartner*innen und Zulieferer*innen, mit derartigen Krisensituationen umzugehen, die Größe der Lagerkapazitäten sowie alternative Versorgungs- und Beschaffungsmöglichkeiten könnten sich auf das Ausmaß der Auswirkungen dieser Risiko-Arten ebenso auswirken wie das unmittelbare Ereignis selbst."
        />
        <Risiko_Kachel
          title="FREMDFINANZIERUNGSRISIKO"
          text="
        Wenn der*die Anleger*in den Anlagebetrag fremdfinanziert, indem er*sie etwa einen privaten Kredit bei einer Bank aufnimmt, kann es über den Verlust des investierten Kapitals hinaus zur Gefährdung des weiteren Vermögens des*der Anleger*in kommen. Das maximale Risiko des*der Anleger*in besteht in diesem Fall in einer Überschuldung, die im schlechtesten Fall bis zur Privatinsolvenz des*der Anleger*in führen kann. Dies kann der Fall sein, wenn bei geringen oder keinen Rückflüssen aus Genussrechten der*die Anleger*innen finanziell nicht in der Lage ist, die Zins- und Tilgungsbelastung aus seiner Fremdfinanzierung zu bedienen. Die Emittentinrät daher von einer Fremdfinanzierung des Anlagebetrages ab."
        />
        <Risiko_Kachel
          title="RISIKO DER ÄNDERUNG DER RECHTLICHEN UND STEUERLICHENRAHMENBEDINGUNGEN"
          text="
        Es kann nicht ausgeschlossen werden, dass die Genussrechte von künftigen Steuer-, Gesellschafts- oder anderen Rechtsänderungen derart betroffen sind, dass auf die Zinszahlungen sowie Zahlungen aufgrund der Gewinn- und Exit-Beteiligung ein entsprechender Abschlag vorgenommen werden muss und somit die erwarteten Ergebnisse für den*die Anleger*in nicht (mehr) erzielt werden können. Ferner besteht das Risiko, dass der Erwerb, die Veräußerung oder die Rückzahlung der Genussrechte besteuert wird, was für den*die Anleger*in zusätzliche Kosten zur Folge hätte. Diese Kosten wären auch im Falle des Totalverlusts des Anlagebetrags durch den*die Anleger*in zu tragen. Die Übernahme dieser Kosten kann zu einer Privatinsolvenz des*der Anleger*in führen."
        />
        <Risiko_Kachel
          title="HINWEIS: RISIKOSTREUUNG, VERMEIDUNG VON RISIKOKONZENTRATION"
          text="
        Die Investition in das Genussrecht sollte aufgrund der Risikostruktur nur als ein Baustein eines diversifizierten (risikogemischten) Anlageportfolios betrachtet werden. Grundsätzlich gilt: Je höher die Rendite oder der Ertrag,desto größer das Risiko eines Verlusts. Durch eine Aufteilung des investierten Kapitals auf mehrere Anlageklassen und Projekte kann eine bessere Risikostreuung erreicht und „Klumpenrisiken“ vermieden werden."
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Risiko;
