import React from "react";

import '../css/toolbar.css';

import fb from "../images/Facebook.png"
import insta from "../images/instagram.png"
import soundcloud from "../images/SoundCloud.png"
import youtube from "../images/YouTube.png"

const toolbar = props => (
  <header className = "Toolbar">
    <nav className = "Tool_Nav">
      <div className="social-list">
        <a>
          <img src={fb} style={{height:"36px"}}/>
        </a>
        <a href="https://www.instagram.com/DjAumir/">
          <img src={insta} style={{height:"36px"}}/>
        </a>
        <a>
          <img src={youtube} style={{height:"36px", width:"40px"}}/>
        </a>
        <a href="https://soundcloud.com/DjAumir">
          <img src={soundcloud} style={{height:"36px"}}/>
        </a>
      </div>
      <div className="Spacer"> </div>
      <div className = "List_Items" syle={{background:"blue"}}>
        <ul>
          <li> <a href="#home-header">Home</a> </li>
          <li> <a href="#bio-header">Bio</a> </li>
          <li> <a href="#contact-header">Contact</a> </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
