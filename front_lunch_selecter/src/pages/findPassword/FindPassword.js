/** @jsxImportSource @emotion/react */
import { useMutation } from 'react-query';
import AuthInput from '../../components/auth/AuthInput';
import * as s from './style'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const FindPassword = () => {
    const [ email, setEmail ] = useState("");
    const navigate = useNavigate();

    const onChangeHandle = (e) => {
        setEmail(e.target.value);
    }

    const findPassword = useMutation(async (email) => {
        try {
            const response = await axios.put("http://localhost:8080/auth/findPassword", email);
            return response;
        } catch(error) {
            alert(error.response.data.errorData.error)
            return error;
        }
    }, {
        onSuccess: (response) => {
            if(response.status === 200) {
                alert("비밀번호 재설정 이메일이 발송되었습니다.")
                navigate("/auth/login")
            }
        }
    })

    const submitClickHandle = () => {
        findPassword.mutate({
            email: email
        })
    }

    return (
        <div css={s.container}>
            <header css={s.header}>
                <h1 css={s.logo}>Find Password</h1> 
            </header>
            <main css={s.mainContainer}>
                <div css={s.input}>
                    <label css={s.inputLabel}>email</label>
                    <AuthInput type="email" onChange={onChangeHandle} name="email" />
                </div>
            
            </main>
            <footer css={s.footerContainer}>
                <button css={s.checkButton} onClick={submitClickHandle}>확인</button>
            </footer>
        </div>
    );
};

export default FindPassword;