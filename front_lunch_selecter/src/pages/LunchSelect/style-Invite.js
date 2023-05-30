import { css } from '@emotion/react';

export const inviteContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 25px 0px;
`;
export const inviteButton = css`
  width: 52px;
  height: 20px;
  font-size: 10px;
  font-family: 'Ansungtangmyun-Bold', sans-serif;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;

  cursor: pointer;
  &:hover{
    color: black;
    background-color: #fafafa;
  }
  &:active{
    color: black;
    background-color: #dbdbdb;
  }
`;
export const getUrlCode =css`
  font-size: 13px;
`;