import React from "react";
import Slider from "./Slider";
import pic1 from "../media/img/TodaySongs/1.jpg";
import pic2 from "../media/img/TodaySongs/2.jpg";
import pic3 from "../media/img/TodaySongs/3.jpg";
import pic4 from "../media/img/TodaySongs/4.jpg";
import pic5 from "../media/img/TodaySongs/5.jpg";
import piclist1 from "../media/img/Square/1.jpg";
import piclist2 from "../media/img/Square/2.jpg";
import piclist3 from "../media/img/Square/3.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Playlist from "./Playlist";
import "./MainView.css";

const MainView = () => {
  const slides = [
    { url: pic1, title: "beach" },
    { url: pic2, title: "boat" },
    { url: pic3, title: "forest" },
    { url: pic4, title: "city" },
    { url: pic5, title: "italy" },
  ];
  const lists = [
    { src: piclist1, title: "Top 20 Nhạc Trẻ" },
    { src: piclist2, title: "Xứng Đáng Hit" },
    { src: piclist3, title: "Đặc Sắc Nhất" },
  ];

  const containerStyles = {
    width: "1320px",
    height: "528px",
    margin: "0 auto",
    padding: "24px 0px",
  };

  return (
    <>
      <div className="slider" style={containerStyles}>
        <Slider slides={slides} />
      </div>

      <div className="lazyload-wrapper">
        <div
          className="playlist-title"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 10px",
          }}
        >
          <p
            style={{
              display: "inline",
              height: "30px",
              lineHeight: "30px",
              fontSize: "22px",
              fontWeight: "700",
              color: "rgba(244,246,248,0.88)",
            }}
          >
            Đang Thịnh Hành
          </p>
          <div style={{ display: "inline" }}>
            <a href="#">
              <AiOutlineArrowLeft />
            </a>
            <a href="#">
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
        <div className="list" style={{ display: "flex" }}>
          {lists.map((list) => {
            return <Playlist playlist={list} />;
          })}
        </div>
      </div>

      <div className="lazyload-wrapper">
        <div
          className="playlist-title"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 10px",
          }}
        >
          <p style={{ display: "inline" }}>Đang Thịnh Hành</p>
          <div style={{ display: "inline" }}>
            <a href="#">
              <AiOutlineArrowLeft />
            </a>
            <a href="#">
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
        <div className="list" style={{ display: "flex" }}>
          {lists.map((list) => {
            return <Playlist playlist={list} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MainView;
