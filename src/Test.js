import "./Test.css";
import { Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Button from "./components/Button";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import Amplify from "aws-amplify";
import { useState, useEffect } from "react";
import Schiffahrt from "./components/Kategorien/Schiffahrt";
import logo from "./assets/images/Logo_Trans.png";
import arrow from "./assets/images/Arrow_white.png";

function Test(props) {
  const [filterausklappenx, setfilterausklappenx] = useState(true);

  //Filter System

  const proj = [
    ["Vogemann", "Schifffahrt"],
    ["VogemWWWann", "Schifffahrt"],
    ["Bitbond", "Blockchain"],
    ["Tomorrrow", "Fiannce"],
  ];

  const [shownData, setshownData] = useState(proj);
  const [AktFilter, setAktFilter] = useState("All");

  function ButtonPressed(Cat, Array) {
    setAktFilter(Cat);
    constructFilterData(Array, Cat);
  }
  const [SchiffArray, setSchiffArray] = useState([]);
  const [FinanceArray, setFinanceArray] = useState([]);
  const [BlockchainArray, setBlockchainArray] = useState([]);

  function BuildSchiffArr(FullProj) {
    setSchiffArray([]);
    FullProj.map((proej) => {
      if (proej[1] === "Schifffahrt") {
        SchiffArray.push(proej);
        setshownData(SchiffArray);
      }
    });
  }
  function BuildFinanceAr(FullProj) {
    setFinanceArray([]);
    FullProj.map((proej) => {
      if (proej[1] === "Fiannce") {
        FinanceArray.push(proej);
        setshownData(FinanceArray);
      }
    });
  }
  function BuildBcA(FullProj) {
    setBlockchainArray([]);
    console.log("Start BuildSchiffArr");
    FullProj.map((proej) => {
      if (proej[1] === "Blockchain") {
        BlockchainArray.push(proej);
        setshownData(BlockchainArray);
      }
    });
  }

  function constructFilterData(FullProj, Filter) {
    FullProj.map((proej) => {
      if (proej[1] === Filter) {
        console.log("true");
        setshownData(proej);
      }
      if (Filter === "All") {
        console.log("All");
        setshownData(proj);
      }
    });
  }
  function NoProj() {
    return <div>No ProjectsFound</div>;
  }

  const [stateb, setstateb] = useState("unclicked");
  var help1 = 0;
  //unclicked rot
  const [help2, sethelp2] = useState(help1);

  function ButtomCliekd(neww) {
    neww = neww + 1;
    console.log(neww);
    if (neww % 2 == 0) {
      setstateb("unclicked");
      sethelp2(neww);
    } else {
      console.log("ccc");
      setstateb("clicked");
      sethelp2(neww);
    }
  }
  const [ProjekteArray, setProjekteArray] = useState([]);
  const fetchProjekte = async () => {
    try {
      const ProjekteData = await API.graphql(graphqlOperation(listProjekts));

      const ProjekteList = ProjekteData.data.listProjekts.items;
      setProjekteArray(ProjekteList);
      console.log(ProjekteList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjekte();
  }, []);

  return (
    <div>
      <div id="Top_Navigation_Bar">
        <img src={logo} id="Top_Menue_Bar_logo_img" />

        <div id="Top_Navigation_Bar_RightWrapper">
          <div id="Top_Navigation_Bar_Spalte1">
            {" "}
            <h3 id="Top_Menue_Bar_h3">Digitale Wertpapiere</h3>
          </div>
          <div id="Top_Navigation_Bar_Spalte2">
            {" "}
            <h3 id="Top_Menue_Bar_h3">Für unternehmen</h3>
          </div>
          <div id="Top_Navigation_Bar_Spalte3">
            {" "}
            <h3 id="Top_Menue_Bar_h3">Über Uns</h3>
          </div>
          <Link to="/alleProjekte">
            {" "}
            <div id="Top_Menue_Bar_Button_yellow">
              <h3 id="Top_Menue_Bar_h3_white">Alle Projekte</h3>
              <img src={arrow} id="Top_Menue_Bar_Button_yellow_IMG" />
            </div>
          </Link>
        </div>
      </div>
      <div id="Text_Wrapper">
        <div className="title">
          <h1>
            Portfolio
            <span> Filter</span>
          </h1>
        </div>
        <div id="show" onClick={() => setfilterausklappenx(true)}>
          show
        </div>

        <div id={stateb} onClick={() => ButtomCliekd(help2)}></div>
        <div id={stateb} onClick={() => ButtomCliekd(help2)}></div>

        <div id="showMaybe">Maybe</div>
      </div>

      <div id="FilterTest"></div>
      <div id="SDFA">
        <ul id="home_projekte_li_test">
          {ProjekteArray.map((Projekt) => (
            <li id="home_projekte_test">
              <div id="SDA">SYDA</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Test;
