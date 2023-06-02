import { css } from "@emotion/react";

export const mainContainer = css`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 280px;
  height: 80px;
`;
export const message = css`
  font-family: 'Ansungtangmyun-Bold', sans-serif;
  font-size: 15px;
  font-weight: 600;
`;
export const textContainerStyles = css`
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  top: 30%;
  font-family: 'Ansungtangmyun-Bold', sans-serif;
  font-size: 20px;
  font-weight: 600;
`;