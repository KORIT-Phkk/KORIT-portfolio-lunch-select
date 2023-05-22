/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as s from './style'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

const FindEmailResult = () => {
    const { name, phone } = useParams();
    const [ refresh, setRefresh] = useState(true);
    const [ email, setEmail ] = useState("");
    const navigate = useNavigate();

    const getEmail = useQuery(["getEmail"], async () => {
        setRefresh(false); 
        const option = {
            params: {
                name: name,
                phone: phone
            }
        }
        try {
            const response = await axios.get("http://localhost:8080/auth/findemail", option);
            return response;
        } catch (error) {
            alert("사용자 정보가 존재하지 않습니다.")
            navigate("/auth/findemail/")
            return error;
        }
    }, {
        enabled: refresh,
        onSuccess: (response) => {
            if(response.status === 200){
                setEmail(response.data);
            }
        }
    })

    if(!getEmail.isLoading)
    return (
        <div css={s.container}>
            <header css={s.header}>
                <h1 css={s.logo}>Find Email</h1> 
            </header>
            <main css={s.mainContainer}>
                <div>{email}</div>
            </main>

            <footer css={s.footerContainer}>
                <div css={s.login}><Link to="/auth/login">로그인</Link></div>
            </footer>
        </div>
    );
};

export default FindEmailResult;