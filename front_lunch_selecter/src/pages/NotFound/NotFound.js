import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style'
import { css } from '@emotion/react';


const NotFound = () => {
    return (
        <div>
            <img css={s.imgCss} src="../../../../main/notFound2.png" alt=""/>
            <h1 css={s.notfound}>페이지를 찾을 수 없습니다.</h1>
        </div>
    );
};

export default NotFound;