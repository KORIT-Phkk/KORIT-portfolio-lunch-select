/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './style'
import { Link } from 'react-router-dom';
import { useQueryClient } from 'react-query';

const FindEmailResult = () => {
    const queryClient = useQueryClient();



    if(queryClient.getQueryState("getEmail").status === "loading") {
        return (<div>로딩중...</div>);
    }

    const email = queryClient.getQueryData("getEmail").data;

    console.log(email);

    return (
        <div css={s.container}>
            <header css={s.header}>
                <h1 css={s.logo}>Find Email</h1> 
            </header>
            <main css={s.mainContainer}>
                <div>{email}</div>
            </main>

            <footer css={s.footerContainer}>
                <div css={s.login}><Link to="/auth/login">로그인</Link></div>
            </footer>
        </div>
    );
};

export default FindEmailResult;