import { css } from '@emotion/react'


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
export const logoContainer = css`
   margin: auto;
`;
export const logo =css`
    width: 270px;
    height: 196px;
    margin-bottom: 50px;
`;
export const mainContainer =css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const lunchSelect =css`
    display: flex;
    justify-content: center;
`;
export const lunchButton =css`
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 20px;
    font-size: 15px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    text-decoration: none;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: black;

    cursor: pointer;
    &:hover {
        background-color: #fafafa;
        color: black;
    }
    &:active {
        background-color: #dbdbdb;
        color: black;
    }
`;
export const joinUrlInput = css`
    margin-bottom: 15px;
    width: 250px;
    height: 20px;
    font-size: 10px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid black;
`;
export const footerContainer =css`
    display: flex;
    justify-content: center;
`;
export const userInfo = (isOpen) => css`
    display: ${isOpen ? "flex" : "none"};
`;
export const hello = css`
    display: flex;
    align-items: flex-end;
`;