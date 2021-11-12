import "./Design/Über-uns.css";
import { Route, Link } from "react-router-dom";

import Footer from "./components/Footer";

import awsExports from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import Amplify from "aws-amplify";

import AboutImg from "./assets/images/aboutus.png";

import { useState, useEffect } from "react";
import Top_Menue_Bar from "./components/navigation/Top_Nav_Bar";

Amplify.configure(awsExports);

function Home() {
  return (
    <div>
      <div id="Desktop_Wrapper">
        <div id="Whole_Desktop_BG"></div>
        <div id="Whole_Desktop_White_BG"></div>
        <div id="Über_uns_content_wrapper">
          <Top_Menue_Bar />
          <div id="Über_uns_top_Section">
            <div id="Whole_Desktop_BG_Form"></div>
            <h4 id="Über_uns_top_Section_h4">Chainvest</h4>
            <h3 id="Über_uns_top_Section_h3">Über Uns</h3>
            <div id="Über_uns_top_Section_under_sec">
              <div id="Über_uns_top_Section_under_sec_left">
                <img
                  src={AboutImg}
                  id="Über_uns_top_Section_under_sec_left_IMG"
                />
                <div id="Über_uns_top_Section_under_sec_left_nAME_Wrapper">
                  <div id="Über_uns_top_Section_under_sec_left_Name_Spalte">
                    <h3 id="Über_uns_top_Section_under_sec_left_name_h3">
                      Tim Zölitz
                    </h3>
                    <h5 id="Über_uns_top_Section_under_sec_left_Name_h5">
                      Co-Fouder
                    </h5>
                  </div>
                  <div id="Über_uns_top_Section_under_sec_left_Name_Spalte">
                    <h3 id="Über_uns_top_Section_under_sec_left_name_h3">
                      Lu-Mieke Ellen
                    </h3>
                    <h5 id="Über_uns_top_Section_under_sec_left_Name_h5">
                      Co-Founder
                    </h5>
                  </div>
                </div>
              </div>

              <div id="Über_uns_top_Section_under_sec_Right">
                <div id="Über_uns_top_Section_under_sec_Right_Wrapper">
                  <h5 id="Über_uns_top_Section_under_sec_h5">
                    Mit unserer Plattform schaffen wir einen Rahmen, in dem
                    Unternehmen und InvestorInnen sich zum Zweck des
                    Kapitalaustauschs treffen und mehr Transparenz und
                    Investitionssicherheit gewährleistet wird. So stärken wir
                    das Vertrauen in eine dezentrale Kapitalaufnahme und fördern
                    das Wachstum von blockchain-basierten Finanzinstrumenten.
                  </h5>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div id="Über_Uns_Antrieb">
            <div id="Über_Uns_Antrieb_Wrapper">
              <h2 id="Über_Uns_Antrieb_H2"> Das treibt uns an </h2>
              <div id="Über_Uns_Antrieb_bottom">
                <div id="Über_Uns_Antrieb_Left">
                  <h4 id="Über_Uns_Antrieb_h4">
                    Die Ausgabe von eigen- bzw. fremdkapitalähnlichen
                    Finanzinstrumenten in Form von Security Token stellt eine
                    neue Art der Unternehmensfinanzierung dar. Security Token
                    ermöglichen eine kostengünstige und schnelle Ausgabe von
                    tradierten Finanzinstrumenten und KMU am Kapitalmarkt
                    teilzunehmen.
                  </h4>
                </div>
                <div id="Über_Uns_Antrieb_Right">
                  <h4 id="Über_Uns_Antrieb_h4">
                    Die Ausgabe von eigen- bzw. fremdkapitalähnlichen
                    Finanzinstrumenten in Form von Security Token stellt eine
                    neue Art der Unternehmensfinanzierung dar. Security Token
                    ermöglichen eine kostengünstige und schnelle Ausgabe von
                    tradierten Finanzinstrumenten und KMU am Kapitalmarkt
                    teilzunehmen.
                  </h4>
                </div>
              </div>
            </div>
          </div>{" "}
          <div id="Über_Uns_Partner">
            <div id="Über_Uns_Partner_Inner">Logos</div>
          </div>
          <Footer />
        </div>{" "}
      </div>

      <div id="Mobile_Wrapper"></div>
    </div>
  );
}

export default Home;
