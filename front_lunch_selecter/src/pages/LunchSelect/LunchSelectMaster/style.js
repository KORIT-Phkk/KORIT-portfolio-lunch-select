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
    &:hover{
        width: 25px;
        height: 25px;
    }
    &:active{
        box-shadow: 0px 0px 2px 0px;
        background-color: whitesmoke;
         background-color: #eee;
    }
`;
export const mapExplain = css`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    margin-top: 15px;
    font-size: 15px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
`;
export const mainContainer =css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const imgContainer = css`
    display: flex;
    width: 250px;
    margin: 2px auto;
    justify-content: space-between;
    flex-wrap: wrap;
`;
export const imgCss = css`
    margin: 0 20px;
    width: 40px;
    height: 40px;
`;
export const imgChicken = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`
export const categoryBox = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const categoryName = css`
    margin-top: 10px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
`;
export const category = css`
    margin-top: 5px;
    font-size: 15px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
`;

export const footerContainer =css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const locationAndCetegorySubmitButton = css`
    margin-top: 30px;
    font-size: 10px;
    width: 150px;
    height: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: black;
    color: white;
    &:hover{
            background-color: #dbdbdb;
            color: black;
    }
    &:active{
        background-color: #eee;
    }

`