import React, { Component } from "react";

class FetchData extends Component {
  constructor() {
    super();

    this.fetchData = this.fetchData.bind(this);
  }

  state = { error: false, loading: true, data: "Loading..." };

  async fetchData() {
    try {
      const response = await fetch(
        "https://baconipsum.com/api/?type=meat-and-filler"
      );
      const data = await response.json();
      console.log(data);

      this.setState({ loading: false, data });
    } catch (err) {
      this.setState({ error: true });
      throw err;
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.error) {
      return <div>ERROR</div>;
    }

    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return <div>{this.state.data}</div>;
  }
}

export default FetchData;
