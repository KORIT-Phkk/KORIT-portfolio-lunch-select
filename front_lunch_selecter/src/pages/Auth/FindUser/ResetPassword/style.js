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
    flex-direction: column;
`;
export const input = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const inputLabel = css`
    margin-top: 20px;
    color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
`;
export const errorMsg = css`
    margin-left: 3px;
    margin-top: 2px;
    zoom: 0.8;
    font-size: 10px;
    color: red;
`;
export const footerContainer =css`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const checkButton = css`
    width: 250px;
    height: 20px;
    margin-top: 50px;
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