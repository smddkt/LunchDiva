// import React from 'react'
// import { useState } from 'react'
import StyledHeader from "../styledcomponents/StyledHeader.js";

const Header = () => {
  return (
    <StyledHeader className="header">
      <div className="header-contents">
        <h2>
          건강하게 맛있는 한 끼,
          <br />
          런치디바
        </h2>
        <p>
          런치디바는 2020년에 개업한 단체 도시락 및 파티 케이터링 전문점입니다.
          <br />
          최고의 재료로 정성껏 준비한 음식이 소중한 시간을 더욱 특별하게 만들어
          드립니다.
        </p>
        <button>메뉴 보기</button>
      </div>
    </StyledHeader>
  );
};

export default Header;
