/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import AuthInput from '../../components/auth/AuthInput';
import { Link, useNavigate } from 'react-router-dom';

import * as s from './style'
import axios from 'axios';

const Login = () => {
    const [ loginUser, setLoginUser ] = useState({email: "", password: ""});

    // const navigate = useNavigate();

    const handlChange = (e) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    }

    const loginHandleSubmit = async () => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await axios.post("http://localhost:8080/auth/login", JSON.stringify(loginUser), option);
        const accessToken = response.data.grantType + " " + response.data.accessToken;

        localStorage.setItem("accessToken", accessToken);
        
    }

    return (
        <div>
            <header>
                <h1>LOGIN</h1> 
            </header>
            <main>
                <AuthInput type="email" onChange={handlChange} name="email">

                </AuthInput>
                
                <AuthInput type="password" onChange={handlChange} name="password">

                </AuthInput>
                <div>
                    <Link to="/FindEmail">아이디 찾기</Link>
                    <Link>비밀번호 찾기</Link>
                </div>
            </main>
            <footer>
                <button onClick={loginHandleSubmit}>로그인</button>
                <div><Link to="/register">회원가입</Link></div>
            </footer>
        </div>
    );
};

export default Login;