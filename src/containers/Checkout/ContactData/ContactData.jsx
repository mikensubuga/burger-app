import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-order";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { withRouter } from "react-router-dom";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      city: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    console.log("Ingredients ", this.props.ingredients);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Nakiranda Elizabeth",
        email: "nmike@cis.mak.ac.ug",
        address: {
          country: "Uganda",
          city: "Kampala"
        }
      }
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        console.log(response);
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
        console.log(error);
      });
  };
  render() {
    let form = (
      <form>
        <input
          className={classes.InputData}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={classes.InputData}
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className={classes.InputData}
          type="text"
          name="country"
          placeholder="Country"
        />
        <input
          className={classes.InputData}
          type="text"
          name="city"
          placeholder="City"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default withRouter(ContactData);
