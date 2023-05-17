/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import AuthInput from '../../components/auth/AuthInput';
import { Link } from 'react-router-dom';

import * as s from './style'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../atoms/Auth/AuthAtom';
import { BsGoogle } from 'react-icons/bs';
import { SiNaver } from 'react-icons/si';
import { SiKakao } from 'react-icons/si';

const Login = () => {
    const [ loginUser, setLoginUser ] = useState({email: "", password: ""});
    const [ errorMessages, setErrorMessages ] = useState({email: "", password: ""});
    const [ refresh, setRefresh ] = useRecoilState(authenticatedState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    }

    const loginHandleSubmit = async () => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {
            const response = await axios.post("http://localhost:8080/auth/login", JSON.stringify(loginUser), option);
            alert("로그인 성공!");

            localStorage.setItem("accessToken", response.data);
            setRefresh(true);
        } catch(error) {
            setErrorMessages({email: "", password: "", ...error.response.data.errorData});
        }
    }
    
    const loginEnterKeyup = (e) => {
        if(e.keyCode === 13) {
            loginHandleSubmit();
        }
    }

    const googleAuthHandleClick = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google"
    }

    const naverAuthHandleClick = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/naver"
    }

    const kakaoAuthHandleClick = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/kakao"
    }


    return (
        <div css={s.container} onKeyUp={loginEnterKeyup}>
            <header css={s.header}>
                <img css={s.logo} src="main/003.png" alt=""></img>
            </header>
            <main css={s.mainContainer}>
                <div css={s.input}>
                    <label css={s.inpoutLabel}>Email</label>
                    <AuthInput type="email" onChange={handleChange} name="email" >
                    </AuthInput>
                    <div css={s.errorMsg}>{errorMessages.email}</div>
                    <div><Link to="/findemail">아이디 찾기</Link></div>

                    <label css={s.inpoutLabel}>password</label>
                    <AuthInput type="password" onChange={handleChange} name="password" >
                    </AuthInput>
                    <div><Link to="/findpassword">비밀번호 찾기</Link></div>
                    
                </div>
            </main>
            <footer css={s.footerContainer}>
                <div css={s.register}><Link to="/register">회원가입</Link></div>
                <button onClick={loginHandleSubmit} css={s.logButton}>로그인</button>
            </footer>

            <div css={s.oauth2Container}>
                <div css={s.oauth2("google")} onClick={googleAuthHandleClick}><BsGoogle /></div>
                <div css={s.oauth2("naver")} onClick={naverAuthHandleClick}><SiNaver /></div>
                <div css={s.oauth2("kakao")} onClick={kakaoAuthHandleClick}><SiKakao /></div>
            </div>
        </div>
    );
};

export default Login;