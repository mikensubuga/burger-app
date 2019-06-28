import * as actionTypes from "./actions";

const initialState = {
  // ingredients: null,
  ingredients: {
    meat: 0,
    bacon: 0,
    cheese: 1,
    salad: 1
  },
  totalPrice: 4
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        }
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        }
      };

    default:
      return state;
      break;
  }
};

export default reducer;
