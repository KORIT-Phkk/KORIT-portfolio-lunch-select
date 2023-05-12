import { css } from '@emotion/react'


export const container = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const headerContainer =css`

`;
export const setting =css`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
`;
// export const logoutButton =css`
//     display: flex;
//     margin-top: 10px;
//     margin-right: 10px;
//     text-decoration: none;
//     font-size: 35px;
//     font-weight: 600;
//     cursor: pointer;
// `;
export const settingButton =css`
    width: 65px;
    height: 65px;
    display: flex;
    margin-top: 10px;
    margin-right: 10px;
    border: none;
    background-color: white;
    cursor: pointer;
`;
export const logo =css`
    display: flex;
    justify-content: center;
`;
export const mainContainer =css`
    display: flex;
    justify-content: center;
`;
export const lunchSelect =css`
    display: flex;
    justify-content: center;
`;
export const lunchButton =css`
    padding-top: 5px;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    width: 850px;
    height: 80px;
    font-size: 40px;
    border: 1px solid #dbdbdb;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;
export const footerContainer =css`
    display: flex;
    justify-content: center;
`;
export const rangeSetting =css`
    margin-top: 200px;
    display: flex;
    justify-content: center;
`;
// export const info = css`

// `;
// export const myInfo = css`
//     width: 1000px;
//     height: 900px;
//     border: 1px solid #dbdbdb;
// `;

// const userInfo = css`
//     position: relative;
//     border: 1px solid #dbdbdb;
//     border-radius: 5px;
//     width: 30px;
//     height: 30px;
//     background-color: white;
//     cursor: pointer;
// `;
export const userInfo = (isOpen) => css`
    display: ${isOpen ? "flex" : "none"};
`;