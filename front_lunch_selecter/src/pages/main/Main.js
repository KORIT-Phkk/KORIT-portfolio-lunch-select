/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react';
import * as s from './style'
import { IoMdContact } from 'react-icons/io';
import { useQuery } from 'react-query';
import axios from 'axios';
import UserInfo from '../../components/userInfoGroup/UserInfo';

const Main = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    
    const userInfoHandle = () => {
        setIsOpen(!isOpen)
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
                    <button css={s.lunchButton}>점심</button>
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