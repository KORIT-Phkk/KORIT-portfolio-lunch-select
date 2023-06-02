import { css } from '@emotion/react'


export const container = css`
    margin-top: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const headerContainer = css`
    margin: auto;
    display: flex;
    justify-content: center;
`;

export const mainContainer =css`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 17px;
    /* border-bottom: 1px solid #dbdbdb; */
    text-decoration: underline;
    text-decoration-color: #dbdbdb;
    text-underline-offset : 10px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
`;

export const footerContainer =css`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`;

export const loginButton = css`
    width: 200px;
    height: 30px;
    margin-top: 150px;
    margin-bottom: 300px;
    border: none;
    background-color: black;
    border-radius: 6px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 17px;
    color: white;

    cursor: pointer;
    &:hover {
        background-color: white;
        color: black;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;