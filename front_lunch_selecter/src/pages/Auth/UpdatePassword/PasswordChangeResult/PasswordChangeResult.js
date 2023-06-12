/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './style';
import { useNavigate } from 'react-router-dom';
import { frontEndURL } from '../../../../Config/URL/URL';

const PasswordChangeResult = () => {
    const navigate = useNavigate();
    
    const loginButtonOnClick = () => {
        localStorage.removeItem("accessToken");
        // navigate("/auth/login")
        window.location.href = `${frontEndURL}/auth/login`;
    }
    return (
        <div css={s.container}>
            <header css={s.headerContainer}>

            </header>
            <main css={s.mainContainer}>
                비밀번호 변경이 성공적으로 완료되었습니다.
            </main>
            <footer css={s.footerContainer}>
                <button css={s.loginButton} onClick={loginButtonOnClick}>로그인 하러가기</button>
            </footer>
            
        </div>
    );
};

export default PasswordChangeResult;