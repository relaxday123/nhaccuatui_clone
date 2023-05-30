import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Playlist from "./Playlist";
import "./Album.css";

const Album = ({title, lists}) => {
  return (
    <>
      <div className="lazyload-wrapper">
        <div className="playlist-subject">
          <p>{title}</p>
          <div style={{ display: "inline" }}>
            <a href="/" className="left-arrow">
              <AiOutlineArrowLeft />
            </a>
            <a href="/" className="right-arrow">
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
        <div className="list">
          {lists.map((list) => {
            return <Playlist playlist={list} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Album;
