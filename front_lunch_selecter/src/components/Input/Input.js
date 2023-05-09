/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';

const input = css`
    border: none;
    outline: none;
    padding: 5px 10px;
    width: 100%;
    height: 80px;
    font-size: 40px;
    border-bottom: 1px solid BLACK;
`;
// const icon = css`

// `;
const Input = ({ type, placeholder, onChange, name, children }) => {
    return (
        <div>
            {/* <div css={icon}>{children}</div> */}
             <input css={input} 
            type={type} 
            placeholder={placeholder} 
            onChange={onChange}
            name={name}/>
        </div>
    );
};

export default Input;