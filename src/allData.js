import "./Test.css";
import { Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Button from "./components/Button";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import Amplify from "aws-amplify";
import { useState, useEffect } from "react";

function Returnprojekte() {
  const xxx = ["HH", "JJ"];
  return <div>{xxx}</div>;
}

export default Returnprojekte;
