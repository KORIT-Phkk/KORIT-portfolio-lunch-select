import { css } from "@emotion/react";

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
`;
export const icon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
export const todayLunch = css`
  align-items: center;
  font-family: 'Ansungtangmyun-Bold', sans-serif;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 20px;
`;
export const todayMenu = css`
  font-family: 'Ansungtangmyun-Bold', sans-serif;
  font-weight: 600;
  font-size: 20px;
`;
export const mention = css`
  margin-top: 20px;
  text-align: center;
  font-family: 'Ansungtangmyun-Bold', sans-serif;
  font-weight: 100;
  font-size: 10px;
  color: red;
`;
export const buttonStyle = css`
  margin-top: 150px;
  width: 50px;
  height: 20px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 5px;
  font-family: 'Ansungtangmyun-Bold', sans-serif;
  font-weight: 600;
  font-size: 12px;

  cursor:pointer;
  &:hover {
    color: black;
    background-color: #fafafa;
  }
  &:active {
    color: black;
    background-color: #dbdbdb;
  }
`;