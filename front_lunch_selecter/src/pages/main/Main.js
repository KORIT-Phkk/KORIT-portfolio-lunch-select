/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react';
import * as s from './style'
import { IoMdContact } from 'react-icons/io';
import UserInfo from '../../components/userInfoGroup/UserInfo';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const Main = () => {
    const navigate = useNavigate();
    const [ isOpen, setIsOpen ] = useState(false);
    const [ joinCode, setJoinCode ] = useState("");
    const [ insert, setInsert ] = useState(false);
    const [ userId, setUserId ] = useState(""); 
    const userInfoHandle = () => {
        setIsOpen(!isOpen)
    }

    const queryClient = useQueryClient();

    const lunchSelectRoom = useMutation(async () => {
        try {
            const option = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
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

    const userInfoInsert = useQuery(["userInfoInsert"], async() => {
        const option = {
            params:{
                userId: queryClient.getQueryData("getUserInfo").data.userId
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json"
            }
        }
        const response = await axios.post("http://localhost:8080/lunchselect/roomuserinsert", JSON.stringify({
            userId: queryClient.getQueryData("getUserInfo").data.userId
        }), option);
    },{
        enabled: !insert
    });


    if(lunchSelectRoom.isLoading){
        return <div>불러오는중</div>
    }
  
    const lunchSelectClickHandle = () => {
        lunchSelectRoom.mutate();
    }

    const lunchSelectJoinClickHandle = () => {
        console.log("참여하기 누름?")
        setInsert(true);
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
                    <div css={s.logo}><img src="main/003.png" alt=""/></div>
            </header>
            <main css={s.mainContainer}>
                <div css={s.lunchSelect}>
                    <button css={s.lunchButton} onClick={lunchSelectClickHandle} >점심</button>
                    
                </div>
                <input css={s.joinUrlInput} type="text" onChange={joinCodeInputHandle} placeholder='참여 코드 입력'/>
                <div css={s.lunchSelect}>
                    <button css={s.lunchButton} onClick={lunchSelectJoinClickHandle} >참여하기</button>
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