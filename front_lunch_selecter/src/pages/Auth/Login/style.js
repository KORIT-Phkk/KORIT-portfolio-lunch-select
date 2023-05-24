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
export const mainContainer =css`
    padding-top: 1px;
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
export const inputLabel = css`
    padding-top: 25px;
    padding-bottom: 3px;
    color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
`;
export const errorMsg = css`
    margin-left: 3px;
    margin-top: 1px;
    zoom: 0.7;
    font-size: 10px;
    color: red;
`;
export const footerContainer =css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const loginButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 250px;
    height: 20px;
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
export const iconStyle = css`
    margin-top: 2.5px;
`;
export const googleLoginButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 8px;
    width: 250px;
    height: 20px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: white;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
    cursor: pointer;
    &:hover {
        border-radius: 5px;
        border-bottom: 1px solid #c4f4fe;
        background-color: #c4f4fe;
    }
    &:active {
        border-radius: 5px;
        border-bottom: 1px solid #aee4ff;
        background-color: #aee4ff;
    }
`;
export const naverLoginButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 8px;
    width: 250px;
    height: 20px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: white;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
    cursor: pointer;
    &:hover {
        border-radius: 5px;
        border-bottom: 1px solid #afffba;
        background-color: #afffba;
    }
    &:active {
        border-radius: 5px;
        border-bottom: 1px solid #03c75a;
        background-color: #03c75a;
    }
`;
export const kakaoLoginButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 8px;
    width: 250px;
    height: 20px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: white;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;
    cursor: pointer;
    &:hover {
        border-radius: 5px;
        border-bottom: 1px solid #fcffb0;
        background-color: #fcffb0;
    }
    &:active {
        border-radius: 5px;
        border-bottom: 1px solid yellow;
        background-color: yellow;
    }
`;
export const buttonLabel = css`
    flex-grow: 1;
    text-align: center;
`
export const registerButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 8px;
    width: 250px;
    height: 20px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: white;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;

    cursor: pointer;
    &:hover {
        border-radius: 5px;
        border-bottom: 1px solid #fafafa;
        background-color: #fafafa;
    }
    &:active {
        border-radius: 5px;
        border-bottom: 1px solid #dbdbdb;
        background-color: #dbdbdb;
    }
`;
export const oauth2 = (provider) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    border: 3px solid ${provider === "google" ? "#0075ff" : provider === "naver" ? "#19ce60" : "#ffdc00"};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: ${provider === "kakao" ? "30px" : "20px"};
    cursor: pointer;
    &:hover {
        background-color: ${provider === "google" ? "#0075ff" : provider === "naver" ? "#19ce60" : "#ffdc00"};
    }
`;
export const oauth2Container = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 100%;
`;
export const link = css`
    font-size: 6px;
`
export const findInfo = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 250px;
    height: 20px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: white;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 10px;

    cursor: pointer;
    &:hover {
        border-radius: 5px;
        border-bottom: 1px solid #fafafa;
        background-color: #fafafa;
    }
    &:active {
        border-radius: 5px;
        border-bottom: 1px solid #dbdbdb;
        background-color: #dbdbdb;
    }
`;
