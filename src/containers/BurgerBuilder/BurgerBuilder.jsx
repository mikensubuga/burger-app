import { connect } from "react-redux";
import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
// const INGREDIENT_PRICES = {
//   salad: 0.5,
//   cheese: 0.4,
//   meat: 1.3,
//   bacon: 0.7
// };
class BurgerBuilder extends Component {
  state = {
    // ingredients: null,
    // ingredients: {
    //   meat: 0,
    //   bacon: 0,
    //   cheese: 1,
    //   salad: 1
    // },
    // totalPrice: 4,
    // purchasable: false,
    purchasing: false
    // loading: false,
    // error: false
  };
  componentDidMount() {
    // axios
    //   .get("https://my-burger-ef5e6.firebaseio.com/ingredients.json")
    //   .then(response => {
    //     this.setState({ ingredients: response.data });
    //   })
    //   .catch(error => {
    //     this.setState({ error: true });
    //   });
    this.props.onInitIngredients();
  }
  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = this.props.error ? <p>Ingredients not loaded</p> : <Spinner />;
    if (this.props.ings) {
      burger = (
        <div>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.px}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
            isAuth={this.props.isAuthenticated}
          />
        </div>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          continue={this.purchaseContinuehander}
          cancel={this.purchaseCancelhandler}
          totalPrice={this.props.px}
        />
      );
    }

    // if (this.state.loading) {
    //   orderSummary = <Spinner />;
    // }
    return (
      <div>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelhandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </div>
    );
  }

  purchaseCancelhandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinuehander = () => {
    //alert("You Continue");

    /*  const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
*/
    this.props.onInitPurchase();
    this.props.history.push({
      pathname: "/checkout"
      // search: "?" + queryString
    });
  };

  updatePurchaseState = ingredients => {
    // const ingredients = {
    //   ...this.state.ingredients
    // };
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
    // this.setState({ purchasable: sum > 0 });
  };
  /*
  addIngredientHandler = type => {
    const oldCount = this.props.ings[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAdditon = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdditon;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.props.ings[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  };
  */

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      this.props.onSetAuthRedirectPath("/checkout");
      this.props.history.push("/auth");
    }
  };
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    px: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: igName => dispatch(actions.addIngredient(igName)),
    onIngredientRemoved: igName => dispatch(actions.removeIngredient(igName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
