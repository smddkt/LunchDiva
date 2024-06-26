import ExploreMenu from "../components/ExploreMenu/ExploreMenu.jsx";
import Header from "../components/header.jsx";
import StyledHome from "../styledcomponents/StyledHome.js";
import React, { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("전체");

  return (
    <StyledHome>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </StyledHome>
  );
};

export default Home;
