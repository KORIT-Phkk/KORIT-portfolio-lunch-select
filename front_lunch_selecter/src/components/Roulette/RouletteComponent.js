/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';



const mainContainer = css`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 80%;
  height: 80px;
  border: 1px solid #121212;
`;


const textContainerStyles = css`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  top: 30%;
  font-size: 20px;
`;

const RouletteComponent = ({ menuNames, selectedMenu, setRoulettState }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentMenuNames, setCurrentMenuNames] = useState([]);
    const [intervalDuration, setIntervalDuration] = useState(50);
    const [stopRoulette, setStopRoulette] = useState(false);
    const [ roulettFlag, setRoulettFlag ] = setRoulettState;

    useEffect(() => {
      if (menuNames) {
        let names = menuNames;
        const dataLength = names.length;  
        if (dataLength < 80) {
          const repeatCount = Math.ceil(80 / dataLength);
          names = Array.from({ length: repeatCount }, () => names).flat().slice(0, 80);
        }
        setCurrentMenuNames(names);
      }
    }, [menuNames]);
  
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((index) => {
                if (index === 60) {
                    setIntervalDuration(100);
                } else if (index === 65) {
                    setIntervalDuration(150);
                } else if (index === 73) {
                    setIntervalDuration(300);
                } else if (index === 79) {
                    setStopRoulette(true);
                    setIntervalDuration(0);
                }
                return (index + 1) % 80;
            });
        }, intervalDuration);
        return () => {
          clearInterval(interval);
          if(stopRoulette){
            setRoulettFlag(true);
          }
        }

    }, [intervalDuration]);
  
    if(menuNames === null){
      return <div>선택하신 카테고리의 메뉴가 주변에 없습니다</div>
    }

    return (
        <>
          <main css={mainContainer}>
              {currentMenuNames.map((name, index) => (
              <div
                  key={index}
                  css={[
                  textContainerStyles,
                  css`
                      opacity: ${index === currentIndex ? 1 : 0};
                      animation-duration: ${intervalDuration}ms;
                  `
                  ]}
              >
                  {stopRoulette ? (
                  <>{selectedMenu}</>
                  ) : (
                  <>{name}</>
                  )}
              </div>
              ))}
          </main>
        </>
    );
  };
  
  

export default RouletteComponent;

