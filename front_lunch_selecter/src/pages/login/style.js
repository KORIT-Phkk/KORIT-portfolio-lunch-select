import { css } from '@emotion/react'

export const container = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`;
export const header = css`
    margin: auto;
    display: flex;
    justify-content: center;
`;
export const logo = css`
    /* font-size: 80px;
    font-weight: 600; */
`;
export const mainContainer =css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const input = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 270px;
`;
export const inpoutLabel = css`
    padding-top: 100px;
    padding-bottom: 10px;
    color: black;
`;
export const footerContainer =css`
   display: flex;
   justify-content: center;
   flex-direction: column;
`;
export const register = css`
    display: flex;
    justify-content: flex-end;
    margin-right: 270px;
`;
export const logButton = css`
    width: 850px;
    height: 80px;
    margin-left: 270px;
    margin-top: 500px;
    border: 1px solid BLACK;
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

