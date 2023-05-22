/** @jsxImportSource @emotion/react */
import * as s from './style'
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AuthInput from '../../components/auth/AuthInput';
import { useMutation } from 'react-query';
import axios from 'axios';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();
    const [ updateUser, setUpdateUser ] = useState({token: searchParams.get("token"), password: "", checkPassword: ""})
    const [ errorMessage, setErrorMessage ] = useState({message: "", data: ""});

    const resetPassword = useMutation(async (data) => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {
            const response = await axios.put("http://localhost:8080/auth/resetPassword", data, option)
            return response;
        } catch (error) {
            setErrorMessage({
                message: error.response.data.message,
                data: error.response.data.errorData
            })

            if(errorMessage.message.includes("Token")) {
                alert("요청이 만료되었습니다.");
                navigate("/auth/login");
            }
            return error
        }
    }, {
        onSuccess: (response) => {
            if(response.status === 200) {
                alert("비밀번호 재설정 성공");
                navigate("/auth/login");
            }
        }
    });
    
    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        setUpdateUser({...updateUser, [name]: value});
    }

    const submitOnclickHandle = () => {
        resetPassword.mutate(updateUser)
    }

    const onEnterKeyup = (e) => {
        if(e.keyCode === 13) {
            submitOnclickHandle();
        }
    }

    return (
        <div css={s.container} onKeyDown={onEnterKeyup}>
            <header css={s.header}>
                <h1 css={s.logo}>Update Password</h1> 
            </header>
            <main css={s.mainContainer}>
                <div css={s.input}>
                    <label css={s.inputLabel}>Password</label>
                    <AuthInput type="password" name="password" onChange={onChangeHandle} />
                    <div css={s.errorMsg}>{errorMessage.data.password}</div>
                </div>
                <div css={s.input}>
                    <label css={s.inputLabel}>checkPassword</label>
                    <AuthInput type="password" name="checkPassword" onChange={onChangeHandle} />
                </div>
                <button css={s.checkButton} onClick={submitOnclickHandle}>확인</button>
            </main>
            
        </div>
    );
};

export default ResetPassword;