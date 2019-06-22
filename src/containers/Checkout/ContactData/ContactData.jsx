import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      city: ""
    }
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
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
            name="street"
            placeholder="Street"
          />
          <input
            className={classes.InputData}
            type="text"
            name="city"
            placeholder="City"
          />
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
