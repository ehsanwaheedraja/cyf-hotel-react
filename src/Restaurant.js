import React, { Component } from "react";
import RestaurantButton from "./Components/RestaurantButton";
import Order from "./Components/Order";

class Restaurant extends Component {
  state = {
    pizzas: 0,
    orders: 0
  };
  addOrder = () => {
    this.setState(prevState => {
      return { orders: prevState.orders + 1 };
    });
  };
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Order pizzas={this.state.pizzas} />

          <li>
            orders:{this.state.orders}
            <RestaurantButton addOrder={this.addOrder} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Restaurant;
