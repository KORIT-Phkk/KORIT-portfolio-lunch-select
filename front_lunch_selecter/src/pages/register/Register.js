/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import AuthInput from '../../components/auth/AuthInput';
import { Link, useNavigate } from 'react-router-dom';

import * as s from './style'
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();

    const [ registerUser, setRegisterUser ] = useState({email:"", password:"", name:"", phone:""})
    const [ errorMessages, setErrorMessages ] = useState({email: "", password: "", name: "", phone:""});

    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        setRegisterUser({...registerUser, [name]: value});
    }

    const registeSubmit = async () => {
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

            console.log(errorMessages)
        }
    }



    return (
        <div css={s.container}>
            <header css={s.header}>
                <img src="JMC.png" alt="" />
            </header>
            <main css={s.mainContainer}>
                <div css={s.input}>
                    <label css={s.inpoutLabel}>email</label>
                    <AuthInput type="email" onChange={onChangeHandle} name="email">
                    </AuthInput>
                    <div css={s.errorMsg}>{errorMessages.email}</div>

                    <label css={s.inpoutLabel}>password</label>
                    <AuthInput type="password" onChange={onChangeHandle} name="password">
                    </AuthInput>
                    <div css={s.errorMsg}>{errorMessages.password}</div>

                    <label css={s.inpoutLabel}>name</label>
                    <AuthInput type="text" onChange={onChangeHandle} name="name">

                    </AuthInput>
                    <div css={s.errorMsg}>{errorMessages.name}</div>

                    <label css={s.inpoutLabel}>phone</label>
                    <AuthInput type="tel" onChange={onChangeHandle} name="phone">

                    </AuthInput>
                    <div css={s.errorMsg}>{errorMessages.phone}</div>
                    

                </div>
            </main>
                <div css={s.login}><Link to="/login">로그인</Link></div>
            <footer css={s.footerContainer}>
                <button css={s.registerButton} onClick={registeSubmit}>회원가입</button>
            </footer>
        </div>
    );
};

export default Register;