import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { useMutation } from 'react-query';

const OAuth2Merge = () => {
    const providerMerge = useMutation(async (mergeData) => {
        try{
            const response = await axios.put("http://localhost:8080/auth/oauth2/merge", mergeData);
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
    const navigate = useNavigate();
    
    const onChangeInputHandle = (e) => {
        setPassword(e.target.value);
    }

    const submitProviderMergeHandle = () => {
        providerMerge.mutate({
            email,
            password,
            provider
        })
    }

    const onClickCancleButtonClick = () => {
        navigate("/auth/login");
    }

    const onEnterKeyUp = (e) => {
        if(e.keyCode === 13) {
            submitProviderMergeHandle();
        }
    }

    return (
        <div onKeyUp={onEnterKeyUp}>
            <h1>"{email}" 계정을 "{provider}"와 통합하는 것에 동의 하십니까?</h1>
            <input type="password" onChange={onChangeInputHandle} placeholder='기존 계정의 비밀번호를 입력하세요.'/>
            <p>{errorMessage}</p>
            <button onClick={submitProviderMergeHandle}>동의</button>
            <button onClick={onClickCancleButtonClick}>취소</button>
        </div>
    );
};

export default OAuth2Merge;