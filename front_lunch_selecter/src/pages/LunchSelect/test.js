/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as s from './style';

import Category from './category/Category';


const selectLocation = (isOpen) => css`
    display: ${isOpen ? "flex" : "none"};
`;

const LunchSelect = () => {
    const navigate = useNavigate();

    const [ position, setPosition ] = useState();
    const [ isOpen, setIsOpen ] = useState(false);
    const [ startButtonClickState, setStartButtonClickState ] = useState(false);
    const [ locationIsLoading, setLocationIsLoading ] = useState(true);
    const [geolocation, setGeolocation] = useState({
        lat: null,
        lng: null
    });
    const [ slotValue, setSlotValue ] = useState([]) 
    const [todayLunch, setTodayLunch] = useState("오늘의 점심은?");
    const [ address, setAddress ] = useState("");
    const [isSpinning, setIsSpinning] = useState(false);
    const intervalRef = useRef(null);
   
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              function(position) {
                const { latitude, longitude } = position.coords;
                setGeolocation((geolocation) => {
                  return {
                    ...geolocation,
                    lat: latitude,
                    lng: longitude,
                  };
                });
                setLocationIsLoading(false);
              },
              function(error) {
                console.error(error);
              },
              {
                enableHighAccuracy: false,
                maximumAge: 0,
                timeout: Infinity,
              }
            );
          }
          
        if(console.error === null) {
            alert('위치 설정을 허용해주세요');
            return;
        }
    }
    
    const getMenu = useQuery(["getMenu"], async () => {
        const option = {
          params: {
            lat: geolocation.lat,
            lng: geolocation.lng
          },
          headers: {
            Authorization: localStorage.getItem("accessToken")
          }
        };
        const response = await axios.get("http://localhost:8080/lunch/select", option);
        console.log("현재위치: " + geolocation.lat, geolocation.lng)
        const names = await response.data.map(store => store.name);
        setSlotValue(names);
        console.log("names: " + names)
        return response;
      }, {
        enabled: startButtonClickState && !locationIsLoading,
        onSuccess: () => {
            setStartButtonClickState(false);
            setLocationIsLoading(true);
            setIsSpinning(true);
        }
      });
      

    const handleStart = () => {
        getLocation();
        setStartButtonClickState(true);
        
    };

    const handleStop = () => {
        setIsSpinning(false);
        // clearInterval(intervalRef.current);
        // for(let i = 0; i < getMenu.data.data.length; i++) {
        //     if(todayLunch === getMenu.data.data[i].name){
        //         navigate(`/choosemenu?address=${getMenu.data.data[i].address}&todayLunch=${todayLunch}`);
        //     }
        // }
    };

    const changeTest = () => {
         for(let i = 0; i < getMenu.data.data.length; i++) {
            if(todayLunch === getMenu.data.data[i].name){
                navigate(`/choosemenu?address=${getMenu.data.data[i].address}&todayLunch=${todayLunch}`);
            }
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
    };


    if(getMenu.isLoading){
        return <div>불러오는 중....</div>
        
    }


    if(isSpinning) {
        // intervalRef.current = setInterval(() => {
        //     setTodayLunch(slotValue[Math.floor(Math.random() * slotValue.length)]);
        // }, 500);
        const randomIndex = Math.floor(Math.random() * slotValue.length);
        setTodayLunch(slotValue[randomIndex]);
        setIsSpinning(false)

    }
  


    return (
        <div css={s.container}>
            <div css={selectLocation(isOpen)}>
            </div>
            <header css={s.header}>
                <div css={s.categoryBox}>
                    <h1 css={s.category}>카테고리를 선택하시오</h1>
                </div>
                <Category />
            </header>
            <main css={s.mainContainer}>
                <div css={s.selectMenu}>
                    {todayLunch}
                </div>
                <form onSubmit={handleSubmit}>
                    {isSpinning 
                    ? (<button css={s.selectButton} type="button" onClick={handleStop}>니 손에 오늘 점심이 달렸다..</button>)
                    : (<button css={s.selectButton} type="button" onClick={handleStart}>점심 무러 갑시다!</button>)}

                    <button onClick={changeTest}>가게 제세히 보기</button>
                </form>
            </main>
        </div>
    );
};

export default LunchSelect;
