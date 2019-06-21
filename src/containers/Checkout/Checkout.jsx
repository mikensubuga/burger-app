import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary";
class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 3
    }
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          continue={this.continue}
          cancel={this.cancel}
        />
      </div>
    );
  }
  continue = () => {
    alert("you continue");
  };
  cancel = () => {
    alert("you cancel");
  };
}

export default Checkout;
