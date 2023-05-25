/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
// import * as s from './style';

const test2 = css`
    font-size: 10px;
`;

const b = css`
  width: 100%;
  height: 80px;
  border: 1px solid #121212;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;

const a = css`
  font-size: 10px;
  margin: 300px auto;
`;

const test = css`
  color: #999;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  width: 100%;
  display: block;
  margin: auto;
`;

const rouletteBoxStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100px;
  border: 1px solid #121212;
  font-size: 10px;
  overflow: hidden;
  position: relative;
`;

const enterAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const exitAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(100%);
  }
`;

const Roulette = () => {
    const navigate = useNavigate();
    const [ stopRoulette, setStopRoulette ] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    let restaurantNames  = searchParams.get("todayLunch");
    const restaurantNameList = restaurantNames  ? restaurantNames.split(",") : [];

    const [currentNameIndex, setCurrentNameIndex] = useState(0);

  
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentNameIndex((prevIndex) => (prevIndex + 1) % restaurantNameList.length);
      }, 100);
  
      return () => {
        clearInterval(interval);
      };
    }, [restaurantNameList]);
  
const stopRouletteHandleClick = () => {
    navigate(`/lunchselect/result`);
}

  return (
    <div>
    <main css={test}>
        <div css={rouletteBoxStyles}>
          {restaurantNameList.map((restaurantName, index) => (
            <div
              key={index}
              css={css`
                position: absolute;
                opacity: ${index === currentNameIndex ? 1 : 0};
                transition: opacity 0.2s;
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-timing-function: ease-in-out;
                ${index === currentNameIndex ? enterAnimation : exitAnimation};
              `}
            >
              <p>{restaurantName}</p>
            </div>
          ))}
        </div>
    </main>
    <button onClick={stopRouletteHandleClick} css={test2}>멈춰</button>
   </div>
);
};

export default Roulette;