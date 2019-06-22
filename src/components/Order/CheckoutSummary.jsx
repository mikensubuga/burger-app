import React from "react";
import Burger from "../Burger/Burger";
import Button from "../../components/UI/Button/Button";
import classes from "./CheckoutSummary.module.css";
const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div
        style={{
          width: "100%",
          //   height: "300px",
          margin: "auto"
        }}
      >
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.cancel}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.continue}>
        Continue
      </Button>
    </div>
  );
};
export default checkoutSummary;
