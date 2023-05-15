/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as s from './style';

import Category from './category/Category';
import LocalCategory from './LocalCategory/LocalCategory';


const selectLocation = (isOpen) => css`
    /* position: absolute;
    top: 5%;
    right: 50%; */
    display: ${isOpen ? "flex" : "none"};
    /* width: 180px;
    height: 200px;
    max-height: 100px;
    background-color: white;
    overflow-y: scroll; */

`;





const LunchSelect = () => {

    const [isInvited, setIsInvited] = useState(false);
    const [inviteCode, setInviteCode] = useState('');
    
    const navigate = useNavigate();


    const [ position, setPosition ] = useState();
    const [ isOpen, setIsOpen ] = useState(false);

    const [ startButtonClickState, setStartButtonClickState ] = useState(false);
    const [ locationIsLoading, setLocationIsLoading ] = useState(true);
    const [geolocation, setGeolocation] = useState({//하드코딩 해놓은상태임 수정해야함
        lat: null,
        lng: null
    });

    const [ slotValue, setSlotValue ] = useState([]) 
    const [todayLunch, setTodayLunch] = useState("");

    const getLocation = () => {
        let lat, lng;

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    lat = 35.152418;
                    lng = 129.060043;
                    setGeolocation((geolocation) => {
                        return {
                            ...geolocation,
                            lat,
                            lng,
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
        const names = response.data.map(store => store.name);
        setSlotValue(names);
        console.log(geolocation)
        return response;
      }, {
        enabled: startButtonClickState && !locationIsLoading,
        onSuccess: () => {
            setStartButtonClickState(false);
            setLocationIsLoading(true);
            setIsSpinning(true);
        }
      });
      

  
    const [isSpinning, setIsSpinning] = useState(false);
    const intervalRef = useRef(null);

    const handleStart = () => {
        getLocation();
        setStartButtonClickState(true);
    };

    const handleStop = () => {
        setIsSpinning(false);
        clearInterval(intervalRef.current);
        navigate("/choosemenu", {state:{value : todayLunch}})
        console.log(slotValue)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };


    const selectLocationHendleClick =() => {
        setIsOpen(true);
    }

    if(getMenu.isLoading){
        return <div>불러오는 중....</div>
    }

    if(isSpinning) {
        intervalRef.current = setInterval(() => {
            setTodayLunch(slotValue[Math.floor(Math.random() * slotValue.length)]);
        }, 300);
    }



    return (
        <div css={s.container}>
            <button css={s.selectButton} onClick={selectLocationHendleClick}>위치 선택하기</button>
            <div css={selectLocation(isOpen)}>
                <LocalCategory 
                />
            </div>
            <header css={s.header}>
                <div css={s.categoryBox}>
                    <h1 css={s.category}>카테고리를 선택하시오</h1>
                </div>
                <Category />
            </header>
            <main css={s.mainContainer}>
                <div css={s.selectMenu}>{todayLunch}</div>
                <form onSubmit={handleSubmit}>
                    {isSpinning 
                    ? (<button css={s.selectButton} type="button" onClick={handleStop}>니 손에 오늘 점심이 달렸다..</button>)
                    : (<button css={s.selectButton} type="button" onClick={handleStart}>점심 무러 갑시다!</button>)}
                </form>
            </main>
        </div>
    );
};

export default LunchSelect;
