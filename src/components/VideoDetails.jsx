import React from "react";
import VideoPlayer from "./VideoPlayer";
import jack from "../assets/jack.png";
import "./video.css";
import { formatDateDifference } from "../Utilityfunctions";

function VideoDetails({videoItem}) {
  return (
    <div className="video-details-container">
      <VideoPlayer videoItem = {videoItem}/>
      <div className="video-details">
        <div className="channel-avatar">
          <img src={jack} alt="logo img" />
        </div>
        <div className="video-information">
          <div className="video-title">
            <h1> {videoItem.snippet.title}</h1>
          </div>
          <div className="channel-name">
            <h3>{videoItem.snippet.channelTitle}</h3>
          </div>
          <div className="no-of-views">
            <h3>495k Views </h3>
            <div className="dot"></div>
            <div className="how-long">
              {formatDateDifference(Date.now(), videoItem.snippet.publishedAt)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
