/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import QueryString from 'qs';
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Category from '../../components/SelectPage/Category/Category';
import * as s from './style';
import Invite from './Invite';


const test = css`
    font-size: 50px;
`;


const LunchSelectGuest = () => {
    const [ name, setName ] = useState("");
    const [ userId, setUserId ] = useState(""); 
    const [ userInsert, setUserInsert ] = useState(false);
    const [ insert, setInsert ] = useState(false);
    const [ markerPosition, setMarkerPosition ] = useState({
        lat: null,
        lng: null
    });
    const [ selectedCategories, setSelectedCategories ] = useState([]);


    const userInfoInsertButton = () => {
        setUserInsert(true);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const getUserInfo = useQuery(["getUserInfo"], async () => {
        const accessToken = `Bearer ${localStorage.getItem("accessToken")}`;
        const response = await axios.get("http://localhost:8080/auth/userInfo", {
            headers: {
                Authorization: accessToken
            }
        });
        setUserId(response.data.userId)
        return response;
    });
    

    const userInfoInsert = useMutation(async() => {
        
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.post("http://localhost:8080/lunchselect/roomuserinsert", {
            // gestUrl: joinCode,
            userId: userId,
            categoryId: [...selectedCategories]
        }, option);
        return response
    });

    if(getUserInfo.isLoading) {
        return <></>;
    }

    const readyHandleOnClick = () => {
        console.log("참여하기 누름?")
        console.log(selectedCategories)
        console.log(userId)
        // userInfoInsert.mutate();
        setInsert(true);
    }


    return (
        <div css={s.container}>
            <header>
            <Invite />

            </header>

            <main>
                <div css={s.categoryBox}>
                    <h1 css={s.category}>카테고리를 선택하시오
                    <Category selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
                    </h1>
                </div>
            </main>
            
            <footer css={s.mainContainer}>
                <div css={s.selectMenu}></div>
                <button css={test} onClick={readyHandleOnClick} >준비완료!</button>
            </footer>
        </div>
    );
}

export default LunchSelectGuest;

