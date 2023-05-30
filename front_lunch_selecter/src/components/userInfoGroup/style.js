import { css } from '@emotion/react'

export const userInfoGroup = (isOpen) => css`
    position: absolute;
    top: 35px;
    right: 12px;
    display: ${isOpen ? "flex" : "none"};
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    width: 150px;
    height: 100px;
    background-color: white;
    overflow-y: auto;
`;
export const headerContainer = css`
    display: flex;
    flex-direction: column;
    height: 35px;
    border-bottom: 1px solid #dbdbdb;
    background-color: black;
`;

export const userName = css`
    display: flex;
    justify-content: center;
    margin-top: 5px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-size: 10px;
    font-weight: 100;
    color: white;
`;
export const userEmail =css`
    display: flex;
    justify-content: center;
    margin-top: 3px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-size: 10px;
    font-weight: 100;
    color: white;
`;
export const mainContainer = css`
    display: flex;
    justify-content: center;
`;
export const myInfoUpdate = css`
    width: 100px;
    height: 20px;
    margin-top: 7px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 100;
    font-size: 8px;
    border-radius: 5px;
    background-color: black;
    color: white;
    border: none;

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
export const footerContainer =css`
    display: flex;
    justify-content: center;
`;
export const logout = css`
    margin-top: 7px;
    margin-bottom: 7px;
    width: 100px;
    height: 20px;
    border: none;
    border-radius: 5px;
    background-color: black;
    color: white;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-size: 10px;
    font-weight: 100;

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