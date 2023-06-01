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
export const resultBox = css`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 100px;
    border: 1px solid white;
    border-radius: 5px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 20px;
`;
export const informment = css`
    display: flex;
    align-items: baseline;
    margin-left: 5px;
    margin-top: 5px;
    font-size: 10px;
`;
export const yourEmail = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;
export const footerContainer =css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const findPassword = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 20px;
    margin: auto;
    margin-top: 40px;
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
export const loginButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 20px;
    margin: auto;
    margin-top: 10px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: white;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;

    cursor: pointer;
    &:hover {
        border-radius: 5px;
        border-bottom: 1px solid #fafafa;
        background-color: #fafafa;
    }
    &:active {
        border-radius: 5px;
        border-bottom: 1px solid #dbdbdb;
        background-color: #dbdbdb;
    }
`;