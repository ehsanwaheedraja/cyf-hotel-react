import React from "react";

const Order = props => {
  return (
    <li>
      Pizzas: {props.pizzas} <button className="btn btn-primary">Add</button>
    </li>
  );
};

export default Order;
