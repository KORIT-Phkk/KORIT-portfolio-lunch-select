/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';

const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const mainContainer = css`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 80%;
  height: 350px;
  border: 1px solid #121212;
`;


const textContainerStyles = css`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  top: 30%;
  font-size: 80px;
`;

const MenuRoulette = ({ menuNames }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentMenuNames, setCurrentMenuNames] = useState([]);
    const [intervalDuration, setIntervalDuration] = useState(50);
  
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
                    clearInterval(interval);
                }
                return (index + 1) % 80;
            });
        }, intervalDuration);
        return () => clearInterval(interval);
    }, [intervalDuration]);

    return (
      <div css={container}>
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
                {currentIndex === 0 ? (
                <>{currentMenuNames[currentMenuNames.length - 1]}</>
                ) : (
                <>{name}</>
                )}
            </div>
            ))}
        </main>
      </div>
    );
  };
  
  

export default MenuRoulette;

