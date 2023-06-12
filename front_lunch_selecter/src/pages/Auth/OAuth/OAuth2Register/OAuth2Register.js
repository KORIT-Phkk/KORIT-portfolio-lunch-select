/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import * as s from './style';
import { AiOutlineContacts } from 'react-icons/ai'
import { backEndURL } from '../../../../Config/URL/URL';

const OAuth2Register = () => {
    const [ phone, setPhone ] = useState({phone: ""})
    
    const [ searchParams, setSearchParams ] = useSearchParams();
    
    const registerToken = searchParams.get("registerToken");
    const email = searchParams.get("email");
    const name = searchParams.get("name");
    const provider = searchParams.get("provider");
    const [ registerUser, setRegisterUser ] = useState({email:email, password:"", checkPassword: "", name:name, phone:"", provider:provider})
    const [ errorMessages, setErrorMessages ] = useState({email: "", password: "", name: "", phone:""});
    
    const oauth2Register = useMutation(async (registerData) => {
        const option = {
            headers: {
                registerToken: `Bearer ${registerToken}`
            }
        }
        try {
            const response =  await axios.post(`${backEndURL}/auth/oauth2/register`, registerData, option);
            return response;
        }catch(error) {
            console.log(error)
            return error;
        }
    }, {
        onSuccess: (response) => {
            if(response.status === 200){
                alert("회원가입 성공")
                window.location.replace("/auth/login");    
            }
        }
    });
 

    const onChangeInputHandle = (e) => {
        const { name, value } = e.target;
        setRegisterUser({...registerUser, [name]: value});
    }


    const submitOauth2RegisterHandle = () => {
        oauth2Register.mutate(registerUser);
    }

    return (
        <div css={s.container}>
            <header css={s.headerContainer}>
                <img css={s.imgCss} src="../../main/logo1.png"/>
            </header>

            <div css={s.comment}><AiOutlineContacts/>&nbsp;Register&nbsp;<AiOutlineContacts/></div>

            <main css={s.mainContainer}>
                <label css={s.inputLabel}>Email</label>
                <input css={s.inputBox} type="text" value={email} disabled={true}/>

                <label css={s.inputLabel}>Name</label>
                {
                    searchParams.get("name") === "" 
                        ? <input css={s.inputBox} type="text" name='name' onChange={onChangeInputHandle}/>
                        : <input css={s.inputBox} type="text" value={name} disabled={true}/>
                }
                

                <label css={s.inputLabel}>Password</label>
                <input css={s.inputBox} type="password" name='password' placeholder='비밀번호' onChange={onChangeInputHandle} />

                <label css={s.inputLabel}>CheckPassword</label>
                <input css={s.inputBox} type="password" name='checkPassword' placeholder='비밀번호확인' onChange={onChangeInputHandle} />

                <label css={s.inputLabel}>Phone</label>
                <input css={s.inputBox} type="text" name='phone' placeholder='연락처' onChange={onChangeInputHandle}/>
            </main>

            <footer css={s.footerContainer}>
                <button css={s.registerButton} onClick={submitOauth2RegisterHandle}>가입하기</button>
            </footer>
        </div>
    );
};

export default OAuth2Register;