/** @jsxImportSource @emotion/react */
import { useMutation } from 'react-query';
import * as s from './style'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { RiLockPasswordFill } from 'react-icons/ri';
import AuthInput from '../../../../components/auth/AuthInput';

const FindPassword = () => {
    const [ email, setEmail ] = useState("");
    const [ loadingFlag, setLoadingFlag ] = useState(false);
    const [ errorMessage, setErrorMessage] = useState({email: ""});
    const navigate = useNavigate();

    const onChangeInputHandle = (e) => {
        setEmail(e.target.value);
    }

    const findPassword = useMutation(async (email) => {
        try {
            const response = await axios.post("http://localhost:8080/auth/findpassword", email);
            navigate("/auth/findpassword/result")
            return response;
        } catch(error) {
            setErrorMessage({email: error.response.data.errorData.error})
            setLoadingFlag(false);
            return error;
        }
    });

    const submitFindPasswordHandle = () => {
        setLoadingFlag(true);
        findPassword.mutate({
            email: email
        })
    }

    const onEnterKeyUp = (e) => {
        if(e.keyCode === 13) {
            submitFindPasswordHandle();
        }
    }

    return (
        <div css={s.container} onKeyUp={onEnterKeyUp}>
            <header css={s.headerContainer}>
                <img src="../../main/logo1.png"/>
            </header>
            <div css={s.comment}><RiLockPasswordFill/> Find Password <RiLockPasswordFill/></div>
            <main css={s.mainContainer}>
                <div css={s.input}>
                    <label css={s.inputLabel}>Email</label>
                    <AuthInput type="email" onChange={onChangeInputHandle} name="email" disabled={loadingFlag}/>
                    <div css={s.errorMsg}>{errorMessage.email}</div>
                </div>
            
            </main>
            <footer css={s.footerContainer}>
                <button css={loadingFlag? s.disabledCheckButton : s.checkButton} onClick={submitFindPasswordHandle}>확인</button>
            </footer>
        </div>
    );
};

export default FindPassword;