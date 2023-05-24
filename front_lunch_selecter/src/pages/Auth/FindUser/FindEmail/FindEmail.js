/** @jsxImportSource @emotion/react */
import * as s from './style'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAlternateEmail } from 'react-icons/md'
import AuthInput from './../../../../components/auth/AuthInput';
import axios from 'axios';

const FindEmail = () => {
    const [ findUser, setFindUser ] = useState({name: "", phone: ""});
    const navigate = useNavigate();

    const onChangeInputHandle = (e) => {
        const { name, value } = e.target
        setFindUser({...findUser, [name]: value})
    }

    const submitFindEmailHandle = async () => {
        const option = {
            params: {
                name: findUser.name,
                phone: findUser.phone
            }
        }
        try {
            const response = await axios.get("http://localhost:8080/auth/findemail", option);
            navigate(`/auth/findemail/result/${response.data}`)
        } catch (error) {
            alert("사용자 정보가 존재하지 않습니다.")
        }
    }

    const onEnterKeyUp = (e) => {
        if(e.keyCode === 13) {
            submitFindEmailHandle();
        }
    }

    return (
        <div css={s.container} onKeyUp={onEnterKeyUp}>
            <header css={s.headerContainer}>
                <img src="../main/logo1.png"/>
            </header>

            <div css={s.comment}><MdAlternateEmail/> Find Email <MdAlternateEmail/></div>
            
            <main css={s.mainContainer}>
                <div css={s.input}>
                    <label css={s.nameLabel}>Name</label>
                    <AuthInput type="text" onChange={onChangeInputHandle} name="name" />
                    <label css={s.PhoneLabel}>Phone</label>
                    <AuthInput type="tel" onChange={onChangeInputHandle} name="phone" />
                </div>
            </main>

            <footer css={s.footerContainer}>
                <button css={s.checkButton} onClick={submitFindEmailHandle}>확인</button>
            </footer>
        </div>
    );
};

export default FindEmail;