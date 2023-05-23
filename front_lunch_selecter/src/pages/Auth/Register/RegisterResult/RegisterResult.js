/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './style'
import { useNavigate } from 'react-router-dom';

const RegisterResult = () => {
    const navigate = useNavigate();
    
    const loginButtonOnClick = () => {
        navigate("/auth/login")
    }

    return (
        <div css={s.container}>
            <header css={s.headerContainer}>

            </header>
            <main css={s.mainContainer}>
                회원가입 완료
            </main>
            <footer css={s.footerContainer}>
                <button css={s.loginButton} onClick={loginButtonOnClick}>로그인</button>
            </footer>
            
        </div>
    );
};

export default RegisterResult;