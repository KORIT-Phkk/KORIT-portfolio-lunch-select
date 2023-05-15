/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import React, { useState } from 'react';
import { QueryClient, useQuery, useQueryClient } from 'react-query';

const userInfoGroup = (isOpen) => css`
    position: absolute;
    top: 100px;
    right: 30px;
    display: ${isOpen ? "flex" : "none"};
    flex-direction: column;
    border: 1px solid #dbdbdb;
    width: 800px;
    height: 800px;
    background-color: white;
    overflow-y: auto;
`;
const headerContainer = css`
    display: flex;
    flex-direction: column;
    height: 200px;
    border-bottom: 1px solid #dbdbdb;
`;

const userName = css`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-size: 50px;
    font-weight: 600;
`;
const userEmail =css`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    font-size: 35px;
    font-weight: 400;
`;
const footerContainer =css`
    display: flex;
    justify-content: center;
`;
const logout = css`
    margin-top: 350px;
    width: 600px;
    height: 80px;
    border: none;
    border: 1px solid #dbdbdb;
    background-color: white;
    font-size: 40px;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;

const UserInfo = ({ isOpen }) => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");

    const info = useQuery(["accessToken"], async () => {
        const accessToken = localStorage.getItem("accessToken")
        const response = await axios.get("http://localhost:8080/auth/userInfo", {params: {accessToken}})
       
        setName(response.data.name)
        setEmail(response.data.email)
        return response;
    });

   
    const logoutClickHandle = () => {
        if(window.confirm("로그아웃할꺼?")){
            localStorage.removeItem("accessToken");
        }
    }

    return (
        <div css={userInfoGroup(isOpen)}>
            <header css={headerContainer}>
                <h1 css={userName}>{name}</h1>
                <h2 css={userEmail}>{email}</h2>
            
            </header>
            <main>

            </main>
            <footer css={footerContainer}>
                <button onClick={logoutClickHandle} css={logout}>Logout</button>
            </footer>
        </div>
    );
};

export default UserInfo;