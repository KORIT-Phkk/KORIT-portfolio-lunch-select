/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoMdContact } from 'react-icons/io';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../../components/userInfoGroup/UserInfo';
import * as s from './style';
import { Reveal, Tween } from 'react-gsap'

const Main = () => {
    const navigate = useNavigate();
    const [ isOpen, setIsOpen ] = useState(false);
    const [ joinCode, setJoinCode ] = useState("");
    const [ showElements, setShowElements ] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowElements(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    const userInfoHandle = () => {
        setIsOpen(!isOpen)
    }

    const createRoom = useMutation(async () => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }
        };
        const response = await axios.post("http://localhost:8080/lunchselect/room/create", {}, option);
        window.location.href = response.data;
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

    if(lunchSelectRoom.isLoading){
        return <div>불러오는중</div>
    }

    const lunchSelectClickHandle = () => {
        createRoom.mutate();
    }

    return (
        <div>
            {!showElements && 
                <Reveal repeat>
                    <Tween from={{ opacity: 0 }} duration={2}>
                        <h3 css={s.hello}>気持ちいい</h3>
                    </Tween>
                </Reveal>
            }
            {showElements && (
                <div className='fade-in-elements'>
                    <div css={s.container}>
                        <header css={s.headerContainer}>
                            <div css={s.setting}>
                                <IoMdContact css={s.settingButton} onClick={userInfoHandle} />
                                <UserInfo css={s.userInfo} isOpen={isOpen}/>
                            </div>
                        </header>

                        <main css={s.mainContainer}>
                            <img css={s.imgCss} src="../main/logo1.png" alt=""/>
                        </main>

                        <footer css={s.footerContainer}>
                            <button css={s.lunchButton} onClick={lunchSelectClickHandle} >점심</button>
                        </footer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Main;