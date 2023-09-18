import React from "react";
import { BiLike, BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import {
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";
import {GoHistory, GoTrophy } from "react-icons/go";
import {BsFire } from "react-icons/bs";
import { PiMusicNote } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";


export const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const hoursStr = hours.toString().padStart(2, "0");
  const minutesStr = minutes.toString().padStart(2, "0");
  const secondsStr = remainingSeconds.toString().padStart(2, "0");

  return `${hoursStr}:${minutesStr}:${secondsStr}`;
};

export function formatDateDifference(currentDate, targetDate) {
  const currentDateObj = new Date(currentDate);
  const targetDateObj = new Date(targetDate);

  const timeDiffInSeconds = Math.floor((currentDateObj - targetDateObj) / 1000);

  if (timeDiffInSeconds < 60) {
    return `${timeDiffInSeconds} second${
      timeDiffInSeconds === 1 ? "" : "s"
    } ago`;
  } else if (timeDiffInSeconds < 3600) {
    const minutes = Math.floor(timeDiffInSeconds / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (timeDiffInSeconds < 86400) {
    const hours = Math.floor(timeDiffInSeconds / 3600);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (timeDiffInSeconds < 2592000) {
    const days = Math.floor(timeDiffInSeconds / 86400);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (timeDiffInSeconds < 31536000) {
    const months = Math.floor(timeDiffInSeconds / 2592000);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  } else {
    const years = Math.floor(timeDiffInSeconds / 31536000);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  }
}

export const Icons = [
  { icon: <MdOutlineVideoLibrary />, name: "Library" },
  { icon: <GoHistory />, name: "History" },
  { icon: <RiVideoLine />, name: "Your videos" },
  { icon: <MdOutlineWatchLater />, name: "Watch later" },
  { icon: <BiLike />, name: "Liked videos" },
];

export const trendingIcons = [
  { icon: <BsFire />, name: "Trending" },
  { icon: <PiMusicNote />, name: "Music" },
  { icon: <SiYoutubegaming />, name: "Gaming" },
  { icon: <BiNews />, name: "News" },
  { icon: <GoTrophy />, name: "Sports" },
];

