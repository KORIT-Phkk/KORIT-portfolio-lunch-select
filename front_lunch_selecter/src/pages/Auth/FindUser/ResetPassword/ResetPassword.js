/** @jsxImportSource @emotion/react */
import * as s from './style'
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { MdLockReset } from 'react-icons/md'
import AuthInput from './../../../../components/auth/AuthInput';
import { backEndURL } from '../../../../Config/URL/URL';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();
    const [ updateUser, setUpdateUser ] = useState({token: searchParams.get("token"), password: "", checkPassword: ""})
    const [ errorMessage, setErrorMessage ] = useState({message: "", data: ""});

    const [ flag, setFlag ] = useState(false);

    const validateResetPasswordToken =  async () => {
        const option = {
            params: {
                token: updateUser.token
            }
        }
        try {
            await axios.get(`${backEndURL}/auth/resetpassword/validatetoken`, option);
            setFlag(true);
        } catch(error) {
            alert("유효하지 않은 요청입니다.")
            navigate("/");
        }
    }

    const resetPassword = useMutation(async (data) => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {
            const response = await axios.put(`${backEndURL}/auth/resetpassword`, data, option)
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
                navigate("/auth/resetpassword/result");
            }
        }
    });

    useEffect(() => {
        validateResetPasswordToken();
    }, [])
    
    const onChangeInputHandle = (e) => {
        const { name, value } = e.target;
        setUpdateUser({...updateUser, [name]: value});
    }

    const submitResetPasswordHandle = () => {
        resetPassword.mutate(updateUser)
    }

    const onEnterKeyup = (e) => {
        if(e.keyCode === 13) {
            submitResetPasswordHandle();
        }
    }

    if(!flag) {
        return <></>
    }

    if(flag)
    return (
        <div css={s.container} onKeyUp={onEnterKeyup}>
            <header css={s.headerContainer}>
                <img css={s.imgCss} src="../main/logo1.png" />
            </header>

            <div css={s.comment}><MdLockReset/>&nbsp;Reset Password&nbsp;<MdLockReset/></div>

            <main css={s.mainContainer}>
                <div css={s.input}>
                    <label css={s.inputLabel}>Password</label>
                    <AuthInput type="password" name="password" onChange={onChangeInputHandle} />
                    <div css={s.errorMsg}>{errorMessage.data.password}</div>
                </div>
                <div css={s.input}>
                    <label css={s.inputLabel}>Check Password</label>
                    <AuthInput type="password" name="checkPassword" onChange={onChangeInputHandle} />
                </div>
            </main>
            <footer css={s.footerContainer}>
                <button css={s.checkButton} onClick={submitResetPasswordHandle}>확인</button>
            </footer>
            
        </div>
    );
};

export default ResetPassword;