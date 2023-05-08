import React from "react";
import logo from "../media/img/logo.5a1f4537.png";
import {
  AiOutlineSetting,
  AiOutlineSearch,
  AiTwotoneHome,
  AiFillSignal,
} from "react-icons/ai";
import {
  BsCompass,
  BsMusicNoteBeamed,
  BsFileEarmarkPerson,
} from "react-icons/bs";
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {

  const [discoverDropdown, setDiscoverDropdown] = useState(false);

  const [todayDropdown, setTodayDropdown] = useState(false);

  const onClickDiscoverDropdown = (e) => {
    e.preventDefault();
    setDiscoverDropdown(discoverDropdown === true ? false : true);
  }

  const onClickTodayDropdown = (e) => {
    e.preventDefault();
    setTodayDropdown(todayDropdown === true ? false : true);
  }

  return (
    <div style={{ position: "sticky", top: "0"}}>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Logo" className="logo-img"></img>
        </a>
        <a href="#">Nâng cấp</a>
      </div>

      <div className="sign">
        <div className="signin-signout">
          <a href="#">Đăng nhập</a>
          {" | "}
          <a href="#">Đăng ký</a>
        </div>
        <a className="setting" href="#">
          <AiOutlineSetting />
        </a>
      </div>

      <div className="navbar">
        <ul className="menu" style={{ listStyleType: "none" }}>
          <li>
            <a href="#">
              <AiOutlineSearch style={{ color: "#00b509 !important" }} />
              <p className="icon-text">Tìm Kiếm</p>
            </a>
          </li>
          <li>
            <a href="#">
              <AiTwotoneHome style={{ color: "#287BE5 !important" }} />
              <p className="icon-text">Trang Chủ</p>
            </a>
          </li>
          <li>
            <a href="/" onClick={onClickDiscoverDropdown}>
              <BsCompass style={{ color: "#FF9B2D !important" }} />
              <p className="icon-text">Khám Phá</p>
              {discoverDropdown ?
                <SlArrowUp className="arrow" /> :
                <SlArrowDown className="arrow" />
              }
            </a>

            {discoverDropdown ?
              <ul
                className="sub-discover"
                style={{
                  transition: "all .5s ease",
                  height: "150px",
                  opacity: "0.7",
                  transform: "translateY(0)",
                  display: "contents",
                  zIndex: "1",
                }}
              >
                <li><a href="#">Bài Hát</a></li>
                <li><a href="#">Playlist</a></li>
                <li><a href="#">Video</a></li>
                <li><a href="#">Nghệ Sỹ</a></li>
              </ul>
              : <ul
                className="sub-discover"
                style={{
                  display: "none"
                }}>
                <li><a href="#">Bài Hát</a></li>
                <li><a href="#">Playlist</a></li>
                <li><a href="#">Video</a></li>
                <li><a href="#">Nghệ Sỹ</a></li>
              </ul>
            }
          </li>
          <li>
            <a href="/" onClick={onClickTodayDropdown}>
              <BsMusicNoteBeamed style={{ color: "" }} />
              <p className="icon-text">Nghe gì hôm nay</p>
              {todayDropdown ?
                <SlArrowUp className="arrow" /> :
                <SlArrowDown className="arrow" />
              }
            </a>

            {todayDropdown ?
              <ul
                className="sub-discover"
                style={{
                  transition: "all .5s ease",
                  height: "150px",
                  opacity: "0.7",
                  transform: "translateY(0)",
                  display: "contents",
                  zIndex: "1",
                }}
              >
                <li><a href="#">Chủ Đề</a></li>
                <li><a href="#">Tuyển Tập</a></li>
                <li><a href="#">Top 100</a></li>
              </ul>
              : <ul
                className="sub-discover"
                style={{
                  display: "none"
                }}>
                <li><a href="#">Chủ Đề</a></li>
                <li><a href="#">Tuyển Tập</a></li>
                <li><a href="#">Top 100</a></li>
              </ul>
            }
          </li>
          <li>
            <a href="#">
              <AiFillSignal style={{ color: "" }} />
              <p className="icon-text">BXH NCT</p>
            </a>
          </li>
          <li>
            <a href="#">
              <BsFileEarmarkPerson style={{ color: "#27B3E2 !important" }} />
              <p className="icon-text">Music 4U</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
