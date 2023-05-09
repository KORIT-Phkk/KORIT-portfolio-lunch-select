import { css } from '@emotion/react';

export const container = css`
    display: flex;
    justify-content: center;
    flex-direction: column;  
`;

export const header = css`
    margin: 20% auto;
    display: flex;
    justify-content: center;
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