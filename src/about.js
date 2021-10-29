import "./about.css";

import Top_menue from "./components/navigation/top_menue";

import aboutus from "./assets/images/AboutUsfilter.png";

import LI from "./assets/images/LinkedIn.png";
import Mail from "./assets/images/Mail.png";

import Lu_Img from "./assets/images/AboutEllen.png";
import Zoel_Img from "./assets/images/AboutZoelitz.png";
import abouteclipse from "./assets/images/AboutForm.png";
import logo from "./assets/images/logo.png";

import Footer from "./components/Footer";

import Mobile_menue from "./mobile_components/moble_menue";
import Mobile_Footer from "./mobile_components/Mobile_Footer";

import mobile_about from "./assets/images/mobile_about.png";
import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

function About() {
  useEffect(() => {
    document.title = "Über";
  }, []);
  return (
    <div>
      <div id="Desktop_Wrapper">
        <Top_menue />

        <div id="about_top_section">
          <div id="about_top_left">
            <h4 id="about_top_CIAC">Connecting ideas and capital</h4>

            <h2 id="about_top_WeAre">WE ARE CHAINVEST</h2>

            <h5 id="about_top_erklärung">
              Mit unserer Plattform schaffen wir einen Rahmen, in dem
              Unternehmen und InvestorInnen sich zum Zweck des Kapitalaustauschs
              treffen und mehr Transparenz und Investitionssicherheit
              gewährleistet wird. So stärken wir das Vertrauen in eine
              dezentrale Kapitalaufnahme und fördern das Wachstum von
              blockchain-basierten Finanzinstrumenten.
            </h5>
          </div>

          <div id="about_top_right">
            <img src={aboutus} id="about_top_img" />
            <div id="about_top_filter_1"></div>
            <div id="about_top_filter_2"></div>
            <div id="about_top_filter_3"></div>
          </div>
        </div>

        <div id="about_kontakt_section">
          <img src={abouteclipse} id="abouteclipse" />

          <div id="Lu_Section">
            <img src={Lu_Img} id="about_Person_Img" />

            <div id="Text_Wrapper">
              <h3 id="About_Name_h3">Lu-Mieke Ellen</h3>

              <h4 id="About_Titel_h5">Co-Founder</h4>

              <h5 id="About_Erläuterung">
                Mit unserer Plattform schaffen wir einen Rahmen, in dem
                Unternehmen und InvestorInnen sich zum Zweck des
                Kapitalaustauschs treffen und mehr Transparenz und
                Investitionssicherheit gewährleistet wird. So stärken wir das
                Vertrauen in eine dezentrale Kapitalaufnahme und fördern das
                Wachstum von blockchain-basierten Finanzinstrumenten.
              </h5>
            </div>

            <div id="About_Kontakt_wrapper">
              <a href="https://www.linkedin.com/in/lu-mieke-ellen-490b03212/">
                <div id="about_kontakt_row">
                  <img src={LI} id="about_Li_img" />
                  <h4 id="about_kontakt_text">Lu-Mieke Ellen</h4>
                </div>
              </a>
              <div id="about_kontakt_row">
                <img src={Mail} id="about_Mail_img" />
                <h4 id="about_kontakt_text">ellen@chainvestcapital-de</h4>
              </div>
            </div>
          </div>
          <div id="Tim_Section">
            <div id="Text_Wrapper_T">
              <h3 id="About_Name_h3">Tim Zölitz</h3>

              <h4 id="About_Titel_h5">Co-Founder</h4>

              <h5 id="About_Erläuterung">
                Tim beschäftigt sich mehreren Jahren intensiv mit der Blockchain
                Technologie und deren großem Potential unter anderem in der
                Finanzwelt. Neben den ökonomischen Aspekten treibt ihn die
                technische Umsetzung von tokenisierten Lösungen an. <br /> Neben
                seiner Tätigkeit bei Chainvest engagiert er sich als Gründungs-
                und Vorstandsmitglied ind er Blockchain Association
                Schleswig-Holstein e.V. ehrenamtlich, um das Thema Blockchain
                weiter voranzutreiben.
              </h5>
            </div>
            <img src={Zoel_Img} id="about_Person_Img_T" />
            <div id="About_Kontakt_wrapper">
              <a href="https://www.linkedin.com/in/tim-z%C3%B6litz-60622119a/">
                <div id="about_kontakt_row">
                  <img src={LI} id="about_Li_img" />
                  <h4 id="about_kontakt_text">Tim Zölitz</h4>
                </div>
              </a>
              <div id="about_kontakt_row">
                <img src={Mail} id="about_Mail_img" />
                <h4 id="about_kontakt_text">zoelitz@chainvestcapital.de</h4>
              </div>
            </div>
          </div>
        </div>

        <div id="about_info_section">
          <div id="about_info_left">
            <img src={logo} id="about_info_left_logo" />
          </div>

          <div id="about_info_right">
            <h2 id="about_right_h2">Kapitalaufnahme neu gedacht.</h2>

            <h5 id="about_right_h5">
              Digitale Investitionsprojekte verändern die Kapitalmärkte und
              ermöglichen AnlegerInnen unmittelbar am wirtschaftlichen Erfolg
              von dynamischen Startups bis hin zu etablierten Unternehmen
              beteiligt zu werden. Die Ausgabe von eigen- bzw.
              fremdkapitalähnlichen Finanzinstrumenten in Form von Security
              Token stellt eine neue Art der Unternehmensfinanzierung dar.
              Security Token ermöglichen eine kostengünstige und schnelle
              Ausgabe von tradierten Finanzinstrumenten und KMU am Kapitalmarkt
              teilzunehmen. Bei BLOCKCAP sind wir von der Innovationskraft
              blockchain-basierter Finanzinstrumente überzeugt und glauben, dass
              Security Token in Zukunft ein wesentliches Segment der
              Kapitalmärkte wird. Mit BLOCKCAP wollen wir den
              Informationsaustausch zwischen den Emittenten und den
              InvestorInnen fördern, um so mehr Akzeptanz zu schaffen.
            </h5>
          </div>
        </div>
        <Footer />
      </div>

      <div id="Mobile_Wrapper">
        <Mobile_menue />

        <div id="mobile_about_top">
          <div id="mobile_about_top_bg">
            <img src={mobile_about} id="mobile_about_top_bg_IMG" />
          </div>

          <div id="mobile_about_top_Content">
            <h3 id="mobile_about_top_h3">Connecting ideas and capital</h3>
            <div id="mobile_about_top_h_row">
              <h2 id="mobile_about_top_h2">We are</h2>
              <h2 id="mobile_about_top_h2_blue">Chainvest</h2>
            </div>

            <h5 id="mobile_about_top_h5">
              Mit unserer Plattform schaffen wir einen Rahmen, in dem
              Unternehmen und InvestorInnen sich zum Zweck des Kapitalaustauschs
              treffen und mehr Transparenz und Investitionssicherheit
              gewährleistet wird. So stärken wir das Vertrauen in eine
              dezentrale Kapitalaufnahme und fördern das Wachstum von
              blockchain-basierten Finanzinstrumenten.
            </h5>
          </div>
        </div>

        <div id="mobile_about_we">
          <div id="mobile_about_we_row1">
            <div id="mobile_about_we_img_wrapper">
              <img src={Lu_Img} id="mobile_about_we_img" />
            </div>

            <div id="mobile_about_we_content_spalte">
              <h2 id="mobile_about_we_h2">Lu-Mieke Ellen</h2>

              <h3 id="mobile_about_we_3">Co-Founder</h3>

              <h4 id="mobile_about_we_h4">
                Mit unserer Plattform schaffen wir einen Rahmen, in dem
                Unternehmen und InvestorInnen sich zum Zweck des
                Kapitalaustauschs treffen und mehr Transparenz und
                Investitionssicherheit gewährleistet wird
              </h4>
            </div>

            <div id="mobile_about_we_kontakt"></div>
          </div>

          <div id="mobile_about_we_row2">
            <div id="mobile_about_we_content_spalte">
              <h2 id="mobile_about_we_h2">Tim Zölitz</h2>

              <h3 id="mobile_about_we_3">Co-Founder</h3>

              <h4 id="mobile_about_we_h4">
                Mit unserer Plattform schaffen wir einen Rahmen, in dem
                Unternehmen und InvestorInnen sich zum Zweck des
                Kapitalaustauschs treffen und mehr Transparenz und
                Investitionssicherheit gewährleistet wird
              </h4>
            </div>
            <div id="mobile_about_we_img_wrapper">
              <img src={Zoel_Img} id="mobile_about_we_img" />
            </div>
            <div id="mobile_about_we_kontakt"></div>
          </div>
        </div>

        <Mobile_Footer />
      </div>
    </div>
  );
}

export default About;
