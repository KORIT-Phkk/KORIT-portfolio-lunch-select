/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { HiOutlineEmojiSad } from 'react-icons/hi'
import * as s from './style'

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
      return(
        <div css={s.fail}>
          <img css={s.imgCss} src="../../../../main/logo1.png" />
          <div css={s.size}>
            <HiOutlineEmojiSad/>
          </div>
          선택하신 카테고리의 메뉴가 주변에 없습니다
        </div>
      )
    }

    return (
        <div css={s.container}>
        <span css={s.message}>오늘의 점심은~~?</span>
          <main css={s.mainContainer}>
              {currentMenuNames.map((name, index) => (
              <div
                  key={index}
                  css={[
                  s.textContainerStyles,
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
        </div>
    );
  };

export default RouletteComponent;