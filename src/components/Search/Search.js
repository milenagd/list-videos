import React, { Component } from "react";
import SearchIcon from "icons/search.svg";

export default class Search extends Component {
  render() {
    return (
      <span>
        <SearchIcon />
        <input aria-label="Pesquisar vídeos" placeholder="Pesquisa..." />
      </span>
    );
  }
}
