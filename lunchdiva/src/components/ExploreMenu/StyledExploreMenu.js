import styled from "styled-components";

export const StyledExploreMenu = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    font-family: "IBM Plex Sans KR", sans-serif;
    font-weight: 300;
    font-style: normal;
    margin: 3% 8%;

    h1{
        color: #262626;
        font-weight: 50;
        margin-bottom:0px;
    }

    .explore-menu-text{
        max-width: 60%;
        color: #808080;
        margin-top:5px;

    }

    .explore-menu-list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        text-align: center;
        margin: 20px 0px;
        overflow-x: scroll;
    }

    .explore-menu-list::-webkit-scrollbar{
        display: none;
    }

    .explore-menu-list-item img{
        width: 13.5vw;
        min-width: 80px;
        cursor: pointer;
        border-radius: 50%;
        transition: 0.2s;
        border: 0.1 solid transparent; /* 투명 보더 추가 */
        box-sizing: border-box;
    }

    .explore-menu-name{
        font-size: max(1.4vw, 20px);
        margin-top:10px;
        cursor: pointer;
    }

    hr{
        margin: 10px 0px;
        height: 2px;
        background-color: #e2e2e2;
        border: none;
    }
    

    .explore-menu-list-item .active{
        border: 4px solid #fcae58;
        padding: 2px;
        box-sizing: border-box;
    }

`;

export default StyledExploreMenu;
