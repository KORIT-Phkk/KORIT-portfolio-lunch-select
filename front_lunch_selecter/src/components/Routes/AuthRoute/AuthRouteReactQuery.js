import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { authenticatedState } from './../../../atoms/Auth/AuthAtom';


const AuthRouteReactQuery = ({ path, element }) => {
    const [ refresh, setRefresh ] = useRecoilState(authenticatedState);
    const permitAll = ["/login", "/register"]


    const authenticate = useQuery(["authenticate"], async async => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/auth/authenticate", {params: {accessToken}});
        return response;
    }, {
        enabled: refresh
    })

    if(!authenticate.isLoading) {
        if(!authenticate.data) {
            if(permitAll.includes(path)) {
                return element;
            }
            return <Navigate to="/login" />;
        }

        if(permitAll.includes(path)) {
            return <Navigate to="/" />;
        }
        return element;
    }
};

export default AuthRouteReactQuery;