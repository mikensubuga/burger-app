import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0
    }
  };
  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </div>
    );
  }
}

export default BurgerBuilder;
