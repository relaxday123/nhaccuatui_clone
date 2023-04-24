import React from "react";

const Playlist = ({ playlist: { src, title } }) => {
    const imgStyle = {
        width: "205px",
        height: "205px",
        borderRadius: "5px",
    };
    const playlistStyle = {
        padding: "10px"
    }
  return (
    <div style={playlistStyle}>
      <img src={src} alt="Listimage" style={imgStyle}/>
      <br />
      <p>{title}</p>
    </div>
  );
};

export default Playlist;
