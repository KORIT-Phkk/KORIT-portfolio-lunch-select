/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoMdContact } from 'react-icons/io';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../../components/userInfoGroup/UserInfo';
import * as s from './style';
import { Reveal, Timeline, Tween } from 'react-gsap'

const Main = () => {
    const navigate = useNavigate();
    const [ isOpen, setIsOpen ] = useState(false);
    const [ joinCode, setJoinCode ] = useState("");
    const [imageSrc, setImageSrc] = useState("../main/logo1.png");
    const [isClicked, setIsClicked] = useState(false);
    const [ userId, setUserId ] = useState("");
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
    
    const imageHandle = () => {
        if(isClicked){
            setImageSrc("../main/logo1.png");
            setIsClicked(false);
        }else{
            setImageSrc("../main/logo2.png");
            setIsClicked(true);
        }
    }

    return (
        <div>
            {!showElements && 
                <Reveal repeat>
                    <Tween from={{ opacity: 0 }} duration={2}>
                        <h3>Hello</h3>
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
                            <div css={s.logoContainer}>
                                <img css={s.logo} onClick={imageHandle} src={imageSrc} alt=""/>
                            </div>
                        </header>

                        <main css={s.mainContainer}>
                            <div css={s.lunchSelect}>
                                <button css={s.lunchButton} onClick={lunchSelectClickHandle} >점심</button>
                            </div>
                        </main>

                        <footer css={s.footerContainer}>
                        </footer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Main;