import * as actionTypes from "../actions/actionTypes";
import { expressionStatement } from "@babel/types";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      };
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      };
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
      };
      break;
    case actionTypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false
      };
      break;
    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };
      break;

    case actionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        loading: false
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
      break;
  }
};

export default reducer;
