import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "icons/search.svg";
import styles from "./Search.scss";

const Search = ({ handleChange, handleKeyPress }) => (
  <span className={styles.wrapper}>
    <SearchIcon className={styles.searchIcon} />
    <input
      className={styles.input}
      aria-label="Pesquisar vídeos"
      placeholder="Pesquisa..."
      onBlur={handleChange}
      onKeyPress={handleKeyPress}
    />
  </span>
);

Search.propTypes = {
  handleChange: PropTypes.func,
  handleKeyPress: PropTypes.func
};

export default Search;
