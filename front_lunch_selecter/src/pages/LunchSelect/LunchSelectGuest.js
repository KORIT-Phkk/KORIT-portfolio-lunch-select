/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import QueryString from 'qs';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Category from '../../components/SelectPage/Category/Category';
import * as s from './style';
import Invite from './Invite';
import { useParams } from 'react-router';
import { async } from 'q';


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
    
    const [ ckeckURLHandle, setCheckURLHandle ] = useState(false);
    const { roomGuestURL } = useParams();

    const userInfoInsertButton = () => {
        setUserInsert(true);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        async function fetchData() {
          const option = {
            params: {
              guestURL: roomGuestURL,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          };
          try {
            const response = await axios.get("http://localhost:8080/lunchselect/checkroom", option);
      
            if (response.data === false) {
              alert("없는 방입니다~");
              window.location.replace("http://localhost:3000");
            }
          } catch (error) {
            // Handle any errors that occur during the request
            console.error(error);
          }
        }
      
        fetchData();
      }, []);
      



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
            guestURL: roomGuestURL,
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
        
        setCheckURLHandle(true);
        userInfoInsert.mutate();
        setInsert(true);
    }


    return (
        <div css={s.container}>
            <header>
           

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

