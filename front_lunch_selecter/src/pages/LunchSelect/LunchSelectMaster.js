/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import Category from '../../components/SelectPage/Category/Category';
import Location from '../../components/SelectPage/Location/Location';
import * as s from './style';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useQuery } from 'react-query';
import QueryString from 'qs';


const LunchSelectMaster = () => {
    const [ name, setName ] = useState("");
    const [ userId, setUserId ] = useState(""); 
    const [ userInsert, setUserInsert ] = useState(false);
    const [ selectedCategories, setSelectedCategories ] = useState([]);
    const [ markerPosition, setMarkerPosition ] = useState({
        lat: null,
        lng: null
    });
    const [ menuRefresh, setMenuRefresh ] = useState(false);
    const [ todayLunch, setTodayLunch ] = useState([]);
    const navigate = useNavigate();

    const { roomURL } = useParams();
    const [ todayLunchLoading, setTodayLunchLoading ] = useState(false);
    const location = useLocation();



    const getMenu = useQuery(["getMenu"], async() => {
        const option = {
            params: {
                categoryId: [...selectedCategories],
                ...markerPosition
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}` 
            },
            paramsSerializer: params => QueryString.stringify(params, {arrayFormat: 'repeat'})
        }
        const response = await axios.get("http://localhost:8080/lunchselect/roulette", option)
        // console.log(response.data)
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
    })

    const getMenuButtonHandle = () => {
        setMenuRefresh(true);
    }
    
    if(todayLunchLoading) {
        navigate(`/lunchselect/roulette?todayLunch=${todayLunch}`);
        setTodayLunchLoading(false);
    }
   
    if(getMenu.isLoading){
        return <div>불러오는 중....</div>
    }

    
    return (
        <div css={s.container}>
            <header>
               
            <div css={s.mapExplain}>현재 위치를 선택해주세용♡</div>
                <Location markerPosition={markerPosition} setMarkerPosition={setMarkerPosition}/>
            </header>

            <main>
                <div css={s.categoryBox}>
                    <h1 css={s.category}>카테고리를 선택하시오
                        <Category selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
                    </h1>
                </div>
            </main>
            
            <footer css={s.mainContainer}>
                <button css={s.locationAndCetegorySubmitButton} onClick={getMenuButtonHandle}>위치 및 카테고리 선택 완료!!</button>
                <h2>유저</h2>
                홍길동
            
            </footer>
        </div>
    );
}


export default LunchSelectMaster;
