/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './style';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import AuthInput from '../../../../components/auth/AuthInput';

const PasswordChange = () => {
    const [ updateUser, setUpdateUser ] = useState({currentPassword: "", updatePassword: "", updateCheckPassword: ""});
    const [ errorMessages, setErrorMessages ] = useState({currentPassword: "", updatePassword: "", updateCheckPassword: ""});


    const passwordChange = useMutation(async() => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json"
            }
        }

        console.log(updateUser)
        try{
            const response = await axios.put("http://localhost:8080/auth/updatepassword", updateUser, option);
            return response;
        }catch(error){
            setErrorMessages({currentPassword: "", updatePassword: "",updateCheckPassword: "", ...error.response.data.errorData});
        }
    },{
        onSuccess:(response) => {
            console.log(response)
            if(response.status === 200){
                window.location.href = "http://localhost:3000/mypage/passwordchangeresult";
            }
        }
    });

    const okButtonClick = () => {
        passwordChange.mutate();
        console.log(errorMessages.currentPassword);
    }

    const inputChangeHandle = (e) => {
        const { name, value } = e.target;
        setUpdateUser({...updateUser, [name]: value});
    }

    

    return (
        <div css={s.container}>
            <header css={s.headerContainer}>
                <div css={s.input}>
                    <label css={s.inputLabel}>Default Password</label>
                    <AuthInput type="password" name="currentPassword" onChange={inputChangeHandle}/>
                    <div css={s.errorMessages}>{errorMessages.currentPassword}</div>
                </div>

                <div css={s.input}>
                    <label css={s.inputLabel}>Password</label>
                    <AuthInput type="password" name="updatePassword" onChange={inputChangeHandle}/>
                    <div css={s.errorMessages}>{errorMessages.updatePassword}</div>
                </div>

                <div css={s.input}>
                    <label css={s.inputLabel}>Password</label>
                    <AuthInput type="password" name="updateCheckPassword" onChange={inputChangeHandle}/>
                    <div css={s.errorMessages}>{errorMessages.updateCheckPassword}</div>
                </div>
            </header>
            <main>
                <button css={s.okButton} onClick={okButtonClick}>확인</button>
            </main>
        </div>
    );
};

export default PasswordChange;