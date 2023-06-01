import { css } from "@emotion/react";

export const container = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const headerContainer = css`
    margin: auto;
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;
export const imgCss = css`
    width: 272px;
    height: 153px;
`;
export const comment = css`
    margin: auto;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 15px;
`;
export const mainContainer =css`
    margin: auto;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const question = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: auto;
    margin-bottom: 40px;
    width: 250px;

    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600px;
    font-size: 12px;
`;
export const point = css`
    color: red;
`;
export const passwordBox = css`
    display: flex;
    justify-content: center;
    margin: auto;
    width: 250px;
    height: 20px;

    border: none;
    border-bottom: 1px solid black;
`;
export const errMsg = css`
    margin-left: 3px;
    margin-top: 4px;
    font-size: 10px;
    zoom: 0.7;
    color: red;
`;
export const footerContainer =css`
    margin: auto;
    margin-top: 50px;
    display: flex;
    justify-content: center;
`;
export const buttonCss1 = css`
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
    color: white;
    background-color: black;
    margin-right: 5px;
    border-radius: 5px;
    border: none;

    cursor: pointer;
    &:hover {
        color: black;
        border-radius: 5px;
        background-color: #fafafa;
    }
    &:active {
        color: black;
        border-radius: 5px;
        background-color: #dbdbdb;
    }
`;
export const buttonCss2 = css`
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
    color: white;
    background-color: black;
    border-radius: 5px;
    border: none;

    cursor: pointer;
    &:hover {
        color: black;
        border-radius: 5px;
        background-color: #fafafa;
    }
    &:active {
        color: black;
        border-radius: 5px;
        background-color: #dbdbdb;
    }
`;