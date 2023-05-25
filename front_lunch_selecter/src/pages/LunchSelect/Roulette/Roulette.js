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
    const [searchParams ] = useSearchParams();
    const [ todayLunch, setTodayLunch ] = useState([]);
    const [ menuRefresh, setMenuRefresh ] = useState(true);
    const [ chooseMenu, setChooseMenu ] = useState("");
    const [ chooseMenuName, setChooseMenuName ] = useState("")
    const [ chooseMenuAddress, setChooseMenuAddress ] = useState("")
    const [animationStarted, setAnimationStarted] = useState(true);
    const textContainerRef = useRef(null);
    const queryClient = useQueryClient();

    let roomMasterCode = searchParams.get("roomMasterCode");
    let masterId = searchParams.get("userId");
    let lat = searchParams.get("lat")
    let lng = searchParams.get("lng");

    console.log(roomMasterCode, masterId, lat, lng)

    useEffect(() => {
      setTodayLunch(queryClient.getQueryData("getMenus"))
      console.log(todayLunch)
    },[])

  // const getMenu = useQuery(["getMenu"], async() => {
    //   const option = {
    //       params: {
    //           roomMasterCode: roomMasterCode,
    //           masterId: masterId,
    //           lat,
    //           lng
    //       },
    //       headers: {
    //           Authorization: `Bearer ${localStorage.getItem("accessToken")}` 
    //       },
    //       paramsSerializer: params => QueryString.stringify(params, {arrayFormat: 'repeat'})
    //   }
    //   const response = await axios.get("http://localhost:8080/lunchselect/roulette", option)
    //   const names = await response.data.map(store => store.name);
    //   setTodayLunch(names);
    //   console.log("names: " + names)
      
    //   return response;
    // },{
    //     enabled: menuRefresh,
    //     onSuccess:  () => {
    //         rouletteRun();
    //         setMenuRefresh(false);
    //     }
    // });


    
    const rouletteRun = () => {
      if (menuRefresh && textContainerRef.current) {
        const textContainer = textContainerRef.current;
        const intervalId = setInterval(() => {
          const firstText = textContainer.children[0];
          textContainer.removeChild(firstText);
          textContainer.appendChild(firstText);
        }, 30);

        return () => clearInterval(intervalId);
      }
    };

    
    const startAnimation = () => {
      setAnimationStarted(true);
    };

    const stopRouletteAndChooseMenu = async () => {
      const option = {
        params: {
          roomMasterCode: roomMasterCode,
          masterId: masterId,
          lat: lat,
          lng: lng
      },
        headers: {
          Authorization : "Bearer " + localStorage.getItem("accessToken")
        }
      }
      const response = await axios.get("http://localhost:8080/lunchselect/result", option)
      setChooseMenuName(response.data.name)
      setChooseMenuAddress(response.data.address)
      console.log(response.data.name)
      setAnimationStarted(false);
      return response
    }



    const selectLunchMenu = () => {
      navigate(`/lunchselect/result?name=${chooseMenuName}&address=${chooseMenuAddress}`);
    }

    // if(getMenu.isLoading){
    //   return <div>불러오는중</div>
    // }
 
    if(chooseMenu.isLoading){
      return <div>결과 불러오는 중</div>
    }

    return (
      <div>
      <main css={test}>
        <div css={textHieenBox}>
          <div css={rouletteBoxStyles}>
            <div ref={textContainerRef} css={textContainerStyles}>
              {todayLunch.map((name, index) => (
                <p key={index} css={textStyles}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <button css={test2} onClick={startAnimation}>
          다시돌려
        </button>
        <button css={test2} onClick={selectLunchMenu}>
          가게 자세히 보기
        </button>
        {/* <button css={test2} onClick={stopRouletteAndChooseMenu}>
          멈춰
        </button> */}
      </footer>
    </div>
  );
};

export default Roulette;