/** @jsxImportSource @emotion/react */
import React from 'react';
import AuthInput from '../../components/auth/AuthInput';
import { Link } from 'react-router-dom';

import * as s from './style'

const Register = () => {
    return (
        <div>
            <header>
                <h1>SIGN UP</h1> 
            </header>
            <main>
                <AuthInput type="email" name="email">

                </AuthInput>
                <AuthInput type="password" name="password">

                </AuthInput>
                <AuthInput type="password" name="password">

                </AuthInput>
                <AuthInput type="text" name="name">

                </AuthInput>
                <AuthInput type="number" name="phon">

                </AuthInput>
            </main>
            <footer>
                <button>회원가입</button>
                <div><Link>로그인</Link></div>
            </footer>
        </div>
    );
};

export default Register;