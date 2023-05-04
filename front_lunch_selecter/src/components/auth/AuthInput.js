/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';
import Input from '../Input/Input';

const authInput = css`
    width: 800px;
    height: 100px;
    margin-bottom: 5px;
    border: 1px solid #dbdbdb;
`;

const icon = css`

`;

const AuthInput = ({ type, placeholder, onChange, name, children }) => {
    return (
        <div css={authInput}>
            <div css={icon}>{children}</div>
            <Input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            name={name}/>
        </div>
    );
};

export default AuthInput;