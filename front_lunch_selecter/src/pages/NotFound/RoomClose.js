import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style'
import { frontEndURL } from '../../Config/URL/URL';

const RoomClose = () => {
    const homeButton = () => {
        window.location.replace(`${frontEndURL}/`);
    }
    return (
        <span css={s.roomClose}>
            방이 닫혔거나 <br/> 존재하지 않는 방입니다.

            <button css={s.homeButton} onClick={homeButton}>메인으로</button>      
        </span>
    );
};

export default RoomClose;