/** @jsxImportSource @emotion/react */
import * as s from './style';
import axios from 'axios';
import React, { useState } from 'react';
import { QueryClient, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../atoms/Auth/AuthAtom';



const UserInfo = ({ isOpen }) => {
    const [ authState, setAuthState ] = useRecoilState(authenticatedState);
    const navigate = useNavigate();
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");

    const getUserInfo = useQuery(["getUserInfo"], async () => {
        const accessToken = `Bearer ${localStorage.getItem("accessToken")}`;
        const response = await axios.get("http://localhost:8080/auth/userInfo", {
            headers: {
                Authorization: accessToken
            }
        });
        
        setName(response.data.name)
        setEmail(response.data.email)
        return response;
    });

   
    const logoutClickHandle = () => {
        if(window.confirm("로그아웃할꺼?")){
            localStorage.removeItem("accessToken");
            setAuthState(false);
            navigate("/auth/login");
        }
    }

    return (
        <div css={s.userInfoGroup(isOpen)}>
            <header css={s.headerContainer}>
                <h1 css={s.userName}>{name}</h1>
                <h2 css={s.userEmail}>{email}</h2>
            
            </header>
            <main css={s.mainContainer}>
                <button css={s.myInfoUpdate}>
                    내정보 수정
                </button>
            </main>
            <footer css={s.footerContainer}>
                <button onClick={logoutClickHandle} css={s.logout}>Logout</button>
            </footer>
        </div>
    );
};

export default UserInfo;