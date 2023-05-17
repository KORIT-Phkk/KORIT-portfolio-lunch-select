import { css } from '@emotion/react';
import '../../fonts/ansungfont.css';

export const container = css`
    display: flex;
    justify-content: center;
    flex-direction: column;  
`;

export const mapExplain = css`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    margin-top: 30px;
    font-size: 40px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
`;

export const header = css`
    margin: 20% auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const categoryBox = css`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 50px;
`;
export const category = css`
    font-size: 70px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
`;

export const mainContainer =css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 60%;
`;

export const footerContainer =css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 20%;
`;

export const selectMenu = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 100px;

    height: 50%;
    width: 100%;

    font-size: 100px;
`;

export const selectButton = css`
    border: 1px solid #121212;
    border-radius: 7px;
    font-size: 50px;

    margin: 50px;

    background-color: #fafafa;


    &:hover{
        background-color: #dbdbdb;
    }

    &:active{
        background-color: #eee;
    }
`;

export const lunchMenu = css`

    font-size: 100px;
`;