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
export const mapExplain = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 18px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
`;
export const mainContainer =css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
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
export const locationAndCetegorySubmitButton = css`
    width: 250px;
    height: 20px;
    border: none;
    border-radius: 5px;
    background-color: black;
    color: white;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-size: 12px;

    cursor: pointer;
    &:hover{
        color: black;
        background-color: #fafafa;
    }
    &:active{
        color: black;
        background-color: #dbdbdb;
    }
`;
export const errorMessage = css`
    font-size: 10px;
    /* zoom: 0.8; */
    margin-top: 5px;
    color: red;
`;