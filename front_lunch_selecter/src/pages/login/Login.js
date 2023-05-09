/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import AuthInput from '../../components/auth/AuthInput';
import { Link, useNavigate } from 'react-router-dom';

import * as s from './style'
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../atoms/Auth/AuthAtom';

const Login = () => {
    const [ loginUser, setLoginUser ] = useState({email: "", password: ""});
    const [ refresh, setRefresh ] = useRecoilState(authenticatedState);

    // const navigate = useNavigate();
    const navigate = useNavigate();

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
        alert("로그인 성공!");
        const accessToken = response.data.grantType + " " + response.data.accessToken;

        localStorage.setItem("accessToken", accessToken);
        setRefresh(true);
        
    }

    return (
        <div css={s.container}>
            <header css={s.header}>
                {/* <h1 css={s.logo}>ddd</h1>  */}
                <img css={s.logo} src="003.png" alt=""></img>
            </header>
            <main css={s.mainContainer}>
                <div css={s.input}>
                    <label css={s.inpoutLabel}>Email</label>
                    <AuthInput type="email" onChange={handlChange} name="email" >
                       
                    </AuthInput>
                    <div><Link to="/findemail">아이디 찾기</Link></div>

                    <label css={s.inpoutLabel}>password</label>
                    <AuthInput type="password" onChange={handlChange} name="password" >
                    </AuthInput>
                    <div><Link to="/findpassword">비밀번호 찾기</Link></div>
                    
                </div>
            </main>
            <footer css={s.footerContainer}>
                <div css={s.register}><Link to="/register">회원가입</Link></div>
                <button onClick={loginHandleSubmit} css={s.logButton}>로그인</button>
            </footer>
        </div>
    );
};

export default Login;