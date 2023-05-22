/** @jsxImportSource @emotion/react */
import { useMutation } from 'react-query';
import AuthInput from '../../components/auth/AuthInput';
import * as s from './style'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { RiLockPasswordFill } from 'react-icons/ri';

const FindPassword = () => {
    const [ email, setEmail ] = useState("");
    const navigate = useNavigate();

    const onChangeHandle = (e) => {
        setEmail(e.target.value);
    }

    const findPassword = useMutation(async (email) => {
        try {
            const response = await axios.post("http://localhost:8080/auth/findpassword", email);
            alert("비밀번호 재설정 이메일이 발송되었습니다.")
            navigate("/auth/login")
            return response;
        } catch(error) {
            alert(error.response.data.errorData.error)
            return error;
        }
    });

    const submitClickHandle = () => {
        findPassword.mutate({
            email: email
        })
    }

    return (
        <div css={s.container}>
            <header css={s.headerContainer}>
                <img src="../../main/logo1.png"/>
            </header>
            <div css={s.comment}><RiLockPasswordFill/> Find Password <RiLockPasswordFill/></div>
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