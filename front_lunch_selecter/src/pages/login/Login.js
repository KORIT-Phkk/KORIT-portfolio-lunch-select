/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import AuthInput from '../../components/auth/AuthInput';
import { Link, useNavigate } from 'react-router-dom';
import * as s from './style'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../atoms/Auth/AuthAtom';
import { FcGoogle } from 'react-icons/fc';
import { SiNaver } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';

const Login = () => {
    const [ loginUser, setLoginUser ] = useState({email: "", password: ""});
    const [ errorMessages, setErrorMessages ] = useState({email: "", password: ""});
    const [ refresh, setRefresh ] = useRecoilState(authenticatedState);
    const navigate = useNavigate();

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

    const registerHandleClick = () => {
        navigate("/auth/register");
    }


    return (
        <div css={s.container} onKeyUp={loginEnterKeyup}>
            <header css={s.headerContainer}>
                <img src="../main/logo1.png"/>
            </header>
            <main css={s.mainContainer}>
                <div css={s.input}>
                    <label css={s.inpoutLabel}>Email</label>
                    <AuthInput type="email" onChange={handleChange} name="email" >
                    </AuthInput>
                    <div css={s.errorMsg}>{errorMessages.email}</div>
                    <div><Link to="/auth/findemail">아이디 찾기</Link></div>

                    <label css={s.inpoutLabel}>password</label>
                    <AuthInput type="password" onChange={handleChange} name="password" >
                    </AuthInput>
                    <div css={s.passwordBox}><Link to="/auth/findpassword">비밀번호 찾기</Link></div>
                    
                </div>
            </main>
            <footer css={s.footerContainer}>
                <button onClick={loginHandleSubmit} css={s.loginButton}>로그인</button>
                <button css={s.googleLoginButton} onClick={googleAuthHandleClick}>
                    <div css={s.iconStyle}>
                        <FcGoogle/>
                    </div>
                    <div css={s.buttonLabel}>
                        Google 로그인
                    </div>
                </button>
                <button css={s.naverLoginButton} onClick={naverAuthHandleClick}>
                    <div css={s.iconStyle}>
                        <SiNaver/>
                    </div>
                    <div css={s.buttonLabel}>
                        Naver 로그인
                    </div>
                </button>
                <button css={s.kakaoLoginButton} onClick={kakaoAuthHandleClick}>
                    <div css={s.iconStyle}>
                        <RiKakaoTalkFill/>
                    </div>
                    <div css={s.buttonLabel}>
                        Kakao 로그인
                    </div>
                </button>
                <button css={s.registerButton} onClick={registerHandleClick}>회원가입</button>
            </footer>
        </div>
    );
};

export default Login;