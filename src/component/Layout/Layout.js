import React from "react";
import Aux from "../../HOC/Auxiliary";
import clasess from "./Layout.module.css";
import Header from "../Header/Header";
const layout = (props) => (
  <Aux>
    <Header></Header>
    <main className={clasess.Content}>{props.children}</main>
  </Aux>
);

export default layout;
