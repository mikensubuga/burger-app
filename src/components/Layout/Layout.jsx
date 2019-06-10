import React from "react";
import * as classes from "./Layout.module.css";
const layout = props => (
  <div>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={classes.Content}>{props.children}</main>
  </div>
);

export default layout;
