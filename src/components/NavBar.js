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
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
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
        <ul style={{ listStyleType: "none" }}>
          <li>
            <a href="#">
              <AiOutlineSearch style={{color: "#00b509"}} />
              <p className="icon-text">Tìm Kiếm</p>
            </a>
          </li>
          <li>
            <a href="#">
              <AiTwotoneHome style={{color: "#287BE5"}} />
              <p className="icon-text">Trang Chủ</p>
            </a>
          </li>
          <li>
            <a href="#">
              <BsCompass style={{color: "#FF9B2D"}} />
              <p className="icon-text">Khám Phá</p>
            </a>
          </li>
          <li>
            <a href="#">
              <BsMusicNoteBeamed style={{color: ""}} />
              <p className="icon-text">Nghe gì hôm nay</p>
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillSignal style={{color: ""}} />
              <p className="icon-text">BXH NCT</p>
            </a>
          </li>
          <li>
            <a href="#">
              <BsFileEarmarkPerson style={{color: "#27B3E2"}} />
              <p className="icon-text">Music 4U</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
