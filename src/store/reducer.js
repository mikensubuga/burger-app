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

const reducer = (state = initialState, action) => {};

export default reducer;
