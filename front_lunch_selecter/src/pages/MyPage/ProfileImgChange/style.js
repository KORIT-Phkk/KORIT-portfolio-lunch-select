import { css } from '@emotion/react'

export const container = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const backButton = css`
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
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
`;
export const comment = css`
    display: flex;
    align-items: center;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
`;
export const mainContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: none;
    cursor: pointer;
`;
export const fileInput = css`
    display: none;
`
export const img = css`
    border: 3px solid #dbdbdb;
    border-radius: 5px;
    width: 280px;
    height: 350px;
`
export const footerContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
export const cancelButton = css`
    width: 40px;
    height: 20px;
    border: none;
    border-radius: 5px;
    background-color: black;
    margin-right: 20px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-size: 12px;
    font-weight: 660;
    color: white;

    cursor: pointer;
    &:hover {
        background-color: #fafafa;
        color: black;
    }
    &:active {
        background-color: #dbdbdb;
        color: black;
    }
`;
export const saveButton = css`
    width: 40px;
    height: 20px;
    border: none;
    border-radius: 5px;
    background-color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-size: 12px;
    font-weight: 660;
    color: white;

    cursor: pointer;
    &:hover {
        background-color: #fafafa;
        color: black;
    }
    &:active {
        background-color: #dbdbdb;
        color: black;
    }
`;

