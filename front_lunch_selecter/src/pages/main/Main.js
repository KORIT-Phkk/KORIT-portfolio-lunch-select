/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { IoMdContact } from 'react-icons/io';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../../components/userInfoGroup/UserInfo';
import * as s from './style';
import Loading from '../../components/Loading/Loading';
import { Reveal } from 'react-gsap';
import { Tween } from 'react-gsap';
import { backEndURL } from '../../Config/URL/URL';

const Main = () => {
    const navigate = useNavigate();
    const [ isOpen, setIsOpen ] = useState(false);
    const [ joinCode, setJoinCode ] = useState("");

    const userInfoHandle = () => {
        setIsOpen(!isOpen)
    }

    const createRoom = useMutation(async () => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }
        };
        const response = await axios.post(`${backEndURL}/lunchselect/room/create`, {}, option);
        window.location.href = response.data;
    });

    const lunchSelectRoom = useMutation(async () => {
        try {
            const option = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                }
            };
            const response = await axios.post(`${backEndURL}/lunchselect/room`, {}, option);
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
        const response = await axios.post(`${backEndURL}/lunchselect/roomuserinsert`, {
            guestUrl: joinCode
        }, option);
        return response
    });

    if(lunchSelectRoom.isLoading){
        return <><Loading /></>
    }

    const lunchSelectClickHandle = () => {
        createRoom.mutate();
    }

    return (
        <div>
            <div css={s.container}>
                <header css={s.headerContainer}>
                    <div css={s.setting}>
                        <IoMdContact css={s.settingButton} onClick={userInfoHandle} />
                        <UserInfo css={s.userInfo} isOpen={isOpen}/>
                    </div>
                </header>

                <main css={s.mainContainer}>
                    <Reveal repeat>
                        <Tween from={{opacity: 0}} duration={2}>
                            <img css={s.imgCss} src="../main/logo1.png" alt=""/>
                        </Tween>
                    </Reveal>
                </main>

                <footer css={s.footerContainer}>
                    <button css={s.lunchButton} onClick={lunchSelectClickHandle} >점심 메뉴 추천!</button>
                </footer>
            </div>
        </div>
    );
};

export default Main;