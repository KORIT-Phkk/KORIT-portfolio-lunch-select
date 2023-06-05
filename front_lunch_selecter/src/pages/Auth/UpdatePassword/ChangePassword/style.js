import { css } from '@emotion/react'

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
    flex-direction: column;
    align-items: center;
`;
export const imgCss = css`
    width: 272px;
    height: 153px;
`;
export const backButton = css`
    width: 20px;
    height: 20px;
    border: none;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    &:active{
        box-shadow: 0px 0px 2px 0px;
        background-color: whitesmoke;
        background-color: #eee;
    }
`;
export const input = css`
    margin-bottom: 15px;
`;
export const inputLabel = css`
    margin-top: 20px;
    color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
`;
export const okButtonClick = css`
    margin-top: 10px;
    font-size: 15px;
    border: 1px solid black;
    background-color: black;
    color: white;
    width: 250px;
    height: 25px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
        color: black;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;
export const errorMessages = css`
    margin-left: 3px;
    margin-top: 2px;
    zoom: 0.7;
    font-size: 10px;
    color: red;
`;
export const mainContainer = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
export const okButton = css`
    margin-top: 90px;
    width: 250px;
    height: 20px;
    background-color: black;
    border-radius: 5px;
    border: none;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
    color: white;
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