import React from "react";
import "./Playlist.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

const Playlist = ({ playlist: { src, title } }) => {
  return (
    <div className="playlist">
      <div
        style={{
          position: "relative",
          display: "inline-block",
          overflow: "hidden",
        }}
      >
        <img className="playlist-img" src={src} alt="Listimage" />
        <div className="overlay"></div>
        <div className="icon">
          <AiFillPlayCircle
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "2.4em",
              backgroundColor: "transparent",
              display: "inline-block",
              transition: "transform 0.3s ease",
            }}
            className="play-ic"
          />
          <FiMoreVertical
            style={{
              position: "absolute",
              top: "0.5em",
              right: "0.2em",
              fontSize: "1.5em",
              backgroundColor: "transparent",
              transition: "transform 0.3s ease",
            }}
            className="more-ic"
          />
        </div>
      </div>
      <a className="playlist-title" href="/">
        {title}
      </a>
    </div>
  );
};

export default Playlist;
