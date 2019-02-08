import React from "react";
import PropTypes from "prop-types";
import IconEye from "icons/eye.svg";
import styles from "./Views.scss";

const Views = ({ viewCount }) => {
  const parseLabelView = () => {
    const viewCountNumber = parseInt(viewCount, 10);
    return viewCountNumber > 1000
      ? `${viewCountNumber % 1000}k views`
      : `${viewCountNumber} views`;
  };
  return (
    <span className={styles.labelView}>
      <IconEye width={20} />
      {parseLabelView()}
    </span>
  );
};

Views.propTypes = {
  viewCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Views;
