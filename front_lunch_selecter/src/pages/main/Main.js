/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './style'
import { Link } from 'react-router-dom';
import { IoMdContact } from 'react-icons/io';

const Main = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div css={s.container}>
            <header css={s.headerContainer}>
                <div css={s.setting}>
                    <Link to='/login' css={s.logoutButton}>Logout</Link>
                    <IoMdContact onClick={() => setVisible(!visible)} css={s.settingButton}>{visible ? 'Hide' : 'Show'}</IoMdContact>
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
                    <div css={s.info}> 
                        {visible && 
                            <div css={s.myInfo}>
                                <header>
                                    <div>
                                        name
                                        email
                                    </div>
                                </header>
                                <main>
                                    수정
                                </main>
                                <footer>
                                    <button css={s.logout}>Logout</button>
                                </footer>
                            </div>}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Main;