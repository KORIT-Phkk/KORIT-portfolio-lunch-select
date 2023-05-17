/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import LocalCategory from './LocalCategory/LocalCategory';
import Category from './category/Category';
import { Map } from 'react-kakao-maps-sdk';
import { MapMarker } from 'react-kakao-maps-sdk';


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
    const navigate = useNavigate();

    const [isInvited, setIsInvited] = useState(false);
    const [inviteCode, setInviteCode] = useState('');
    const [ position, setPosition ] = useState();
    const [ isOpen, setIsOpen ] = useState(false);
    const [ startButtonClickState, setStartButtonClickState ] = useState(false);
    const [ locationIsLoading, setLocationIsLoading ] = useState(true);
    const [geolocation, setGeolocation] = useState({
        lat: null,
        lng: null
    });
    const [ slotValue, setSlotValue ] = useState([]) 
    const [todayLunch, setTodayLunch] = useState("");
    const [ address, setAddress ] = useState("");

    const [ coord, setCoord ] = useState({lat: "", lng: ""})

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
            lat: position.lat,
            lng: position.lng
          },
          headers: {
            Authorization: localStorage.getItem("accessToken")
          }
        };
        const response = await axios.get("http://localhost:8080/lunch/select", option);
        console.log(response.data)
        const names = response.data.map(store => store.name);
        setSlotValue(names);
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
        // navigate("/choosemenu", {})
        console.log("dd:", getMenu.data.data);
        for(let i = 0; i < getMenu.data.data.length; i++) {
            if(todayLunch === getMenu.data.data[i].name){
                console.log("제발좀나와라:",getMenu.data.data[i].address);
                navigate(`/choosemenu?address=${getMenu.data.data[i].address}&todayLunch=${todayLunch}`);
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };


    const selectLocationHendleClick =() => {
        setIsOpen(true);
    }

    const asdf = () => {

        
    }

    if(getMenu.isLoading){
        return <div>불러오는 중....</div>
    }

    if(isSpinning) {
        intervalRef.current = setInterval(() => {
            setTodayLunch(slotValue[Math.floor(Math.random() * slotValue.length)]);
        }, 300);
    }

    const onClickMapHandle = (_t, mouseEvent) => {
        setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
        })

        setCoord({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
        })

        console.log(coord)
    }



    return (
        <div css={s.container}>
            <header>
            <div css={s.mapExplain}>현재 위치를 선택해주세용♡</div>
            <Map
                center={{
                    lat: 37.404576,
                    lng: 129.11474,
                }}
                style={{
                    top: "10px",
                    margin: "0px 30px 0px 30px",
                    height: "1000px",
                }}
                level={2}
                onClick={onClickMapHandle}
                >
                {position && <MapMarker position={position}/>}
            </Map>
            {position && <div>클릭한 위치의 좌표는 {position.lat}, {position.lng} 입니다.</div>}
            </header>

            <main>
                <div css={s.categoryBox}>
                    <h1 css={s.category}>카테고리를 선택하시오</h1>
                </div>
                <Category />
            </main>
            
            <footer css={s.mainContainer}>
                <div css={s.selectMenu}>{todayLunch}</div>
                <form onSubmit={handleSubmit}>
                    {isSpinning 
                    ? (<button css={s.selectButton} type="button" onClick={handleStop}>니 손에 오늘 점심이 달렸다..</button>)
                    : (<button css={s.selectButton} type="button" onClick={handleStart}>점심 무러 갑시다!</button>)}
                </form>
            </footer>
        </div>
    );
};

export default LunchSelect;
