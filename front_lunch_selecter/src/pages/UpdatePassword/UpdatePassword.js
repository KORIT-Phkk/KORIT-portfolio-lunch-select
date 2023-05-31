/** @jsxImportSource @emotion/react */
import React from 'react';
import AuthInput from '../../components/auth/AuthInput';
import * as s from './style'

const UpdatePassword = () => {
    return (
        <div css={s.container}>
            <header css={s.header}>
                <h1 css={s.logo}>Update Password</h1> 
            </header>
            <main css={s.mainContainer}>
                <div css={s.input}>
                    <AuthInput type="password" name="password">
                    </AuthInput>
                </div>
                    <button css={s.checkButton}>확인</button>
            </main>
            
        </div>
    );
};

export default UpdatePassword;