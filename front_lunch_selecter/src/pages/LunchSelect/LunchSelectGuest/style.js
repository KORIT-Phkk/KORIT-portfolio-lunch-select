import { css } from '@emotion/react';
import '../../../fonts/ansungfont.css';

export const container = css`
    display: flex;
    justify-content: center;
    flex-direction: column;  
`;
export const backButton = css`
    position: absolute;     
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
export const headerContainer = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const inform = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 30px;
    font-size: 18px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
`;
export const warning = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 5px;
    font-size: 10px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    color: red;
`;
export const imgCss = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto 0;
    width: 280px;
    height: 190px;
`;
export const mainContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
`;
export const categoryBox = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const categoryName = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
`;
export const footerContainer =css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;
export const selectMenu = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    height: 50%;
    width: 100%;
    font-size: 100px;
`;
export const readySubmitButton = css`
    font-size: 10px;
    width: 150px;
    height: 20px;
    border: none;
    border-radius: 5px;
    background-color: black;
    color: white;

    cursor: pointer;
    &:hover{
        color: black;
        background-color: #fafafa;
    }
    &:active{
        color: black;
        background-color: #dbdbdb;
    }
`