import React, { useState } from "react";
import "./video.css";
import { formatTime } from "../Utilityfunctions";
import VideoCard from "./VideoCard";

const VideoPlayer = ({videoItem}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(true);
  const [videoInterval, setVideoInterval] = useState("0:00:00");
  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleVolume = () => {
    setVolume((prevVolume) => !prevVolume);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };
  
 const [progressPercentage, setProgressPercentage] = useState(0);

const handleProgress = (state) => {
  const playedPercentage = (state.played * 100).toFixed(2);
  const playedSeconds = state.playedSeconds;
  const formattedTime = formatTime(playedSeconds);
  setVideoInterval(formattedTime);
  setProgressPercentage(playedPercentage);
};

const handleClick = () => {
  const subtitleElement = document.querySelector('.subtitle-icon');
  subtitleElement.classList.toggle('red-border');
};
  
  return (
    <VideoCard
      isPlaying = {isPlaying}
      volume = {volume}
      progressPercentage={progressPercentage} 
      videoInterval={videoInterval}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
      handleVolume={handleVolume}
      handleProgress={handleProgress}
      handleClick={handleClick}
      videoItem={videoItem}
    />
  );
};

export default VideoPlayer;
