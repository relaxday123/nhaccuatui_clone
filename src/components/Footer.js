import React from "react";
import AS from "../media/img/download_with/app_store.png";
import GP from "../media/img/download_with/gg_play.png";
import AG from "../media/img/download_with/app_gallery.png";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div style={{ padding: "5em 2em 0" }}>
        <hr
          style={{
            width: "100%",
            opacity: ".1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "3.5em",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              color: "rgba(244,246,248,0.5)",
              fontWeight: "400",
            }}
          >
            <a href="/">Giới thiệu</a> {" | "}
            <a href="/">SP-DV</a> {" | "}
            <a href="/">Hỗ trợ</a> {" | "}
            <a href="/">Thoả thuận sử dụng</a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <AiFillFacebook style={{ padding: "0 0.2em", fontSize: "2em" }} />
            <AiOutlineInstagram
              style={{ padding: "0 0.2em", fontSize: "2em" }}
            />
            <img
              src={AS}
              alt="app store"
              style={{ padding: "0 0.3em", width: "6em" }}
            ></img>
            <img
              src={GP}
              alt="google play"
              style={{ padding: "0 0.3em", width: "6em" }}
            ></img>
            <img
              src={AG}
              alt="app gallery"
              style={{ padding: "0 0.3em", width: "6em" }}
            ></img>
          </div>
        </div>

        <hr
          style={{
            margin: "0.5em 1.5 em 0",
            opacity: ".1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1em",
            fontSize: "13px",
            height: "5em",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              src="https://stc-id.nixcdn.com/v12/images/logo-nctc.svg"
              alt="logo"
              style={{ marginRight: "1.5em" }}
            ></img>
            <div>
              <p style={{ fontWeight: "700", color: "rgba(244,246,248,0.88)" }}>
                CÔNG TY CỔ PHẦN N C T
              </p>
              <li
                style={{
                  paddingTop: "0.5em",
                  color: "rgba(244,246,248,0.5)",
                  fontWeight: "400",
                }}
              >
                Chủ sở hữu website:{" "}
                <span
                  style={{ fontWeight: "700", color: "rgba(244,246,248,0.5)" }}
                >
                  Ông Nhan Thế Luân
                </span>
              </li>
            </div>
          </div>
          <div>
            <img
              src="https://stc-id.nixcdn.com/v12/images/Cong_Thuong.svg"
              alt="bo cong thuong"
              style={{ marginRight: "1em" }}
            ></img>
            <img
              src="https://stc-id.nixcdn.com/v12/images/DMCA.svg"
              alt="dmca"
            ></img>
          </div>
        </div>

        <div style={{ fontSize: "13px", height: "4.3em", fontWeight: "400" }}>
          <p style={{ paddingTop: "0.5em", color: "rgba(244,246,248,0.5)" }}>
            Giấy phép MXH số 499/GP-BTTTT do Bộ Thông Tin và Truyền thông cấp
            ngày 28/09/2015.
          </p>
          <p style={{ paddingTop: "0.5em", color: "rgba(244,246,248,0.5)" }}>
            Giấy Chứng nhận Đăng ký Kinh doanh số 0305535715 do Sở kế hoạch và
            Đầu tư Tp.Hồ Chí Minh cấp ngày 01/03/2008.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "1.2em",
          padding: "0 2.5em",
          height: "4.3em",
          display: "flex",
          alignItems: "center",
          fontSize: "13px",
          color: "rgba(244,246,248,0.5)",
          backgroundColor: "rgba(244,246,248,0.02)",
          fontWeight: "400",
        }}
      >
        <a href="/" style={{ backgroundColor: "inherit" }}>
          <HiLocationMarker
            style={{
              paddingRight: "0.8em",
              backgroundColor: "inherit",
              color: "rgba(244,246,248,0.5)",
            }}
          />
          Tòa nhà The 678 Tower, 67 Hoàng Văn Thái, P.Tân Phú, Q.7, TP.HCM
        </a>
        <a href="/" style={{ backgroundColor: "inherit", marginLeft: "1em" }}>
          <BsFillTelephoneFill
            style={{
              marginRight: "0.8em",
              backgroundColor: "inherit",
              color: "rgba(244,246,248,0.5)",
            }}
          />
          (028) 3868 7979
        </a>
      </div>
    </>
  );
};

export default Footer;
