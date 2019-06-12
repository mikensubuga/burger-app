import React from "react";
import Button from "../../UI/Button/Button";
const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}> {igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to check out</p>
      <p>
        Total Price:<strong>{props.totalPrice}</strong>
      </p>
      <Button btnType="Danger" clicked={props.cancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.continue}>
        CONTINUE
      </Button>
    </div>
  );
};
export default orderSummary;
