import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { authenticatedState } from './../../../atoms/Auth/AuthAtom';


const AuthRouteReactQuery = ({ path, element }) => {
    const [ authState, setAuthState ] = useRecoilState(authenticatedState);
    const authPath = ["/login", "/register", "/auth"]

    const authenticate = useQuery(["authenticate"], async async => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/auth/authenticate", {params: {accessToken}});
        return response;
    })

    useEffect(() => {
        if(authenticate.isSuccess && authenticate.data.status === 200 && authenticate.data.data) {
            setAuthState(true);
        }
    }, [authenticate.isSuccess, authenticate.data, setAuthState])

    if(authenticate.isLoading) {
        return <div>로딩중...</div>
    }

    if(!authState && path.startsWith(authPath)) {
        return element;
    }

    if(authState && path.startsWith(authPath)) {
        return <Navigate to="/" />;
    }

    return element;
};

export default AuthRouteReactQuery;