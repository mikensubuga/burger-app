import React from "react";
import * as classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => (
  <div>
    {/* <div>Toolbar, SideDrawer, BackDrop</div> */}
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </div>
);

export default layout;
