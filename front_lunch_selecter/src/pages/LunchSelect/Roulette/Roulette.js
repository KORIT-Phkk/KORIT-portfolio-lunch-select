/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams, useParams } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import axios from 'axios';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useQuery, useQueryClient } from 'react-query';
import QueryString from 'qs';



const test2 = css`
    font-size: 100px;
`;

const test = css`
  color: #999;
  text-transform: uppercase;
  font-size: 80px;
  font-weight: bold;
  padding-top: 200px;
  width: 100%;
  display: block;
  margin: auto;
`;

const slideAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }

`;

const hideOverflowAnimation = keyframes`
  0% {
    overflow: visible;
  }
  100% {
    overflow: hidden;
  }
`;

const rouletteBoxStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 250px;
  border: 1px solid #121212;
  margin-top: 300px;
  margin-left: 130px;
  position: relative;
  overflow: hidden;
  animation: ${hideOverflowAnimation} 100ms linear;
`;

const textContainerStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  opacity: 1; /* Add this line */
`;

const textStyles = css`
  animation-name: ${slideAnimation};
  animation-duration: 300ms; /* Adjust the duration as needed */
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
`;

const textHieenBox = css`
  height: 500px;
  align-items: center;
  justify-content: center;
`;



const Roulette = () => {    
    const navigate = useNavigate();
    const [ todayLunch, setTodayLunch ] = useState([]);
    
    const queryClient = useQueryClient();
    const menuList = [queryClient.getQueryData("getMenus")];

    console.log(menuList)
    



    const selectLunchMenu = () => {
      // navigate(`/lunchselect/result?name=${chooseMenuName}&address=${chooseMenuAddress}`);
    }

    return (
      <div>
      <main css={test}>
        <div css={textHieenBox}>
          <div css={rouletteBoxStyles}>
            <div css={textContainerStyles}>
              {/* {menuList.map((menu) => (

                <p key={menu.id} css={textStyles}>
                  {menu.name}
                </p>
              ))} */}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <button css={test2} onClick={selectLunchMenu}>
          가게 자세히 보기
        </button>
      </footer>
    </div>
  );
};

export default Roulette;