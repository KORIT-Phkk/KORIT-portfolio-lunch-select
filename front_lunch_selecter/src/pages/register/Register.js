/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import AuthInput from '../../components/auth/AuthInput';
import { Link, useNavigate } from 'react-router-dom';

import * as s from './style'
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();

    const [registerUser, setRegisterUser] = useState({email:"", password:"",name:"", phon:""})

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
        await axios.post("http://localhost:8080/auth/signup", JSON.stringify(data), option);
            alert("회원가입 성공!");
            navigate("/login");
    }

    return (
        <div>
            <header>
                <h1>SIGN UP</h1> 
            </header>
            <main>
                <AuthInput type="email" onChange={onChangeHandle} name="email">

                </AuthInput>
                <AuthInput type="password" onChange={onChangeHandle} name="password">

                </AuthInput>
                <AuthInput type="password" onChange={onChangeHandle} name="password">

                </AuthInput>
                <AuthInput type="text" onChange={onChangeHandle} name="name">

                </AuthInput>
                <AuthInput type="number" onChange={onChangeHandle} name="phone">

                </AuthInput>
            </main>
            <footer>
                <button onClick={registeSubmit}>회원가입</button>
                <div><Link to="/login">로그인</Link></div>
            </footer>
        </div>
    );
};

export default Register;