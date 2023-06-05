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
    text-align: center;
    margin-top: 20px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 20px;
`;
export const comment = css`
    display: flex;
    align-items: center;
`;
export const imgBox = css`
    display: flex;
    justify-content: center;
    border: 3px solid #dbdbdb;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    text-align: center;
    align-items: center;
    margin: 30px auto;
    overflow: hidden;

    cursor: pointer;
    &:hover {
        border: 3px solid black;
    }
`;
export const fileInput = css`
    display: none;
`
export const img = css`
    width: 100%;
`
export const mainContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const infrom = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    width: 250px;
    height: 20px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 12px;
`;
export const footerContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const passwordChange = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    width: 250px;
    height: 20px;
    border: none;
    background-color: white;
    border-bottom: 1px solid #dbdbdb;
    border-radius: 5px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 12px;

    cursor: pointer;
    &:hover {
        transition: .3s ease-in;
        box-shadow: inset 250px 0 0 black;
        font-weight: 600;
        color: white;
    }
`;
export const userDelete = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 25px;
    margin-top: 100px;
    font-size: 15px;
    text-decoration: none;
    color: red;
    background-color: white;
    border: none;
    border-top: 1px solid #dbdbdb;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 100;
    font-size: 12px;

    cursor: pointer;
`;