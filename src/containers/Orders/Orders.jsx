import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../../components/Order/Order";
import axios from "../../axios-order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";
class Orders extends Component {
  state = {
    // orders: [],
    // loading: true
  };
  componentDidMount() {
    // axios
    //   .get("/orders.json")
    //   .then(res => {
    //     //console.log("Response ", res.data);
    //     const fetchedOrders = [];
    //     for (let key in res.data) {
    //       fetchedOrders.push({
    //         ...res.data[key],
    //         id: key
    //       });
    //     }
    //     console.log(fetchedOrders);
    //     this.setState({ loading: false, orders: fetchedOrders });
    //   })
    //   .catch(err => {
    //     this.setState({ loading: false });
    //   });
    this.props.onFetchOrders();
  }
  render() {
    let orders = (
      <div>
        {this.props.orders.map(order => (
          <Order
            key={order.id}
            price={+order.price}
            ingredients={order.ingredients}
          />
        ))}
      </div>
    );
    if (this.props.loading) {
      orders = <Spinner />;
    }
    return <div>{orders}</div>;
  }
}
const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
