import { css } from '@emotion/react'

export const container = css`
    margin-top: 150px;
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
    padding-top: 50px;
    margin: auto;
    display: flex;
    justify-content: center;
    
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 50px;
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
    width: 850px;
    height: 80px;
    margin-top: 190px;
    margin-bottom: 300px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: black;
    color: white;
    border-radius: 20px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;
    cursor: pointer;
    &:hover {
        color: black;
        border-radius: 20px;
        border-bottom: 1px solid #fafafa;
        background-color: #fafafa;
    }
    &:active {
        color: black;
        border-radius: 20px;
        border-bottom: 1px solid #dbdbdb;
        background-color: #dbdbdb;
    }
`;

export const nameLabel = css`
    padding-top: 50px;
    padding-bottom: 10px;
    color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;
`;
export const PhoneLabel = css`
    padding-top: 140px;
    padding-bottom: 10px;
    color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;
`;
export const login = css`
    display: flex;
    justify-content: center;
    margin-top: 100px ;
`;
