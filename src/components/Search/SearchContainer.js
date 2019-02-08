import React, { Component } from "react";
import Search from "./Search";

export default class SearchContainer extends Component {
  handleChange = async event => {
    const query = event.target.value;
    this.props.handleSearch(query);
  };
  handleKeyPress = async event => {
    const query = event.target.value;
    if (event.key == "Enter") {
      this.props.handleSearch(query);
    }
  };
  render() {
    return (
      <Search
        handleChange={this.handleChange}
        handleKeyPress={this.handleKeyPress}
      />
    );
  }
}
