import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import styles from "./ModalIframe.scss";

const ModalIframe = props => {
  const YOUTUBE_EMBED_URL = "www.youtube.com/embed";
  return (
    <Modal trigger={props.trigger}>
      <iframe
        className={styles.iframe}
        src={`//${YOUTUBE_EMBED_URL}/${props.id}`}
      />
      <h2 className={styles.title}>{props.title}</h2>
      <p>{props.description}</p>
    </Modal>
  );
};

ModalIframe.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  trigger: PropTypes.node.isRequired
};

export default ModalIframe;
