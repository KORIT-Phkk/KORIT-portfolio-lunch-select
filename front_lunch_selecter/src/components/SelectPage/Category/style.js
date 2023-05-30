import { css } from "@emotion/react";

export const categoryContainer = css`
    display: flex;
    width: 280px;
    margin: 0px auto;
    justify-content: space-between;
    flex-wrap: wrap;
`;
export const categoryBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 8px;
`;
export const imgCss = css`
    margin-top: 13px;
    width: 30px;
    height: 30px;
`;
export const checkbox = css`
    display: none;
`;
export const label = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 67px;
    height: 15px;
    font-size: 12px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    
    cursor: pointer;
    input[type="checkbox"]:checked + & {
        font-weight: 600;
    }
`;