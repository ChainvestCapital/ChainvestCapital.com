import "./Design/Impressum.css";

import Top_menue from "./components/navigation/top_menue";

import Footer from "./components/Footer";
import Mobile_menue from "./mobile_components/moble_menue";
import { useState, useEffect } from "react";
import Mobile_Footer from "./mobile_components/Mobile_Footer";

function Impressum() {
  useEffect(() => {
    document.title = "Impressum";
  }, []);
  return (
    <div>
      <div id="Desktop_Wrapper">
        <Top_menue />
        <div id="ImpressumWrapper">
          <h2 id="Impressum_h2">Impressum</h2>

          <div id="Impressum_Content_Wrapper">
            <h4 id="Impressum_h4">
              Impressum und Anbieterkennzeichnung gemäß § 5 TMG <br />
              <br /> Chainvest Capital UG <br />
              Kuhnkestraße 6<br /> 24118 Kiel <br />
              <br />
              Kontakt:
              <br /> E-Mail: info@chainvestcapital.de
              <br /> Registereintrag:
              <br /> Gesellschaftsform: UG
              <br /> Sitz: Kiel
              <br />
              Gründungsjahr: 2021 <br />
              Registergericht: Amtsgericht Kiel <br />
              Vertreten durch: Tim Zölitz, Lu-Mieke Ellen
              <br />
              <br /> Verbraucherstreitbeilegung/ Universalschlichtungsstelle:
              <br /> Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
              <br />
              <br />
              Copyright-Hinweise:
              <br /> Alle Texte, Bilder, Graphiken, Ton-, Video- und
              Animationsdateien sowie ihre Arrangements unterliegen dem
              Urheberrecht und anderen Gesetzen zum Schutz geistigen Eigentums.
              Sie dürfen weder für Handelszwecke oder zur Weitergabe kopiert,
              noch verändert und auf anderen Web-Sites verwendet werden. Einige
              unserer Internet-Seiten enthalten auch Bilder, die dem
              Urheberrecht derjenigen unterliegen, die diese zur Verfügung
              gestellt haben. Sämtliche Vervielfältigungen, Verbreitung oder
              sonstige Benutzung des Inhalts inklusive der Verlinkung der
              einzelnen Seiten oder der gesamten Homepage bedarf der Zustimmung
              der Chainvest Capital UG. Jede weitere kommerzielle Nutzung ist
              untersagt. <br />
              <br />
              Haftung für Inhalte:
              <br />
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zuforschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
              <br />
              <br /> Verpflichtungen zur Entfernung oder Sperrung der Nutzung
              von Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
              <br />
              <br />
              Haftung für Links:
              <br /> Unser Angebot enthält Links zu externen Websites Dritter,
              auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir
              für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.{" "}
              <br />
              <br />
              Urheberrecht:
              <br /> Die durch die Seitenbetreiber erstellten Inhalte und Werke
              auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
              <br /> <br />
              Quelle: e-recht24.de
            </h4>
          </div>
        </div>
        <Footer />{" "}
      </div>
      <div id="Mobile_Wrapper">
        <Mobile_menue />
        <div id="Mobile_Impressum_Wrapper">
          <h2 id="Mobile_Impressum_h2"> Impressum</h2>
          <h4 id="Mobile_Impressum_h4">
            Impressum und Anbieterkennzeichnung gemäß § 5 TMG <br />
            <br /> Chainvest Capital UG <br />
            Kuhnkestraße 6<br /> 24118 Kiel <br />
            <br />
            Kontakt:
            <br /> E-Mail: info@chainvestcapital.de
            <br /> Registereintrag:
            <br /> Gesellschaftsform: UG
            <br /> Sitz: Kiel
            <br />
            Gründungsjahr: 2021 <br />
            Registergericht: Amtsgericht Kiel <br />
            Vertreten durch: Tim Zölitz, Lu-Mieke Ellen
            <br />
            <br /> Verbraucherstreitbeilegung/ Universalschlichtungsstelle:
            <br /> Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
            <br />
            <br />
            Copyright-Hinweise:
            <br /> Alle Texte, Bilder, Graphiken, Ton-, Video- und
            Animationsdateien sowie ihre Arrangements unterliegen dem
            Urheberrecht und anderen Gesetzen zum Schutz geistigen Eigentums.
            Sie dürfen weder für Handelszwecke oder zur Weitergabe kopiert, noch
            verändert und auf anderen Web-Sites verwendet werden. Einige unserer
            Internet-Seiten enthalten auch Bilder, die dem Urheberrecht
            derjenigen unterliegen, die diese zur Verfügung gestellt haben.
            Sämtliche Vervielfältigungen, Verbreitung oder sonstige Benutzung
            des Inhalts inklusive der Verlinkung der einzelnen Seiten oder der
            gesamten Homepage bedarf der Zustimmung der Chainvest Capital UG.
            Jede weitere kommerzielle Nutzung ist untersagt. <br />
            <br />
            Haftung für Inhalte:
            <br />
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zuforschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
            <br />
            <br /> Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
            <br />
            <br />
            Haftung für Links:
            <br /> Unser Angebot enthält Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
            diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
            der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
            zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen. <br />
            <br />
            Urheberrecht:
            <br /> Die durch die Seitenbetreiber erstellten Inhalte und Werke
            auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
            <br /> <br />
            Quelle: e-recht24.de
          </h4>
        </div>
        <Mobile_Footer />
      </div>
    </div>
  );
}

export default Impressum;
