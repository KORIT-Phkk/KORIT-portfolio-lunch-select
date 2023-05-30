/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';

const input = css`
    border: none;
    outline: none;
    padding: 5px 10px;
    width: 100%;
    height: 20px;
    font-size: 12px;
    border-bottom: 1px solid BLACK;
`;

const Input = ({ type, placeholder, onChange, name, disabled }) => {
    return (
        <div>
             <input css={input} 
            type={type} 
            placeholder={placeholder} 
            onChange={onChange}
            name={name}
            disabled={disabled}/>
        </div>
    );
};

export default Input;