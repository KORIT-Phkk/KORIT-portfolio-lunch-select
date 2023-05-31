/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './style';
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

const MyPage = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ userId, setUserId ] = useState("");
    const navigate = useNavigate();

    const getUserInfo = useQuery(["getUserInfo"], async () => {
        const accessToken = `Bearer ${localStorage.getItem("accessToken")}`;
        const response = await axios.get("http://localhost:8080/auth/userInfo", {
            headers: {
                Authorization: accessToken
            }
        });
        setUserId(response.data.userId)
        setName(response.data.name)
        setEmail(response.data.email)
        return response;
    });

    const userDelete = useMutation(async () => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.delete("http://localhost:8080/auth/delete",
        {data: {userId: userId}},option);
        return response;
    });
    
    const userDeleteClickHandle = () => {
        userDelete.mutate();
        if(window.confirm("정말로 회원탈퇴를 할꼬야?")){
            localStorage.removeItem("accessToken");
            navigate("/auth/login");
        }
    }
    

    return (
        <div css={s.container}>
            <header css={s.headerContainer}>
                <div css={s.userLogoBox}><AiOutlineUser css={s.userLogo}/></div>
            </header>
            <main css={s.mainContainer}>
                <div css={s.email}>{email}</div>
                <button css={s.passwordChange}>비민번호변경</button>
                <div css={s.name}>{name}</div>
                <button css={s.phonNumChange}>전화번호변경</button>
            </main>
            <footer css={s.footerContainer}>
                <button css={s.userSecede} onClick={userDeleteClickHandle}>
                    회원탈퇴
                </button>
            </footer>
        </div>
    );
};

export default MyPage;