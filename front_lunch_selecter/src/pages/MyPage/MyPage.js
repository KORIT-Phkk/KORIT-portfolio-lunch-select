/** @jsxImportSource @emotion/react */
import * as s from './style';
import React, { useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../atoms/Auth/AuthAtom';

const MyPage = () => {
    const [ authState, setAuthState ] = useRecoilState(authenticatedState);
    const [ profileImgURL, setprofileImgURL ] = useState();

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
        setprofileImgURL("http://localhost:8080/image/profile/" + response.data.profileImg);
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

    const profileClickHandle = () => {
        navigate("/mypage/ProfileImgChange");
    }

    const backButtonHandle = () => {
        navigate("/")
      }
    

    return (
        <div css={s.container}>
            <IoMdArrowRoundBack  css={s.backButton} onClick={backButtonHandle}/>
            <header css={s.headerContainer} onClick={profileClickHandle}>
                <div css={s.imgBox}>
                    <img css={s.img} src={profileImgURL} alt="" />
                    <input css={s.fileInput} type="file"/>
                </div>
            </header>
            <main css={s.mainContainer}>
                <div css={s.email}>{email}</div>
                <button css={s.passwordChange} onClick={passwordChangeClickHandle}>비밀번호변경</button>
                <div css={s.name}>{name}</div>
                <div css={s.phone}>{phone}</div>
            </main>
            <footer css={s.footerContainer}>
                <button css={s.userDelete} onClick={userDeleteClickHandle}>
                    회원탈퇴
                </button>
            </footer>
        </div>
    );
};

export default MyPage;