import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

function Cover() {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Robyson De Paula</h1>
      <p>Developer | Software Engineer</p>
    </div>
  )
}

export default Cover