/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { SiNaver } from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs'
import * as s from './style';
import AuthInput from './../../../components/auth/AuthInput';
import { authenticatedState } from './../../../atoms/Auth/AuthAtom';
import { backEndURL } from '../../../Config/URL/URL';

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
            const response = await axios.post(`${backEndURL}/auth/login`, JSON.stringify(loginUser), option);

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
        window.location.href = `${backEndURL}/oauth2/authorization/google`
    }

    const naverAuthHandleClick = () => {
        window.location.href = `${backEndURL}/oauth2/authorization/naver`
    }

    const kakaoAuthHandleClick = () => {
        window.location.href = `${backEndURL}/oauth2/authorization/kakao`
    }

    const registerHandleClick = () => {
        navigate("/auth/register");
    }


    return (
        <div css={s.container} onKeyUp={loginEnterKeyup}>
            <header css={s.headerContainer}>
                <img css={s.imgCss} src="../main/logo1.png"/>
            </header>

                <div css={s.comment}><BsFillPersonFill/>&nbsp;Login&nbsp;<BsFillPersonFill/></div>

            <main css={s.mainContainer}>
                <label css={s.inputLabel}>Email</label>
                <AuthInput type="email" onChange={handleChange} name="email" />
                <div css={s.errorMsg}>{errorMessages.email}</div>

                <label css={s.inputLabel}>Password</label>
                <AuthInput type="password" onChange={handleChange} name="password" />
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
                <button css={s.findInfo}><Link to="/auth/findemail">이메일 찾기</Link> / <Link to="/auth/findpassword">비밀번호 찾기</Link></button>
            </footer>
        </div>
    );
};

export default Login;