import React from "react";
import PropTypes from "prop-types";
import styles from "./VideoList.scss";
import ModalIframe from "../ModalIframe";
import VideoListItem from "../VideoListItem";

const VideoList = ({ videos }) => (
  <ul className={styles.list}>
    {videos.map((video, index) => (
      <li key={`list-video-${index}`} className={styles.listItem}>
        <ModalIframe
          id={video.id}
          title={video.title}
          description={video.description}
          trigger={
            <VideoListItem
              title={video.title}
              image={video.thumbnails}
              id={video.id}
            />
          }
        />
      </li>
    ))}
  </ul>
);

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;
