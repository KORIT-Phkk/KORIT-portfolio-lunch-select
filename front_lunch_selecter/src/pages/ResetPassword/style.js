import { css } from '@emotion/react'

export const container = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const header = css`
    margin: 300px auto;
    display: flex;
    justify-content: center;
`;
export const logo = css`
    font-size: 80px;
    font-weight: 600;
`;
export const mainContainer =css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 400px;
`;
export const input = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 295px;
`;
export const checkButton = css`
    width: 850px;
    height: 80px;
    margin-left: 295px;
    margin-top: 500px;
    border: 1px solid #dbdbdb;
    background-color: white;
    font-size: 40px;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;

export const inputLabel = css`
    padding-top: 100px;
    padding-bottom: 10px;
    color: rgb(221,164,79);
`;

export const errorMsg = css`
    margin-left: 5px;
    margin-bottom: 20px;
    font-size: 12px;
    color: red;
`;
