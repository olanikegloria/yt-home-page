import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import SideBar from "./SideBar";
import { IoMdMic } from "react-icons/io";
import upload from "../assets/upload.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import jack from "../assets/jack.png";
import "./header.css";
import { MdOutlineVideoLibrary, MdOutlineSubscriptions } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import youtubeShort from "../assets/youtube-shorts-logo-15251.svg";
import { useToggle } from "../ToggleContext";

const Header = () => {
  const {toggle, handleToggle} = useToggle();
  return (
    <div className="header-container ">
      <div className="icons-container">
        <div className="harmburger-logo flex">
          <div className="hamburger-container" onClick={handleToggle}>
            <RxHamburgerMenu />
          </div>
          <div className="logo-container">
            <img src={logo} alt="logo img" />
          </div>
        </div>
        {!toggle ? (
          <div className="wrapper">
            <div className="home-container flex justify-center flex-col ">
              <GoHomeFill/>
              <h6 style={{ fontSize: "12px" }}> Home</h6>
            </div>
            <div className="short-container flex justify-center flex-col">
              <img
                src={youtubeShort}
                alt="logo img"
                style={{ width: "16px", color: "white" }}
              />
              <h6 style={{ fontSize: "12px" }}>Shorts</h6>
            </div>
            <div className="subscription-container flex justify-center flex-col ">
              <MdOutlineSubscriptions />
              <h6 style={{ fontSize: "12px" }}>subscriptions</h6>
            </div>
            <div className="library-container flex justify-center flex-col">
              <MdOutlineVideoLibrary />
              <h6 style={{ fontSize: "12px" }}>Library</h6>
            </div>
          </div>
        ) : (
          <SideBar />
        )}
      </div>
      <div className="search-mic ">
        <div className="search-container flex">
          <div className="search-input">
            <input type="text" placeholder="search" />
          </div>
          <div className="search-icon">
            <img src={search} alt="logo img" />
          </div>
        </div>
        <div className="mic-container">
          <IoMdMic className="mic" />
        </div>
      </div>
      <div className="header-icons flex">
        <div className="create-container">
          <img src={upload} alt="logo img" />
        </div>
        <div className="notification-container">
          <IoIosNotificationsOutline />
        </div>
        <div className="avatar-container">
          <img src={jack} alt="logo img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
