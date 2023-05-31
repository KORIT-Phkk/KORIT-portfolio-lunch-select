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
    display: flex;
    justify-content: center;
`;
export const notice = css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        margin: auto;
        margin-top: 40px;
        width: 250px;
    
        font-family: 'Ansungtangmyun-Bold', sans-serif;
        font-weight: 600px;
        font-size: 12px;
    `;
export const footerContainer =css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const loginButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 20px;
    margin: auto;
    margin-top: 100px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: black;
    color: white;
    border-radius: 5px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;

    cursor: pointer;
    &:hover {
        color: black;
        border-radius: 5px;
        border-bottom: 1px solid #fafafa;
        background-color: #fafafa;
    }
    &:active {
        color: black;
        border-radius: 5px;
        border-bottom: 1px solid #dbdbdb;
        background-color: #dbdbdb;
    }
`;