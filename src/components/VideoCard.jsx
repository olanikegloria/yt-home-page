import React, {useRef} from 'react'
import ReactPlayer from "react-player";
import { IoMdVolumeOff, IoMdVolumeHigh } from "react-icons/io";
import { FaClosedCaptioning } from "react-icons/fa6";
import './VideoCard.css';

const VideoCard = ({isPlaying, volume, videoInterval,
   handleMouseEnter, handleMouseLeave, handleVolume, handleProgress, progressPercentage, videoItem, handleClick}) => {
    const playerRef = useRef(null);
  return (
    <div className="video-card" >
      <div
      className="video-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      <div className="volume-subtitle">
        <div className="video-volume" onClick={handleVolume}>
          {volume === true ?<IoMdVolumeOff />  : <IoMdVolumeHigh />}
        </div>
        <div className="subtitle-icon" onClick={handleClick}>
          <FaClosedCaptioning />
        </div>
      </div>
      {isPlaying ? (
        <ReactPlayer
          ref={playerRef}
          className="react-player"
          url={`https://www.youtube.com/watch?v=${videoItem.id.videoId}`}
          playing
          onProgress={handleProgress}
          muted={volume}
          autoPlay
          width="100%"
          height="100%"
        />
      ) : (
        <div className="thumbnail-container">
          <img className="thumbnail" src={videoItem.snippet.thumbnails.high.url} alt="Video Thumbnail" />
        </div>
      )}
      <div className="video-interval" style={{[isPlaying ? 'left' : 'right']: '10px'}}>{videoInterval}</div>
      <div className="progress-bar" style={{ width: `${100 - progressPercentage}%` }}>
        <div className="progress" />
      </div>
    </div>
    </div>
  )
}

export default VideoCard
