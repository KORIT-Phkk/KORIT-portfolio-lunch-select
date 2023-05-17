import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const fontSize = css`
    font-size: 50px;
`;

const NotFound = () => {
    return (
        <div>
            <h1 css={fontSize}>페이지를 찾을 수 없습니다.</h1>
        </div>
    );
};

export default NotFound;