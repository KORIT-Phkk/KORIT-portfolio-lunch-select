import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { authenticatedState } from './../../../atoms/Auth/AuthAtom';


const AuthRouteReactQuery = ({ path, element }) => {
    const [ authState, setAuthState ] = useRecoilState(authenticatedState);
    const authPaths = ["/auth"]

    const authenticate = useQuery(["authenticate"], async ()=> {
        const accessToken = `Bearer ${localStorage.getItem("accessToken")}`;
        const response = await axios.get("http://localhost:8080/auth/authenticate", 
        {headers: {Authorization: accessToken}});
        return response;
    }, {
        onSuccess: (response) => {
            if(response.status === 200) {
                if(response.data) {
                    setAuthState(true);
                }
            }
        }
    })

    if(authenticate.isLoading) {
        return <div>로딩중...</div>;
    }

    if(authPaths.filter(authPath => path.startsWith(authPath)).length > 0) {
        if(authState) {
            return <Navigate to="/" />;
        } else {
            return element;
        }
    }

    if(!authState) {
        return <Navigate to="/auth/login" />;
    }

    return element;

};

export default AuthRouteReactQuery;