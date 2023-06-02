import { css } from '@emotion/react'
/* .style */

export const hello = css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 100px;
`;
export const container = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const headerContainer =css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const setting =css`
    display: flex;
    justify-content: flex-end;
`;
export const settingButton =css`
    width: 25px;
    height: 25px;
    display: flex;
    background-color: white;
    cursor: pointer;
`;
export const userInfo = (isOpen) => css`
    display: ${isOpen ? "flex" : "none"};
`;
export const mainContainer =css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;
export const imgCss =css`
    width: 272px;
    height: 153px;
`;
export const footerContainer =css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;
export const lunchButton =css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 20px;
    font-size: 15px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    text-decoration: none;
    color: black;
    border: none;
    border-radius: 5px;
    background-color: white;

    cursor: pointer;
    &:hover {
        transition: .3s ease-in;
        box-shadow: inset 125px 0 0 black, inset -125px 0 0 black;
        font-weight: 600;
        color: white;
    }
    &:active {
        color: #dbdbdb;
    }
`;