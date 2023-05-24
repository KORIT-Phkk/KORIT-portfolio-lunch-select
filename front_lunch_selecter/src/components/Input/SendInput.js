/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button } from '@mui/base';
import React from 'react';

const input = css`
    border: none;
    outline: none;
    padding: 5px 10px;
    width: 700px;
    height: 80px;
    font-size: 40px;
    border-bottom: 1px solid black;
`;
export const sendButton = css`
    width: 150px;
    height: 72px;
    border: none;
    border-bottom: 1px solid black;
    font-size: 20px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;
const SendInput = ({ type, onChange, name, onClick}) => {
    return (
        <div>
             <input css={input} 
            type={type} 
            onChange={onChange}
            name={name}/>
            <Button css={sendButton} onClick={onClick}>전송</Button>
        </div>
    );
};

export default SendInput;