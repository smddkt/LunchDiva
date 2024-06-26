import StyledNavBar from "../styledcomponents/StyledNavBar.js";
import React, { useState } from "react";
import { assets } from "../assets/assets.js";

const NavBar = () => {
  const [menu, setMenu] = useState("런치디바 소개");
  return (
    <StyledNavBar>
      <img src={assets.logo1} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("런치디바 소개")}
          className={menu === "런치디바 소개" ? "active" : ""}
        >
          런치디바 소개
        </li>
        <li
          onClick={() => setMenu("메뉴")}
          className={menu === "메뉴" ? "active" : ""}
        >
          메뉴
        </li>
        <li
          onClick={() => setMenu("갤러리")}
          className={menu === "갤러리" ? "active" : ""}
        >
          갤러리
        </li>
        <li
          onClick={() => setMenu("예약/문의")}
          className={menu === "예약/문의" ? "active" : ""}
        >
          예약/문의
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="search-icon" />
        <div className="navbar-search-icon">
          <img src={assets.heart_icon} alt="" className="heart-icon" />
          <div className="dot"></div>
        </div>
        <button>로그인/회원가입</button>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
