import "./Test.css";
import { Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Button from "./components/Button";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import Amplify from "aws-amplify";
import { useState, useEffect } from "react";

function Test(props) {
  useEffect(() => {
    document.title = "Alle Projekte";
  }, []);

  const [ProjekteArray, setProjekteArray] = useState([]);
  const fetchProjekte = async () => {
    try {
      const ProjekteData = await API.graphql(graphqlOperation(listProjekts));

      const ProjekteList = ProjekteData.data.listProjekts.items;
      setProjekteArray(ProjekteList);
      console.log(ProjekteArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjekte();
  }, []);

  return (
    <div>
      <div id="Text_Wrapper">
        <div className="title">
          <h1>
            Portfolio
            <span> Filter</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Test;
