import React from "react";
import PropTypes from "prop-types";
import SearchContainer from "../Search";
import styles from "./NavBar.scss";
import PlayIcon from "icons/play-logo.svg";

const NavBar = ({ handleSearch }) => {
  const handleClick = () => {
    handleSearch();
  };
  return (
    <div className={styles.wrapper}>
      <button className={styles.wrapperLogo} onClick={handleClick}>
        <PlayIcon />
        <span className={styles.logoTitle}>Fictícia Vídeos</span>
      </button>
      <SearchContainer handleSearch={handleSearch} />
    </div>
  );
};

NavBar.propTypes = {
  handleSearch: PropTypes.func
};

export default NavBar;
