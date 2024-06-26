/*eslint-disable*/
import styled from 'styled-components'

const StyledNavBar =styled.div `
    width: 90%;
    margin: auto;
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "IBM Plex Sans KR", sans-serif;
    font-weight: 300;
    font-style: normal;
    li{
        cursor: pointer;
    }
    
    .logo{
        width: 140px;
    }

    .navbar-menu{
        display: flex;
        list-style: none;
        gap: 50px;
        font-size: 18px;
    }

    .navbar-right{
        display: flex;
        align-items:center;
        gap: 40px;
    }

    .search-icon {
        width: 30px;
        height: 30px;
    }

    .heart-icon {
        margin-top: 5px;
        width: 30px;
        height: 30px;
    }
    
    .navbar-search-icon {
        position: relative;
    }

    .navbar-search-icon .dot{
        position:absolute;
        min-width: 10px;
        min-height: 10px;
        background-color: #fcae58;
        border-radius: 5px;
        top: -5px;
        right: -9px;
    }

    button {
        background-color: transparent;
        font-size: 16px;
        border: 1px solid #fcae58;
        padding: 10px 30px;
        border-radius: 50px;
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover {
        background-color: rgb(252, 174, 88, 0.2);
    }

    .active {
        padding-bottom: 2px;
        border-bottom: 2px solid #fcae58;
    }

`

export default StyledNavBar