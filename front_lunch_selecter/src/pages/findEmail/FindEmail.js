/** @jsxImportSource @emotion/react */
import * as s from './style'
import React, { useState } from 'react';
import AuthInput from '../../components/auth/AuthInput';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdAlternateEmail } from 'react-icons/md'

const FindEmail = () => {
    const [ findUser, setFindUser ] = useState({name: "", phone: ""});
    const [ refresh, setRefresh] = useState(false);
    const navigate = useNavigate();


    const onChangeHandle = (e) => {
        const { name, value } = e.target
        setFindUser({...findUser, [name]: value})
    }

    const getEmail = useQuery(["getEmail"], async () => {
        const option = {
            params: {
                name: findUser.name,
                phone: findUser.phone
            }
        }

        const response = await axios.get("http://localhost:8080/auth/findEmail", option)
        return response

        
    }, {
        enabled: refresh,
        onSuccess: () => {
            setRefresh(false);
            navigate("/auth/findemail/result")
        },
        onError: (error) => {
            setRefresh(false);
            alert("사용자 정보가 존재하지 않습니다.")
        }
    })

    const onClickSubmitHandle = () => {
        setRefresh(true);
    }

    const loginHandleClick = () => {
        navigate("/auth/login");
    }

    return (
        <div css={s.container}>
            <header css={s.headerContainer}>
                <img src="../main/logo1.png"/>
            </header>

            <div css={s.comment}><MdAlternateEmail/> Find Email <MdAlternateEmail/></div>
            <main css={s.mainContainer}>
                <div css={s.input}>
                    <label css={s.nameLabel}>Name</label>
                    <AuthInput type="text" onChange={onChangeHandle} name="name" />
                    <label css={s.PhoneLabel}>Phone</label>
                    <AuthInput type="tel" onChange={onChangeHandle} name="phone" />
                </div>
            </main>

            <footer css={s.footerContainer}>
                <button css={s.checkButton} onClick={onClickSubmitHandle}>확인</button>
                <button onClick={loginHandleClick} css={s.loginButton}>로그인</button>
            </footer>
        </div>
    );
};

export default FindEmail;