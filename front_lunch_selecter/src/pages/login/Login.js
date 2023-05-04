/** @jsxImportSource @emotion/react */
import React from 'react';
import AuthInput from '../../components/auth/AuthInput';
import { Link } from 'react-router-dom';

import * as s from './style'

const Login = () => {
    return (
        <div>
            <header>
                <h1>LOGIN</h1> 
            </header>
            <main>
                <AuthInput type="email" name="email">

                </AuthInput>
                
                <AuthInput type="password" name="password">

                </AuthInput>
            
            </main>
            <footer>
                <button>로그인</button>
                <div><Link>회원가입</Link></div>
            </footer>
        </div>
    );
};

export default Login;