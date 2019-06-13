import React from "react";
import * as classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = props => (
  <div>
    {/* <div>Toolbar, SideDrawer, BackDrop</div> */}
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </div>
);

export default layout;
