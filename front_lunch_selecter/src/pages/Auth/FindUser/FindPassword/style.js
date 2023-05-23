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
export const emailLabel = css`
    padding-top: 50px;
    padding-bottom: 10px;
    color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;
`;
export const codeLabel = css`
    padding-top: 140px;
    padding-bottom: 10px;
    color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;
`;
export const blank = css`
    margin-top: 70px;
`;
export const inputLabel = css`
    padding-top: 50px;
    padding-bottom: 10px;
    color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;
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

export const disabledCheckButton = css`
    width: 850px;
    height: 80px;
    margin-top: 190px;
    margin-bottom: 300px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: fafafa;
    color: black;
    border-radius: 20px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;
`

export const errorMsg = css`
    margin-left: 5px;
  margin-top: 3px;
  margin-bottom: 10px;
  font-size: 25px;
  color: red;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
