import React, { Component } from "react";
import API from "../../data/API";
import { Button, Form } from "semantic-ui-react";

export default class NewOrderForm extends Component {
  state = {
    delivery_date: "",
    no_contact: "",
  };

  componentDidMount() {
    this.setState({
      user_id: this.props.user.id,
    });
  }

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    API.postToOrders({ order: this.state })
      .then((order) =>
        API.postToOrderMedicines({
          order_medicine: {
            order_id: order.id,
            medicine_id: this.props.medicine.id,
          },
        })
      )
      .then((order) => alert(JSON.stringify(order)));
    // then reduce stock by 1 with patch request
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Medicine:</label>
          <input
            type="text"
            value={this.props.medicine.name}
            readOnly={true}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>User:</label>
          <input
            type="text"
            value={this.props.user.first_name}
            readOnly={true}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>No contact?</label>
          <input type="checkbox" name="no_contact" readOnly={true}></input>
        </Form.Field>
        <Form.Field>
          <input
            name="delivery_date"
            type="date"
            onChange={this.handleChange}
          ></input>
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}