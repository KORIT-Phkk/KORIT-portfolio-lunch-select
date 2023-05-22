/** @jsxImportSource @emotion/react */
import * as s from './style'
import React, { useState } from 'react';
import AuthInput from '../../components/auth/AuthInput';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const FindEmail = () => {
    const [ findUser, setFindUser ] = useState({name: "", phone: ""});
    const [ refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    console.log(refresh)

    const onChangeHandle = (e) => {
        const { name, value } = e.target
        setFindUser({...findUser, [name]: value})
    }

    const getEmail = useQuery(["getEmail"], async () => {
        setRefresh(false); 
        const option = {
            params: {
                name: findUser.name,
                phone: findUser.phone
            }
        }
        try {
            const response = await axios.get("http://localhost:8080/auth/findemail", option);
            return response;
        } catch (error) {
            alert("사용자 정보가 존재하지 않습니다.")
            return error;
        }
    }, {
        enabled: refresh,
        onSuccess: (response) => {
            if(response.status === 200){
                navigate("/auth/findemail/result")
            }
        }
    })

    const onClickSubmitHandle = () => {
        setRefresh(true);
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