import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../../atoms/Auth/AuthAtom';


const AuthRoute = ({ path, element }) => {
    const [ authState, setAuthState ] = useRecoilState(authenticatedState);
    const authPaths = ["/auth"]
    const guestPaths = ["/lunchselect/room/guest"]

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

    if(guestPaths.filter(guestPath => path.startsWith(guestPath)).length > 0) {
        return element
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

export default AuthRoute;