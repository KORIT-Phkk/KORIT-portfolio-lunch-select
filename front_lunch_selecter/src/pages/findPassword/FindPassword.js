/** @jsxImportSource @emotion/react */
import React from 'react';
import AuthInput from '../../components/auth/AuthInput';
import * as s from './FindPasswordCss'
import SendInput from '../../components/Input/SendInput';

const FindPassword = () => {
    return (
        <div css={s.container}>
            <header css={s.header}>
                <h1 css={s.logo}>Find Password</h1> 
            </header>
            <main css={s.mainContainer}>
                <div css={s.input}>
                    <SendInput type="email" name="Email" />

                    <div css={s.blank}></div>

                    <AuthInput type="number" name="" />
                </div>
            
            </main>
            <footer css={s.footerContainer}>
                <button css={s.checkButton}>확인</button>
            </footer>
        </div>
    );
};

export default FindPassword;