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
