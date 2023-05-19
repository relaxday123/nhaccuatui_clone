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
import "./MainView.css";
import Album from "./Album";

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
    width: "83em",
    height: "33.2em",
    margin: "0 auto",
    padding: "24px 0px",
  };

  return (
    <>
      <div className="slider" style={containerStyles}>
        <Slider slides={slides} />
      </div>

      <Album title="Đang Thịnh Hành" lists={lists} />
      <Album title="Giai Điệu Gây Nghiện" lists={lists} />
    </>
  );
};

export default MainView;
