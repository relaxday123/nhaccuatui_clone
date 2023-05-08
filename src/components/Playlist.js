import React from "react";
import "./Playlist.css";

const Playlist = ({ playlist: { src, title } }) => {
  return (
    <div className="playlist" >
      <img className="playlist-img" src={src} alt="Listimage" />
      <a className="playlist-title" href="/" >{title}</a>
    </div>
  );
};

export default Playlist;
