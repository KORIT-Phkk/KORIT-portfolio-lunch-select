/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import Category from '../../components/SelectPage/Category/Category';
import Location from '../../components/SelectPage/Location/Location';
import * as s from './style';
import axios from 'axios';


const LunchSelectGuest = () => {
    const [ name, setName ] = useState("");
    const [ userId, setUserId ] = useState(""); 
    const [ userInsert, setUserInsert ] = useState(false);
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



    const userInfoInsertButton = () => {
        setUserInsert(true);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
    };


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
                <form onSubmit={handleSubmit}>
                    <button>룰렛 돌리러 가기</button>
                    {/* {isSpinning 
                    ? (<button css={s.selectButton} type="button" onClick={handleStop}>니 손에 오늘 점심이 달렸다..</button>)
                    : (<button css={s.selectButton} type="button" onClick={handleStart}>점심 무러 갑시다!</button>)} */}

                </form>
                <div>
                    <h2>유저</h2>
                    홍길동
                </div>
            </footer>
        </div>
    );
}


export default LunchSelectGuest;
