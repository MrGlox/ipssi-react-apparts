import React, { Component } from "react";
import { Form, List } from "components";

import data from "data.json";

class Appart extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    text: "",
    filtered: data,
  };

  handleChange(event) {
    const inputValue = event.target.value;

    this.setState({
      text: inputValue,
      filtered: data.filter((appart) =>
        appart.title.toLowerCase().includes(inputValue.toLowerCase())
      ),
    });
  }

  render() {
    const { text, filtered } = this.state;

    return (
      <>
        <h2>Filtre</h2>
        <Form text={text} handleChange={this.handleChange}></Form>
        <h1>Appartments</h1>
        <List list={filtered} />
      </>
    );
  }
}

export default Appart;
