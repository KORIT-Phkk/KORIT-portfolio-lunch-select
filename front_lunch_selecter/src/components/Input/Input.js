/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const input = css`
    border: none;
    outline: none;
    padding: 5px 10px;
    width: 100%;
    height: 80px;
    font-size: 40px;
    border-bottom: 1px solid #dbdbdb;
`;

const Input = ({ type, placeholder, onChange, name }) => {
    return (
        <div>
             <input css={input} 
            type={type} 
            placeholder={placeholder} 
            onChange={onChange}
            name={name}/>
        </div>
    );
};

export default Input;