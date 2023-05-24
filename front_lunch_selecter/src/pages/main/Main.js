/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { IoMdContact } from 'react-icons/io';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../../components/userInfoGroup/UserInfo';
import * as s from './style';

const Main = () => {
    const navigate = useNavigate();
    const [ isOpen, setIsOpen ] = useState(false);
    const [ joinCode, setJoinCode ] = useState("");
    const [ masterRoomCode, setMasterRoomCode ] = useState("");
    const userInfoHandle = () => {
        setIsOpen(!isOpen)
    }

    const queryClient = useQueryClient();

    const lunchSelectRoom = useMutation(async () => {
        try {
            const option = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                }
            };
            const response = await axios.post("http://localhost:8080/lunchselect/room", {}, option);
            window.location.href = response.data;
            // navigate(response);
            console.log(response.data);
            return response;
        } catch(error) {
            alert("관리자에게 문의하세요.");
            return error;
        }
    });

    

    if(lunchSelectRoom.isLoading){
        return <div>불러오는중</div>
    }
  
    const lunchSelectClickHandle = () => {
        lunchSelectRoom.mutate();
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
                    <button css={s.lunchButton} >참여하기</button>
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