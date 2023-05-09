import { Global } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './App.css';
import { Reset } from './style/Reset';
import { useEffect } from 'react';
import { useGetMarkers } from './Kakao/useGetMarkers';
import KakaoMapData from './Kakao/KakaoMapData';
import KakaoMapReact from './Kakao/KakaoMapReact';
import { useGetMarkers2 } from './Kakao/useGetMarkers copy';



const mainContainer = css`
    position: relative;
    margin: 10px auto;
    border: 3px solid #dbdbdb;
    padding: 10px;
    font-size: 1.6rem;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;
function App() {
  
  const [ markers ] = useGetMarkers2
  ();


  console.log(markers)

  
  return (
    <div css={mainContainer}>
      <Global styles={Reset}></Global>
      {/* <KakaoMap /> */}
      {/* <Test /> */}
      {/* <MapTest/> */}
      {/* <KakaoMapReact></KakaoMapReact> */}
      {/* <KakaoMapData /> */}
    </div>
  );
}

export default App;
