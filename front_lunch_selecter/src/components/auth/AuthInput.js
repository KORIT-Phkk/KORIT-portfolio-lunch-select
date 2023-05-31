/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';
import Input from '../Input/Input';

const authInput = css`
    width: 250px;
`;



const AuthInput = ({ type, placeholder, onChange, name, disabled }) => {
    return (
        <div css={authInput}>
            <Input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            disabled={disabled}/>
        </div>
    );
};

export default AuthInput;