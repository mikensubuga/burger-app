import React from "./node_modules/react";
import classes from "./Backdrop.module.css";
const backdrop = props =>
  props.show ? <div className={classes.Backdrop} /> : null;
export default backdrop;
