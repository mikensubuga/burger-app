import React, { Component } from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  //cud be sfc not cc
  componentWillUpdate() {
    console.log("OrderSummary Component will update");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}> {igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
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
          Total Price:<strong>{this.props.totalPrice}</strong>
        </p>
        <Button btnType="Danger" clicked={this.props.cancel}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.continue}>
          CONTINUE
        </Button>
      </div>
    );
  }
}
export default OrderSummary;
