import { css } from '@emotion/react';

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;
export const headerContainer = css`
    padding-bottom: 30px;
`;
export const todaymenu = css`
    align-items: center;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 15px;
`;
export const icon = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`;
export const buttonStyle = css`
    width: 50px;
    height: 20px;
    border: none;
    background-color: black;
    color: white;
    border-radius: 5px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 12px;
    
    cursor:pointer;
    &:hover {
        color: black;
        background-color: #dbdbdb;
    }
    &:active {
        color: black;
        background-color: whitesmoke;
    }
`;