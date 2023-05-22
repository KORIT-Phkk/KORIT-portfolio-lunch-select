/** @jsxImportSource @emotion/react */
import React from 'react';
import AuthInput from '../../components/auth/AuthInput';
import * as s from './FindPasswordCss'
import SendInput from '../../components/Input/SendInput';
import { RiLockPasswordFill } from 'react-icons/ri'

const FindPassword = () => {
    return (
        <div css={s.container}>
            <header css={s.headerContainer}>
                <img src="../../main/logo1.png"/>
            </header>
            <div css={s.comment}><RiLockPasswordFill/> Find Password <RiLockPasswordFill/></div>
            <main css={s.mainContainer}>
                <div css={s.input}>
                    <label css={s.emailLabel}>Email</label>
                    <SendInput type="email" name="Email" />
                    <label css={s.codeLabel}>Code</label>
                    <AuthInput type="number" className="number-input" placeholder="Enter code please"/>
                </div>
            
            </main>
            <footer css={s.footerContainer}>
                <button css={s.checkButton}>확인</button>
            </footer>
        </div>
    );
};

export default FindPassword;