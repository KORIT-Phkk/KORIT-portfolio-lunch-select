/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './style';
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../atoms/Auth/AuthAtom';

const MyPage = () => {
    const [ authState, setAuthState ] = useRecoilState(authenticatedState);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ userId, setUserId ] = useState("");
    const [ phone, setPhone ] = useState("");
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
        setPhone(response.data.phone)
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
    const passwordChangeClickHandle = () => {
        navigate("/mypage/passwordchange");
    };

    const userDeleteClickHandle = () => {
        if(window.confirm("회원탈퇴")){
            userDelete.mutate();
            localStorage.removeItem("accessToken");
            setAuthState(false);
            navigate("/auth/login");
        }
    }
    const backButtonHandle = () => {
        navigate("/")
      }
    

    return (
        <div css={s.container}>
            <IoMdArrowRoundBack  css={s.backButton} onClick={backButtonHandle}/>
            <header css={s.headerContainer}>
                <div css={s.userLogoBox}><AiOutlineUser css={s.userLogo}/></div>
            </header>
            <main css={s.mainContainer}>
                <div css={s.email}>{email}</div>
                <button css={s.passwordChange} onClick={passwordChangeClickHandle}>비밀번호변경</button>
                <div css={s.name}>{name}</div>
                <div css={s.phone}>{phone}</div>
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