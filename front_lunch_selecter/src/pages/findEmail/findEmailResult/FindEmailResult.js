/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './style'
import { Link, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { MdSearch } from 'react-icons/md'

const FindEmailResult = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const loginHandleClick = () => {
        navigate("/auth/login");
    }

    if(queryClient.getQueryState("getEmail").status === "loading") {
        return (<div>로딩중...</div>);
    }

    const email = queryClient.getQueryData("getEmail").data;

    return (
        <div css={s.container}>
            <header css={s.headerContainer}>
                <img src="../../main/logo1.png"/>
            </header>

            <div css={s.comment}><MdSearch/>Your Email<MdSearch/></div>
            
            <main css={s.mainContainer}>
                <div css={s.resultBox}>
                <div>{email}</div>
                </div>
            </main>

            <footer css={s.footerContainer}>
                <button onClick={loginHandleClick} css={s.loginButton}>로그인</button>
            </footer>
        </div>
    );
};

export default FindEmailResult;