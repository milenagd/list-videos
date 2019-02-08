import React from "react";
import PropTypes from "prop-types";
import styles from "./VideoListItem.scss";
import ViewsContainer from "../Views";

const VideoListItem = props => (
  <div className={styles.wrapper}>
    <img
      src={props.image.url}
      width={props.image.width}
      height={props.image.height}
    />
    <div className={styles.wrapperVideoInfo}>
      <h2 className={styles.title}>{props.title}</h2>
      <ViewsContainer id={props.id} />
    </div>
  </div>
);

VideoListItem.propTypes = {
  id: PropTypes.string.isRequired
};

export default VideoListItem;
