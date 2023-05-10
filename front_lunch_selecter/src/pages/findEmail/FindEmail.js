/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './FindEmailcss'
import FindAuthInput from '../../components/auth/FindAuthInput';
import AuthInput from '../../components/auth/AuthInput';

const FindEmail = () => {
    return (
        <div css={s.container}>
            <header css={s.header}>
                <h1 css={s.logo}>Find Email</h1> 
            </header>
            <main css={s.mainContainer}>
                <div css={s.input}>
                    <FindAuthInput type="email" name="phone">
                    </FindAuthInput>
                    <div css={s.blank}></div>
                    <AuthInput type="number" name="">

                    </AuthInput>
                </div>
            </main>

            <footer css={s.footerContainer}>
                <button css={s.checkButton}>확인</button>
            </footer>
        </div>
    );
};

export default FindEmail;