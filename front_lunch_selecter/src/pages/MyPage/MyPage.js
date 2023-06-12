/** @jsxImportSource @emotion/react */
import * as s from './style';
import React, { useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../atoms/Auth/AuthAtom';
import { AiOutlineUser } from 'react-icons/ai';
import { backEndURL } from '../../Config/URL/URL';

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
        const response = await axios.get(`${backEndURL}/auth/userInfo`, {
            headers: {
                Authorization: accessToken
            }
        });
        setprofileImgURL(`${backEndURL}/image/profile/` + response.data.profileImg);
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
        const response = await axios.delete(`${backEndURL}/auth/delete`,
        {data: {userId: userId}},option);
        
        return response;
    });
    const passwordChangeClickHandle = () => {
        navigate("/mypage/passwordchange");
    };

    const userDeleteClickHandle = () => {
        if(window.confirm("회원탈퇴하시겠습니까?")){
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
    
    if(!getUserInfo.isLoading)
    console.log(profileImgURL)
    return (
        <div css={s.container}>
            <IoMdArrowRoundBack  css={s.backButton} onClick={backButtonHandle}/>
            <header css={s.headerContainer}>
                <div css={s.comment}><AiOutlineUser/>&nbsp;My Profile&nbsp;<AiOutlineUser/></div>
                <div css={s.imgBox} onClick={profileClickHandle}>
                    <img css={s.img} src={profileImgURL} alt="" />
                    <input css={s.fileInput} type="file"/>
                </div>
            </header>

            <main css={s.mainContainer}>
                <div css={s.infrom}>{email}</div>
                <div css={s.infrom}>{name}</div>
                <div css={s.infrom}>{phone}</div>
            </main>

            <footer css={s.footerContainer}>
                <button css={s.passwordChange} onClick={passwordChangeClickHandle}>비밀번호변경</button>
                <button css={s.userDelete} onClick={userDeleteClickHandle}>회원탈퇴 </button>
            </footer>
        </div>
    );
};

export default MyPage;