/** @jsxImportSource @emotion/react */
import * as s from './style'
import React, { useState } from 'react';
import AuthInput from '../../components/auth/AuthInput';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const FindEmail = ({ param }) => {
    const [ findUser, setFindUser ] = useState({name: "", phone: ""});
    const navigate = useNavigate();

    const onChangeHandle = (e) => {
        const { name, value } = e.target
        setFindUser({...findUser, [name]: value})
    }

    const onClickSubmitHandle = () => {
        if(findUser.name === "" || findUser.phone) {
            alert("공백은 입력할 수 없습니다.")
            return
        }
        navigate(`/auth/findemail/result/${findUser.name}/${findUser.phone}`)
    }

    return (
        <div css={s.container}>
            <header css={s.header}>
                <h1 css={s.logo}>Find Email</h1> 
            </header>
            <main css={s.mainContainer}>
                <div css={s.input}>

                <label css={s.inputLabel}>name</label>
                    <AuthInput type="text" onChange={onChangeHandle} name="name" />

                    <label css={s.inputLabel}>phone</label>
                    <AuthInput type="tel" onChange={onChangeHandle} name="phone" />
                </div>
            </main>

            <footer css={s.footerContainer}>
                <button css={s.checkButton} onClick={onClickSubmitHandle}>확인</button>
            </footer>
            <div css={s.login}><Link to="/auth/login">로그인</Link></div>
        </div>
    );
};

export default FindEmail;