import React, { Component } from "react";
import Aux from "../../hoc/Aux";
const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
