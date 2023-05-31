/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './style'
import { useNavigate } from 'react-router-dom';
import { AiFillNotification } from 'react-icons/ai'

const ResetPasswordResult = () => {
    const navigate = useNavigate();
    
    const loginButtonOnClick = () => {
        navigate("/auth/login")
    }

    return (
        <div css={s.container}>
            <header css={s.headerContainer}>
                <img css={s.imgCss} src="../../main/logo1.png"/>
            </header>

            <div css={s.comment}><AiFillNotification/>&nbsp;Notice&nbsp;<AiFillNotification/></div>
            
            <main css={s.mainContainer}>
                <span css={s.notice}>비밀번호 변경 완료</span>
            </main>

            <footer css={s.footerContainer}>
                <button css={s.loginButton} onClick={loginButtonOnClick}>로그인</button>
            </footer>
        </div>
    );
};

export default ResetPasswordResult;