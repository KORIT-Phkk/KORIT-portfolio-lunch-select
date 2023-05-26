import { css } from '@emotion/react';

export const container = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const headerContainer = css`
    display: flex;
    justify-content: center;
`;
export const img = css`
    width: 270px;
    height: 196px;
`;
export const mainContainer = css`
    display: flex;
    justify-content: center;
`;
export const footerContatiner = css`
    display: flex;
    justify-content: center;
`;
export const detailsButton = css`
    width: 100px;
    height: 30px;
    border: none;
    background-color: black;
    color: white;
    border-radius: 5px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 100;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        color: black;
        background-color: #dbdbdb;
    }
    &:active {
        color: black;
        background-color: whitesmoke;
    }
`;
export const returnButton = css`
    width: 100px;
    height: 30px;
    margin-left: 20px;
    border: none;
    background-color: black;
    color: white;
    border-radius: 5px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 100;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        color: black;
        background-color: #dbdbdb;
    }
    &:active {
        color: black;
        background-color: whitesmoke;
    }
`;

