/** @jsxImportSource @emotion/react */
import { useMutation } from 'react-query';
import * as s from './style'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { RiLockPasswordFill } from 'react-icons/ri';
import AuthInput from '../../../../components/auth/AuthInput';
import { backEndURL } from '../../../../Config/URL/URL';

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
            const response = await axios.post(`${backEndURL}/auth/findpassword`, email);
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
        if(!loadingFlag) {
            findPassword.mutate({
                email: email
            })
        }
    }

    const onEnterKeyUp = (e) => {
        if(e.keyCode === 13) {
            submitFindPasswordHandle();
        }
    }

    const findEmailHandle = () => {
        navigate("/auth/findemail");
    }

    return (
        <div css={s.container} onKeyUp={onEnterKeyUp}>
            <header css={s.headerContainer}>
                <img css={s.imgCss} src="../../main/logo1.png"/>
            </header>
            <div css={s.comment}><RiLockPasswordFill/> &nbsp;Find Password&nbsp; <RiLockPasswordFill/></div>
            <main css={s.mainContainer}>
                <label css={s.inputLabel}>Email</label>
                <AuthInput disabled={loadingFlag} type="email" onChange={onChangeInputHandle} name="email" />
                <div css={s.errorMsg}>{errorMessage.email}</div>            
            </main>
            <footer css={s.footerContainer}>
                <button css={s.checkButton} onClick={submitFindPasswordHandle} disabled={loadingFlag}>
                    {loadingFlag ? 'Loading...' : '확인'}
                    </button>
                <button css={s.findEmail} onClick={findEmailHandle}>이메일 찾기</button>
            </footer>
        </div>
    );
};

export default FindPassword;