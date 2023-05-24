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
export const imgCss = css`
    width: 270px;
    height: 196px;
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
export const footerContainer =css`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const checkButton = css`
    width: 250px;
    height: 20px;
    margin-top: 40px;
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

export const nameLabel = css`
    padding-top: 10px;
    padding-bottom: 2px;
    color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
`;
export const PhoneLabel = css`
    padding-top: 40px;
    padding-bottom: 2px;
    color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
`;
export const login = css`
    display: flex;
    justify-content: center;
    margin-top: 25px ;
`;
