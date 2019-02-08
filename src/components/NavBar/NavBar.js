import React from "react";
import PropTypes from "prop-types";
import Search from "../Search/Search";
import styles from "./NavBar.scss";
import PlayIcon from "icons/play-logo.svg";

const NavBar = ({ handleSearch }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.wrapperLogo}>
        <PlayIcon />
        <span className={styles.logoTitle}>Fictícia Vídeos</span>
      </span>
      <Search handleSearch={handleSearch} />
    </div>
  );
};

NavBar.propTypes = {
  handleSearch: PropTypes.func
};

export default NavBar;
