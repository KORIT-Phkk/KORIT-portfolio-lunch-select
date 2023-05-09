/** @jsxImportSource @emotion/react */
import React from 'react';
import AuthInput from '../../components/auth/AuthInput';
import { Link } from 'react-router-dom';
import * as s from './EmailAuthenticationNunberCss'

const EmailAuthenticationNumber = () => {
    return (
        <div css={s.container}>
            <header css={s.header}>
                <h1 css={s.logo}>Find Email</h1> 
            </header>

            <main css={s.mainContainer}>
                <div css={s.input}>
                    <AuthInput type="email" name="phone">
                    </AuthInput>
                </div>
            </main>
                    <div css={s.link}>
                        <div css={s.login}><Link to="/login">로그인</Link></div>
                        <div css={s.findPassword}><Link to="/findpassword">비밀번호찾기</Link></div>
                    </div>
        </div>
    );
};

export default EmailAuthenticationNumber;