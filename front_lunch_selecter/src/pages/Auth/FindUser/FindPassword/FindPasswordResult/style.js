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
    margin-top: 30px;
    margin-bottom: 300px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: white;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;

    cursor: pointer;
    &:hover {
        border-radius: 20px;
        border-bottom: 1px solid #fafafa;
        background-color: #fafafa;
    }
    &:active {
        border-radius: 20px;
        border-bottom: 1px solid #dbdbdb;
        background-color: #dbdbdb;
    }
`;