/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineContacts } from 'react-icons/ai'
import * as s from './style'
import axios from 'axios';
import AuthInput from '../../../components/auth/AuthInput';
import { backEndURL } from '../../../Config/URL/URL';

const Register = () => {
    const navigate = useNavigate();

    const [ registerUser, setRegisterUser ] = useState({email:"", password:"", checkPassword: "", name:"", phone:""})
    const [ errorMessages, setErrorMessages ] = useState({email: "", password: "", name: "", phone:""});

    const onChangeInputHandle = (e) => {
        const { name, value } = e.target;
        setRegisterUser({...registerUser, [name]: value});
    }

    const submitRegisterHandle = async () => {
        const data = {
            ...registerUser
        }
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            await axios.post(`${backEndURL}/auth/signup`, JSON.stringify(data), option);
            navigate("/auth/register/result");
        } catch(error) {
            setErrorMessages({email: "", password: "", name: "", phone:"", ...error.response.data.errorData});
        }
    }

    const onClickLoginButton = () => {
        navigate("/auth/login");
    }

    const onEnterKeyUp = (e) => {
        if(e.keyCode === 13) {
            submitRegisterHandle();
        }
    }

    return (
        <div css={s.container} onKeyUp={onEnterKeyUp}>
            <header css={s.headerContainer}>
                <img css={s.imgCss} src="../main/logo1.png"/>
            </header>

            <div css={s.comment}><AiOutlineContacts/>&nbsp;Register&nbsp;<AiOutlineContacts/></div>

            <main css={s.mainContainer}>
                <label css={s.inputLabel}>Email</label>
                <AuthInput type="email" onChange={onChangeInputHandle} name="email" />
                <div css={s.errorMsg}>{errorMessages.email}</div>

                <label css={s.elseLabel}>Password</label>
                <AuthInput type="password" onChange={onChangeInputHandle} name="password" />
                <div css={s.errorMsg}>{errorMessages.password}</div>

                <label css={s.elseLabel}>CheckPassword</label>
                <AuthInput type="password" onChange={onChangeInputHandle} name="checkPassword" />
                <div css={s.errorMsg}>{errorMessages.password}</div>

                <label css={s.elseLabel}>Name</label>
                <AuthInput type="text" onChange={onChangeInputHandle} name="name" />
                <div css={s.errorMsg}>{errorMessages.name}</div>

                <label css={s.elseLabel}>Phone</label>
                <AuthInput type="tel" onChange={onChangeInputHandle} name="phone" />
                <div css={s.errorMsg}>{errorMessages.phone}</div>
            </main>

            <footer css={s.footerContainer}>
                <button css={s.registerButton} onClick={submitRegisterHandle}>회원가입</button>
                <button css={s.loginButton} onClick={onClickLoginButton}>로그인</button>
            </footer>
        </div>
    );
};

export default Register;