import React from "react";
import classes from "./Order.module.css";
const order = props => (
  <div className={classes.Order}>
    <p>Ingredients: Salad()</p>
    <p>
      Price: <strong>UGX 10</strong>
    </p>
  </div>
);

export default order;
