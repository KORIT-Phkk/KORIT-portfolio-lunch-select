/** @jsxImportSource @emotion/react */
import AuthInput from '../../components/auth/AuthInput';
import * as s from './style'
import { useState } from 'react';

const FindPassword = () => {
    const [ email, setEmail ] = useState("");

    const onChangeHandle = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div css={s.container}>
            <header css={s.header}>
                <h1 css={s.logo}>Find Password</h1> 
            </header>
            <main css={s.mainContainer}>
                <div css={s.input}>
                    <label css={s.inputLabel}>email</label>
                    <AuthInput type="email" onChange={onChangeHandle} name="email" />
                </div>
            
            </main>
            <footer css={s.footerContainer}>
                <button css={s.checkButton}>확인</button>
            </footer>
        </div>
    );
};

export default FindPassword;