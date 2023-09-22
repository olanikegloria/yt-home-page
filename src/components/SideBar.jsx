import React from "react";
import "./sideBar.css";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import youtubeShort from "../assets/youtube-shorts-logo-15251.svg";
import tom from "../assets/tom.png";
import { Icons, trendingIcons } from "../Utilityfunctions";

const SideBar = () => {
  
  return (
    <div className="side-bar">
      <div className="side-bar-icon flex  ">
        <div className="icon-container">
          <GoHomeFill />
        </div>
        <div className="icon-name">
          <h3>Home</h3>
        </div>
      </div>
      <div className="side-bar-icon flex ">
        <div className="icon-container flex justify-center flex-col">
          <img src={youtubeShort} alt="logo img" style={{ width: "20px" }} />
        </div>
        <div className="icon-name">
          <h3>Shorts</h3>
        </div>
      </div>
      <div className="side-bar-icon flex ">
        <div className="icon-container">
          <MdOutlineSubscriptions />
        </div>
        <div className="icon-name">
          <h3>Subscriptions</h3>
        </div>
      </div>
      {Icons.map((design, index) => (
        <div className="side-bar-icon flex" key={index}>
          <div className="icon-container">{design.icon}</div>
          <div className="icon-name">
            <h3>{design.name}</h3>
          </div>
        </div> 
      ))}
      <h2 className="subscriptions">Subscriptions</h2>
      {Icons.map((index) => (
        <div className="side-bar-icon flex" key={index}>
          <div className="icon-container ">
            <img src={tom} alt="image" className="tom "/>
          </div>
          <div className="icon-name">
            <h3>olanike</h3>
          </div>
        </div> 
      ))}
      <h2 className="subscriptions">Explore</h2>
      {trendingIcons.map((design, index) => (
        <div className="side-bar-icon flex" key={index}>
          <div className="icon-container">{design.icon}</div>
          <div className="icon-name">
            <h3>{design.name}</h3>
          </div>
        </div> 
      ))}
    </div>
  );
};

export default SideBar;
