import { css } from '@emotion/react'

export const container = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const headerContainer = css`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
    font-size: 15px;
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
    width: 250px;
    margin-top: 2px;
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
    margin-top: 100px;
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



