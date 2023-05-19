/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import Category from '../../components/SelectPage/Category/Category';
import Location from '../../components/SelectPage/Location/Location';
import * as s from './style';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { css } from '@emotion/react';


const test = css`
    font-size: 50px;
`;


const LunchSelectGuest = () => {
    const [ name, setName ] = useState("");
    const [ userId, setUserId ] = useState(""); 
    const [ userInsert, setUserInsert ] = useState(false);
    const queryClient = useQueryClient();
    const [ insert, setInsert ] = useState(false);
    const [ markerPosition, setMarkerPosition ] = useState({
        lat: null,
        lng: null
    });

    
    useEffect(() => {
        const userInfoInsert = async() => {
            const accessToken = `Bearer ${localStorage.getItem("accessToken")}`;
            const option = {
                params: {
                    userId
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    "Content-Type": "application/json"
                }
            }
            const response = await axios.post("http://localhost:8080/lunchselect/roomuserinfosave", option);
            console.log(response);
        };
        if (userInsert) {
            userInfoInsert();
        }
    });

    const userInfoInsert = useQuery(["userInfoInsert"], async() => {
        const option = {
            params:{
                userId: queryClient.getQueryData("getUserInfo").data.userId
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json"
            }
        }
        const response = await axios.post("http://localhost:8080/lunchselect/roomuserinsert", JSON.stringify({
            userId: queryClient.getQueryData("getUserInfo").data.userId
        }), option);
    },{
        enabled: !insert
    });


 
   

    const userInfoInsertButton = () => {
        setUserInsert(true);
    }

    const readyHandleOnClick = () => {
        console.log("참여하기 누름?")
        setInsert(true);
    }


    return (
        <div css={s.container}>
            <header>
                {userId}
                {name}
                <h1>들어오자마자 누르시오</h1>
                <button onClick={userInfoInsertButton}>userInfoInsert</button>
            {/* <div css={s.mapExplain}>현재 위치를 선택해주세용♡</div>
            <Location markerPosition={markerPosition} setMarkerPosition={setMarkerPosition}/> */}
            {/* {position && <div>클릭한 위치의 좌표는 {position.lat}, {position.lng} 입니다.</div>} */}
            </header>

            <main>
                <div css={s.categoryBox}>
                    <h1 css={s.category}>카테고리를 선택하시오
                        <Category />
                    </h1>
                </div>
            </main>
            
            <footer css={s.mainContainer}>
                <div css={s.selectMenu}></div>
                <button css={test} onClick={readyHandleOnClick}>준비완료!</button>
            </footer>
        </div>
    );
}


export default LunchSelectGuest;
