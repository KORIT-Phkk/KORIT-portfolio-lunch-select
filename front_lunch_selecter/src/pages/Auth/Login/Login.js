/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { SiNaver } from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import * as s from './style';
import AuthInput from './../../../components/auth/AuthInput';
import { authenticatedState } from './../../../atoms/Auth/AuthAtom';

const Login = () => {
    const [ loginUser, setLoginUser ] = useState({email: "", password: ""});
    const [ errorMessages, setErrorMessages ] = useState({email: ""});
    const [ authState, setAuthState ] = useRecoilState(authenticatedState);
    const navigate = useNavigate();

    const onChangeInputHandle = (e) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    }

    const submitLoginHandle = async () => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await axios.post("http://localhost:8080/auth/login", JSON.stringify(loginUser), option);
            localStorage.setItem("accessToken", response.data);
            setAuthState(true);
        } catch(error) {
            setErrorMessages({email: "", ...error.response.data.errorData});
        }
    }
    
    const onEnterKeyUp = (e) => {
        if(e.keyCode === 13) {
            submitLoginHandle();
        }
    }

    const onClickGoogleAuthButton = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google"
    }

    const onClickNaverAuthButton = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/naver"
    }

    const onClickKakaoAuthButton = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/kakao"
    }

    const onClickRegisterButton = () => {
        navigate("/auth/register");
    }


    return (
        <div css={s.container} onKeyUp={onEnterKeyUp}>
            <header css={s.headerContainer}>
                <img src="../main/logo1.png"/>
            </header>

            <main css={s.mainContainer}>
                <div css={s.input}>
                    <label css={s.inputLabel}>Email</label>
                    <AuthInput type="email" onChange={onChangeInputHandle} name="email" />
                    <div css={s.errorMsg}>{errorMessages.email}</div>
                    <div><Link to="/auth/findemail">이메일 찾기</Link></div>

                    <label css={s.inputLabel}>Password</label>
                    <AuthInput type="password" onChange={onChangeInputHandle} name="password" />
                    <div css={s.passwordBox}><Link to="/auth/findpassword">비밀번호 찾기</Link></div>
                </div>
            </main>
            
            <footer css={s.footerContainer}>
                <button onClick={submitLoginHandle} css={s.loginButton}>로그인</button>
                <button css={s.googleLoginButton} onClick={onClickGoogleAuthButton}>
                    <div css={s.iconStyle}>
                        <FcGoogle/>
                    </div>
                    <div css={s.buttonLabel}>
                        Google 로그인
                    </div>
                </button>
                <button css={s.naverLoginButton} onClick={onClickNaverAuthButton}>
                    <div css={s.iconStyle}>
                        <SiNaver/>
                    </div>
                    <div css={s.buttonLabel}>
                        Naver 로그인
                    </div>
                </button>
                <button css={s.kakaoLoginButton} onClick={onClickKakaoAuthButton}>
                    <div css={s.iconStyle}>
                        <RiKakaoTalkFill/>
                    </div>
                    <div css={s.buttonLabel}>
                        Kakao 로그인
                    </div>
                </button>
                <button css={s.registerButton} onClick={onClickRegisterButton}>회원가입</button>
            </footer>
        </div>
    );
};

export default Login;