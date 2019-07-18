import React from "react";
import classes from "./Order.module.css";
import Skeleton from "react-loading-skeleton";
const order = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      amount: props.ingredients[ingredientName],
      name: ingredientName
    });
  }
  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name}({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>UGX {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
