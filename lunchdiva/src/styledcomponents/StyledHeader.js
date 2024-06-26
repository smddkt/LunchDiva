import styled from 'styled-components';

export const StyledHeader = styled.div`
    height: 34vw;
    background: url('/header_img.png') no-repeat;
    background-size: cover;
    position: relative;
    font-family: "IBM Plex Sans KR", sans-serif;
    font-weight: 300;
    font-style: normal;

    .header-contents{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1.5vw;
        max-width: 40%;
        bottom: 10%;
        left: 6vw;
        animation: fadeIn 2.3s;
        
    }

    h2{
        color: white;
        font-weight: 500;
        font-size: max(4vw, 22px);
        text-shadow: 3px 4px 5px #3e3426;
        margin-bottom:3%;
        font-family: 'SUITE-Regular';
        line-height: 130%;
        font-weight: 400;
        font-style: normal;
    }

    p{
        color: #ffffff;
        line-height: 2.1;
        font-size: 1.15vw;
    }

    button{
        border: none;
        color: #747474;
        font-weight: 700;
        padding: 1vw 2.3vw;
        background-color: white;
        font-size: max(1vw, 13px);
        border-radius: 50px;
    }
    
`;

export default StyledHeader;