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
export const logo1 = css`
    margin-bottom: 50px;
`;
export const logo2 = css`
    margin: auto;
    display: flex;
    justify-content: center;
    width: 900px;
    height: 270px;
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
export const inpoutLabel = css`
    padding-top: 100px;
    padding-bottom: 10px;
    color: black;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;
`;
export const passwordBox = css`
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const footerContainer =css`
    margin: auto;
   display: flex;
   justify-content: center;
   flex-direction: column;
`;
export const loginButton = css`
    width: 850px;
    height: 80px;
    margin-top: 150px;
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
        border-radius: 20px;
        border-bottom: 1px solid #fafafa;
        background-color: #fafafa;
    }
    &:active {
        border-radius: 20px;
        border-bottom: 1px solid #dbdbdb;
        background-color: #dbdbdb;
    }
`;
export const iconStyle = css`
    margin-top: 20px;
`;
export const googleLoginButton = css`
    display: flex;
    /* justify-content: flex-start; */
    width: 850px;
    height: 80px;
    margin-top: 30px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: white;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;
    cursor: pointer;
    &:hover {
        border-radius: 20px;
        border-bottom: 1px solid #c4f4fe;
        background-color: #c4f4fe;
    }
    &:active {
        border-radius: 20px;
        border-bottom: 1px solid #aee4ff;
        background-color: #aee4ff;
    }
`;
export const naverLoginButton = css`
    display: flex;
    justify-content: center;
    width: 850px;
    height: 80px;
    margin-top: 30px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: white;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;
    cursor: pointer;
    &:hover {
        border-radius: 20px;
        border-bottom: 1px solid #afffba;
        background-color: #afffba;
    }
    &:active {
        border-radius: 20px;
        border-bottom: 1px solid #03c75a;
        background-color: #03c75a;
    }
`;
export const kakaoLoginButton = css`
    display: flex;
    justify-content: center;
    width: 850px;
    height: 80px;
    margin-top: 30px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: white;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;
    cursor: pointer;
    &:hover {
        border-radius: 20px;
        border-bottom: 1px solid #fcffb0;
        background-color: #fcffb0;
    }
    &:active {
        border-radius: 20px;
        border-bottom: 1px solid yellow;
        background-color: yellow;
    }
`;
export const buttonLabel = css`
    flex-grow: 1;
    margin-top: 5px;
    text-align: center;
`
export const registerButton = css`
    width: 850px;
    height: 80px;
    margin-top: 30px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    background-color: white;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;

    cursor: pointer;
    &:hover {
        border-radius: 20px;
        border-bottom: 1px solid #fafafa;
        background-color: #fafafa;
    }
    &:active {
        border-radius: 20px;
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

export const errorMsg = css`
    margin-left: 5px;
    margin-top: 3px;
    margin-bottom: 10px;
    font-size: 25px;
    color: red;
`;