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
export const comment = css`
    padding-top: 50px;
    margin: auto;
    display: flex;
    justify-content: center;
    
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 50px;
`;
export const mainContainer =css`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const resultBox = css`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 850px;
    height: 400px;
    border: 1px solid black;
    border-radius: 20px;
`;
export const input = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 295px;
    margin-bottom: 70px;
`;
export const footerContainer =css`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const loginButton = css`
    width: 850px;
    height: 80px;
    margin-top: 190px;
    margin-bottom: 300px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: black;
    color: white;
    border-radius: 20px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;
    cursor: pointer;
    &:hover {
        color: black;
        border-radius: 20px;
        border-bottom: 1px solid #fafafa;
        background-color: #fafafa;
    }
    &:active {
        color: black;
        border-radius: 20px;
        border-bottom: 1px solid #dbdbdb;
        background-color: #dbdbdb;
    }
`;
