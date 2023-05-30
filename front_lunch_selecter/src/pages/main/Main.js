/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { IoMdContact } from 'react-icons/io';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../../components/userInfoGroup/UserInfo';
import * as s from './style';

const Main = () => {
    const navigate = useNavigate();
    const [ isOpen, setIsOpen ] = useState(false);
    const [ joinCode, setJoinCode ] = useState("");

    const [ userId, setUserId ] = useState(""); 

    const [ masterRoomCode, setMasterRoomCode ] = useState("");
    const userInfoHandle = () => {
        setIsOpen(!isOpen)
    }

    const getUserInfo = useQuery(["getUserInfo"], async () => {
        const accessToken = `Bearer ${localStorage.getItem("accessToken")}`;
        const response = await axios.get("http://localhost:8080/auth/userInfo", {
            headers: {
                Authorization: accessToken
            }
        });
        setUserId(response.data.userId)
        return response;
    });

    const lunchSelectRoom = useMutation(async () => {
        try {
            const option = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                }
            };
            const response = await axios.post("http://localhost:8080/lunchselect/room", {}, option);
            window.location.href = response.data;
            return response;
        } catch(error) {
            alert("관리자에게 문의하세요.");
            return error;
        }
    });

   

    const userInfoInsert = useMutation(async() => {
        
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.post("http://localhost:8080/lunchselect/roomuserinsert", {
            guestUrl: joinCode
        }, option);
        return response
    });

    if(getUserInfo.isLoading) {
        return <></>;
    }

    if(lunchSelectRoom.isLoading){
        return <div>불러오는중</div>
    }


    const lunchSelectClickHandle = () => {
        lunchSelectRoom.mutate();
    }

    const lunchSelectJoinClickHandle = () => {
        userInfoInsert.mutate();
        window.location.href = "http://localhost:3000/lunchselect/room/guest/" + joinCode;
    }

    const joinCodeInputHandle = (e) => {
        setJoinCode(e.target.value);
    }

    return (
        <div css={s.container}>
            <header css={s.headerContainer}>
                <div css={s.setting}>
                    <IoMdContact css={s.settingButton} onClick={userInfoHandle} />
                    <UserInfo css={s.userInfo} isOpen={isOpen}/>
                </div>
                <div css={s.logoContainer}>
                    <img css={s.logo} src="../main/logo1.png" alt=""/>
                </div>
            </header>
            <main css={s.mainContainer}>
                <div css={s.lunchSelect}>
                    <button css={s.lunchButton} onClick={lunchSelectClickHandle} >점심</button>
                    
                </div>
                <input css={s.joinUrlInput} type="text" onChange={joinCodeInputHandle} placeholder='참여 코드 입력'/>
                <div css={s.lunchSelect}>
                    <button css={s.lunchButton} onClick={lunchSelectJoinClickHandle}>참여하기</button>
                </div>
            </main>
            <footer css={s.footerContainer}>
                <div css={s.rangeSetting}>
                    
                </div>
            </footer>
        </div>
    );
};

export default Main;