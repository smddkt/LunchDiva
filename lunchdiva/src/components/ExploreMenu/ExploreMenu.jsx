import StyledExploreMenu from "./StyledExploreMenu";
import React from "react";
import { menu_category } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <StyledExploreMenu className="explore-menu" id="explore-menu">
      <h1>대표 메뉴 둘러보기</h1>
      <p className="explore-menu-text">
        건강하고 맛있는 한 끼를 위해 오늘도 정성을 다해 조리하고 있습니다.
        <br />
        메뉴 구성은 행사의 성격과 예산에 맞추어 변경 가능합니다.
      </p>
      <div className="explore-menu-list">
        {menu_category.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "전체" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p className="explore-menu-name">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </StyledExploreMenu>
  );
};

export default ExploreMenu;
