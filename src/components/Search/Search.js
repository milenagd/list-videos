import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "icons/search.svg";
import styles from "./Search.scss";

const Search = ({ handleSearch }) => {
  const handleChange = async event => {
    const query = event.target.value;
    handleSearch(query);
  };
  return (
    <span className={styles.wrapper}>
      <SearchIcon className={styles.searchIcon} />
      <input
        className={styles.input}
        aria-label="Pesquisar vídeos"
        placeholder="Pesquisa..."
        onBlur={handleChange}
      />
    </span>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func
};

export default Search;
