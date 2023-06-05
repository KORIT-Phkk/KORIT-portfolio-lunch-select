import { css } from "@emotion/react";

export const container = css`
  margin-top: 200px;
`;
export const loading = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  font-family: 'Ansungtangmyun-Bold', sans-serif;
  font-weight: 600;
  font-size: 30px;
`;
export const footerContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
export const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 20px;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Ansungtangmyun-Bold', sans-serif;
  text-decoration: none;
  color: black;
  border: none;
  border-radius: 5px;
  background-color: white;

  cursor: pointer;
  &:hover {
      transition: .3s ease-in;
      box-shadow: inset 100px 0 0 black, inset -100px 0 0 black;
      font-weight: 600;
      color: white;
  }
  &:active {
      color: #dbdbdb;
  }
`;