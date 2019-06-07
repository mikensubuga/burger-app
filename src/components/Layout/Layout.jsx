import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import * as classes from "./Layout.module.css";
const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
