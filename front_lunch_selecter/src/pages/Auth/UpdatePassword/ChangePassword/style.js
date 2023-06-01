import { css } from '@emotion/react'

export const container = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
export const headerContainer = css`
    margin-top: 100px;
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
    margin-top: 2px;
    font-size: 10px;
    color: red;
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



