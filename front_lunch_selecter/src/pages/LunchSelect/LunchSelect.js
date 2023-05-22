/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as s from './style';
import { useQuery } from 'react-query';
import axios from 'axios';
import Category from '../../components/SelectPage/Category/Category';



const LunchSelect = () => {
    const { roomURL } = useParams();
    console.log(roomURL);
    const navigate = useNavigate();

    const [ position, setPosition ] = useState({
        lat: null,
        lng: null
    });
    const [ startButtonClickState, setStartButtonClickState ] = useState(false);
    const [ locationIsLoading, setLocationIsLoading ] = useState(true);
    const [geolocation, setGeolocation] = useState({
        lat: null,
        lng: null
    });
    const [ slotValue, setSlotValue ] = useState([]) 
    const [todayLunch, setTodayLunch] = useState("오늘의 점심은?");
    const [isSpinning, setIsSpinning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        getLocation();
      }, []);

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
            lat: position.lat,
            lng: position.lng
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        };
        const response = await axios.get("http://localhost:8080/lunch/select", option);
        const names = response.data.map(store => store.name);
        console.log("현재위치: " + geolocation.lat, geolocation.lng)
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
        setStartButtonClickState(true);
    };

    const handleStop = () => {
        setIsSpinning(false);
        clearInterval(intervalRef.current);
        for(let i = 0; i < getMenu.data.data.length; i++) {
            if(todayLunch === getMenu.data.data[i].name){
                navigate(`/lunchselect/result?address=${getMenu.data.data[i].address}&todayLunch=${todayLunch}`);
            }
        }
    };

    
    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

 
    return (
        <div css={s.container}>
            <header css={s.header}>

                <div css={s.categoryBox}>
                    <h1 css={s.category}>카테고리를 선택하시오</h1>
                </div>
                <Category />
            </header>

            <main>
                <div css={s.categoryBox}>
                    <h1 css={s.category}>카테고리를 선택하시오
             
                    </h1>
                </div>

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
}


export default LunchSelect;
