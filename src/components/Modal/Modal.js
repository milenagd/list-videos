import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.scss";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleModalOpen = () => {
    this.setState({ open: true });
  };

  handleModalClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div tabIndex="0">
        {this.state.open && (
          <div className={styles.modalOverlay} onClick={this.handleModalClose}>
            <div className={styles.modal}>
              <button className={styles.closeIcon} aria-label="fechar modal">
                x
              </button>
              <div className={styles.modalContent}>{this.props.children}</div>
            </div>
          </div>
        )}
        <div className={styles.trigger} onClick={this.handleModalOpen}>
          {this.props.trigger}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  trigger: PropTypes.node
};

export default Modal;
