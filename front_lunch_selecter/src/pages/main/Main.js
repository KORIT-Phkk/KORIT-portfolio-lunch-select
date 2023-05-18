/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react';
import * as s from './style'
import { IoMdContact } from 'react-icons/io';
import UserInfo from '../../components/userInfoGroup/UserInfo';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const Main = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const userInfoHandle = () => {
        setIsOpen(!isOpen)
    }

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

    if(lunchSelectRoom.isLoading){
        return <div>불러오는중</div>
    }
  
    const lunchSelectClickHandle = () => {
        lunchSelectRoom.mutate();
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
            </main>
            <footer css={s.footerContainer}>
                <div css={s.rangeSetting}>
                    
                </div>
            </footer>
        </div>
    );
};

export default Main;