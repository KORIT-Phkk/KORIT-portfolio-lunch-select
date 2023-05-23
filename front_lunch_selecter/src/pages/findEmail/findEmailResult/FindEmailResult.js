/** @jsxImportSource @emotion/react */
import React, {  useState } from 'react';
import * as s from './style'
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { MdSearch } from 'react-icons/md';

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

    const loginHandleClick = () => {
        navigate("/auth/login");
    }

    const findPasswordHandleClick = () => {
        navigate("/auth/findpassword");
    }

    if(!getEmail.isLoading)
    return (
        <div css={s.container}>
            <header css={s.headerContainer}>
                <img src="../../main/logo1.png"/>
            </header>

            <div css={s.comment}><MdSearch/>Your Email<MdSearch/></div>
            
            <main css={s.mainContainer}>
                <div css={s.resultBox}>
                    공사중. 건들지마라
                <div>{email}</div>
                </div>
            </main>

            <footer css={s.footerContainer}>
                <button onClick={findPasswordHandleClick} css={s.findPassword}>비밀번호 찾기</button>
                <button onClick={loginHandleClick} css={s.loginButton}>로그인</button>
            </footer>
        </div>
    );
};

export default FindEmailResult;