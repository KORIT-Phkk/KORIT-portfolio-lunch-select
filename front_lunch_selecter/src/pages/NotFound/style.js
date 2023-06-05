import { css } from "@emotion/react";

export const imgCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  width: 300px;
  height: 400px;
`;
export const notfound = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-family: 'Ansungtangmyun-Bold', sans-serif;
  font-size: 20px;
  font-weight: 600;
`;
export const roomClose = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 100px;

  font-family: 'Ansungtangmyun-Bold', sans-serif;
  font-size: 30px;
  font-weight: 600;
`;
export const homeButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 20px;
  margin-top: 30px;
  font-size: 15px;
  font-family: 'Ansungtangmyun-Bold', sans-serif;
  text-decoration: none;
  color: black;
  border: none;
  border-radius: 5px;
  background-color: white;

  cursor: pointer;
  &:hover {
      transition: .3s ease-in;
      box-shadow: inset 125px 0 0 black, inset -125px 0 0 black;
      font-weight: 600;
      color: white;
  }
  &:active {
      color: #dbdbdb;
  }
`;