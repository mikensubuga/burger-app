import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Orders from "./Orders";
import Order from "../../components/Order/Order";

configure({ adapter: new Adapter() });

describe("<Orders/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Orders />);
  });

  it("should render  <Order/> elements if auth", () => {
    wrapper.setProps({
      key: "some-key",
      price: "some-price",
      ingredients: "ingredients"
    });
    expect(wrapper.find(Order));
  });
});
