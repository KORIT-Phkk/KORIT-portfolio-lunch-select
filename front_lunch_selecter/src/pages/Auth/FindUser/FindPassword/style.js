import { css } from '@emotion/react'

export const container = css`
    margin-top: 20px;
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
    padding-top: 10px;
    margin: auto;
    display: flex;
    justify-content: center;
    
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
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
export const emailLabel = css`
    padding-top: 10px;
    padding-bottom: 2px;
    color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
`;
export const codeLabel = css`
    padding-top: 30px;
    padding-bottom: 2px;
    color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
`;
export const blank = css`
    margin-top: 15px;
`;
export const inputLabel = css`
    padding-top: 10px;
    padding-bottom: 2px;
    color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
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
    margin-bottom: 75px;
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
export const errorMsg = css`
    margin-left: 3px;
    margin-top: 1px;
    zoom: 0.8;
    font-size: 10px;
    color: red;
`;