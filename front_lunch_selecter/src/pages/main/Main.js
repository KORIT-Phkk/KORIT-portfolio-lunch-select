/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react';
import * as s from './style'
import { IoMdContact } from 'react-icons/io';
import UserInfo from '../../components/userInfoGroup/UserInfo';
import { Link } from 'react-router-dom';

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
                    <Link css={s.lunchButton} to='/lunchselect'>점심</Link>
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