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
import Footer from "./Footer";

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

      <div>
        <div class="flex items-center space-x-2 text-base">
          <h4 class="font-semibold text-slate-900">Contributors</h4>
          <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
            204
          </span>
        </div>
        <div class="mt-3 flex -space-x-2 overflow-hidden">
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div class="mt-3 text-sm font-medium">
          <a href="#" class="text-blue-500">
            + 198 others
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MainView;
