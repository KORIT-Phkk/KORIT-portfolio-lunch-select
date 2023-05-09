/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';
import FindInput from '../Input/FindInput';

const input = css`
    width: 850px;
    margin-bottom: 5px;
    
`;

const FindAuthInput = ({ type, onChange, name, }) => {
    return (
        <div css={input}>
             <FindInput
            type={type}
            onChange={onChange}
            name={name}/>
        </div>
    );
};

export default FindAuthInput;