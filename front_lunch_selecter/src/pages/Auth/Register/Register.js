/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineContacts } from 'react-icons/ai'
import * as s from './style'
import axios from 'axios';
import AuthInput from '../../../components/auth/AuthInput';

const Register = () => {
    const navigate = useNavigate();

    const [ registerUser, setRegisterUser ] = useState({email:"", password:"", name:"", phone:""})
    const [ errorMessages, setErrorMessages ] = useState({email: "", password: "", name: "", phone:""});

    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        setRegisterUser({...registerUser, [name]: value});
    }

    const registerSubmit = async () => {
        const data = {
            ...registerUser
        }
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            await axios.post("http://localhost:8080/auth/signup", JSON.stringify(data), option);
                alert("회원가입 성공!");
                navigate("/login");
        } catch(error) {
            setErrorMessages({email: "", password: "", name: "", phone:"", ...error.response.data.errorData});
        }
    }

    const loginSubmit = () => {
        navigate("/auth/login");
    }

    return (
        <div css={s.container}>
            <header css={s.headerContainer}>
                <img src="../main/logo1.png"/>
            </header>

            <div css={s.comment}><AiOutlineContacts/>Register<AiOutlineContacts/></div>

            <main css={s.mainContainer}>
                <div css={s.input}>
                    <label css={s.inputLabel}>Email</label>
                    <AuthInput type="email" onChange={onChangeHandle} name="email" />
                    <div css={s.errorMsg}>{errorMessages.email}</div>

                    <label css={s.elseLabel}>Password</label>
                    <AuthInput type="password" onChange={onChangeHandle} name="password" />
                    <div css={s.errorMsg}>{errorMessages.password}</div>

                    <label css={s.elseLabel}>Name</label>
                    <AuthInput type="text" onChange={onChangeHandle} name="name" />
                    <div css={s.errorMsg}>{errorMessages.name}</div>

                    <label css={s.elseLabel}>Phone</label>
                    <AuthInput type="tel" onChange={onChangeHandle} name="phone" />
                    <div css={s.errorMsg}>{errorMessages.phone}</div>
                </div>
            </main>

            <footer css={s.footerContainer}>
                <button css={s.registerButton} onClick={registerSubmit}>회원가입</button>
                <button css={s.loginButton} onClick={loginSubmit}>로그인</button>
            </footer>
        </div>
    );
};

export default Register;