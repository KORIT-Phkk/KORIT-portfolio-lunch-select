/** @jsxImportSource @emotion/react */
import Invite from '../Invite';
import React, { useEffect, useState } from 'react';
import Category from '../../../components/SelectPage/Category/Category';
import Location from '../../../components/SelectPage/Location/Location';
import * as s from './style';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useMutation, useQuery } from 'react-query';
import QueryString from 'qs';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaRegSmileWink } from 'react-icons/fa'

const LunchSelectMaster = () => {
    const [ selectedCategories, setSelectedCategories ] = useState([]);
    const [ markerPosition, setMarkerPosition ] = useState({
        lat: null,
        lng: null
    });
    const [ menuRefresh, setMenuRefresh ] = useState(false);
    const [ todayLunch, setTodayLunch ] = useState([]);
    const navigate = useNavigate();
    const { roomMasterCode } = useParams();
    const [ todayLunchLoading, setTodayLunchLoading ] = useState(false);
    const { roomMasterURL } = useParams();
    const { userId, setUserId } = useState();
    const location = useLocation();

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
        const response = await axios.post("http://localhost:8080/lunchselect/roommasterinsert", {
            masterURL: roomMasterURL,
            userId: userId,
            categoryId: [...selectedCategories]
        }, option);
        
        return response
    },);

    const getMenu = useQuery(["getMenu"], async() => {
        const option = {
            params: {
                masterId: userId,
                ...markerPosition
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}` 
            },
            paramsSerializer: params => QueryString.stringify(params, {arrayFormat: 'repeat'})
        }
        const response = await axios.get("http://localhost:8080/lunchselect/roulette",  option)

        const names = await response.data.map(store => store.name);
        setTodayLunch(names);
        console.log("names: " + names)
        return response;
    },{
        enabled: menuRefresh,
        onSuccess:  () => {
            setMenuRefresh(false);
            setTodayLunchLoading(true);
        }
    });

    const backButton = useMutation(async() => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.put("http://localhost:8080/lunchselect/updateflag", {roomMasterCode}, option)
        window.location.href = "http://localhost:3000/";
    });

    const getMenuButtonHandle = () => {
        userInfoInsert.mutate();
        setMenuRefresh(true);
    }
    
    if(todayLunchLoading) {
        navigate(`/lunchselect/roulette?todayLunch=${todayLunch}`);
        setTodayLunchLoading(false);
    }
   
    if(getMenu.isLoading){
        return <div>불러오는 중....</div>
    }
    
    const backButtonHandle = () => {
        backButton.mutate();
    }
    
    return (
        <div css={s.container}>
            <header>
                <IoMdArrowRoundBack  css={s.backButton} onClick={backButtonHandle}/>
                <Invite/>
                <div css={s.mapExplain}>현재 위치를 선택해주세요&nbsp;<FaRegSmileWink/></div>
                <Location markerPosition={markerPosition} setMarkerPosition={setMarkerPosition}/>
            </header>

            <main css={s.mainContainer}>
                <h1 css={s.categoryName}>카테고리를 선택해주세요&nbsp;<FaRegSmileWink/></h1>
                <Category selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>                
            </main>
            
            <footer css={s.footerContainer}>
                <button css={s.locationAndCetegorySubmitButton} onClick={getMenuButtonHandle}>선택 완료!!</button>
            </footer>
        </div>
    );
}


export default LunchSelectMaster;