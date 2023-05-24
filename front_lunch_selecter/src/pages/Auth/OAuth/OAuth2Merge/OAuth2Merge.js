import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { useMutation } from 'react-query';
import * as s from './style';
import { AiFillNotification } from 'react-icons/ai'

const OAuth2Merge = () => {
    const providerMerge = useMutation(async (mergeData) => {
        try{
            const response = await axios.put("http://localhost:8080/auth/oauth2/merge", mergeData);
            setErrorMessage("");
            return response;
        } catch(error){
            setErrorMessage(error.response.data);
            return error;
        }
    },{
        onSuccess: (response) => {
            if(response.status === 200){
                alert("계정 통합 완료")
                window.location.replace("/auth/login");
            }
        }
    });

    const [ password, setPassword ] = useState("");
    const [ errorMessage, setErrorMessage] = useState("");
    const [ searchParams, setSearchParams ] = useSearchParams();
    const email = searchParams.get("email");
    const provider = searchParams.get("provider");
    const naigate = useNavigate();
    
    const passwordChangeHandle = (e) => {
        setPassword(e.target.value);
    }

    const providerMergeSubmitHandle = () => {
        if(password === "") {
            alert("공백은 입력할 수 없습니다.")
            return
        }
        providerMerge.mutate({
            email,
            password,
            provider
        })
    }

    const cancelHandle = () => {
        naigate("/auth/login");
    }

    return (
        <div css={s.container}>
            <header css={s.headerContainer}>
                <img css={s.imgCss} src="../../main/logo1.png"/>
            </header>
            <div css={s.comment}><AiFillNotification/>&nbsp;Notice&nbsp;<AiFillNotification/></div>
            <main css={s.mainContainer}>
                <h1 css={s.question}>
                    {/* <div>"{email}" 계정을 "{provider}"(과)와</div>
                    <div css={s.point}>통합</div>
                    <div>하는 것에 동의하십니까?</div> */}
                    <div>"{email}" 계정을 "{provider}"(과)와</div>
                    <div><span css={s.point}>통합</span>하는 것에 동의하십니까?</div>
                </h1>
                <input css={s.passwordBox} type="password" onChange={passwordChangeHandle} placeholder='기존 비밀번호를 입력해주세요'/>
                <p css={s.errMsg}>{errorMessage}</p>
            </main>

            <footer css={s.footerContainer}>
                <button css={s.buttonCss1} onClick={providerMergeSubmitHandle}>동의</button>
                <button css={s.buttonCss2} onClick={cancelHandle}>취소</button>
            </footer>
        </div>
    );
};

export default OAuth2Merge;