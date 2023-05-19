/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
// import * as s from './style';


const Roulette = () => {

    const navigate = useNavigate();
    const [ startButtonClickState, setStartButtonClickState ] = useState(false);
    const [ locationIsLoading, setLocationIsLoading ] = useState(true);

    const [ slotValue, setSlotValue ] = useState([]) 
    const [todayLunch, setTodayLunch] = useState("오늘의 점심은?");
    const [isSpinning, setIsSpinning] = useState(false);
    const intervalRef = useRef(null);

    
    

    const handleStart = () => {
        setStartButtonClickState(true);
    };

    const handleStop = () => {
      
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };




    if(isSpinning) {
        intervalRef.current = setInterval(() => {
            setTodayLunch(slotValue[Math.floor(Math.random() * slotValue.length)]);
        }, 500);
    }

    return (
        <div>
            <header>
 
          
            </header>

            <main>            
                <div >{todayLunch}</div>
                <form onSubmit={handleSubmit}>
                    {isSpinning 
                    ? (<button type="button" onClick={handleStop}>니 손에 오늘 점심이 달렸다..</button>)
                    : (<button type="button" onClick={handleStart}>점심 무러 갑시다!</button>)}

                </form>
            </main>
            
            <footer >
            </footer>
        </div>
    );
}

export default Roulette;