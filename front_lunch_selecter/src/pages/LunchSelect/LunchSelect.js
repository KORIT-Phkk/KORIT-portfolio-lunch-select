/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import axios from 'axios';
import { useQuery } from 'react-query';


const LunchSelect = () => {
    const slotValue = ['짱깨', '맥도날드', '된장', '유부초밥', '우동(돈가스)', '김밥천국','삼정타워','닭가슴살','0004','9','88','7','6','2','3','5','dd','we','as','sdf','asdf','asdf','wer','werw','tyu','dfg','ert','q2we','dfg','fsgjl'];

    const [ startButtonClickState, setStartButtonClickState ] = useState(false);
    const [ locationIsLoading, setLocationIsLoading ] = useState(true);
    const [geolocation, setGeolocation] = useState({
        lat: null,
        lng: null
    });

    const getLocation = () => {
        let lat, lng;


        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    lat = position.coords.latitude;
                    lng = position.coords.longitude;
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

    // const locationHandleClick = () => {
    //     getLocation();
    //     if((geolocation.lat || geolocation.lng) === null) {
    //         alert('위치를 가져올 수 없습니다. 다시 눌러주세요.');
    //         console.log(navigator.geolocation)
    //     }else {
    //         alert('위치 설정 됨!')
    //     }
    //     console.log(geolocation.lat, geolocation.lng)
    // }
    
    const getMenu = useQuery(["getMenu"], async () => {
        const option = {
            params: {
                lat: geolocation.lat,
                lng: geolocation.lng
            },
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        const response = await axios.get("http://localhost:8080/lunch/select", option)
        return response
    }, {
        enabled: startButtonClickState && !locationIsLoading,
        onSuccess: () => {
            setStartButtonClickState(false);
            setLocationIsLoading(true);
        }
    });
  

    const navigate = useNavigate();
    const [todayLunch, setTodayLunch] = useState("돌려돌려 돌림판~~");
    const [isSpinning, setIsSpinning] = useState(false);
    const intervalRef = useRef(null);

    const handleStart = () => {
        getLocation();
        setStartButtonClickState(true);
        
        setIsSpinning(true);
        intervalRef.current = setInterval(() => {
            setTodayLunch(slotValue[Math.floor(Math.random() * slotValue.length)]);
        }, 50);
        
    };

    const handleStop = () => {
        setIsSpinning(false);
        clearInterval(intervalRef.current);
        navigate("/choosemenu", {state:{value : todayLunch}})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    // if(getMenu.isLoading){
    //     return <div>불러오는 중....</div>
    // }


    return (
        <div css={s.container}>
            {/* onClick={locationHandleClick} */}
            <button css={s.selectButton}  >내 위치 가져오기</button>
            {/* <button> onClick={getMenu}메뉴 가져오기</button> */}
            <header css={s.header}>
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
