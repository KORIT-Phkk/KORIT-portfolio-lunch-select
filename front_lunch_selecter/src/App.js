import { Global } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './App.css';
import { Reset } from './style/Reset';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { exampleFunction } from './Kakao/Example';
import { useGetMarkers } from './Kakao/useGetMarkers';
import KakaoMap from './Kakao/KakaoMap';
import KakaoMapReact from './Kakao/KakaoMapReact';



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
  
  const [ markers ] = useGetMarkers();


  console.log(markers)

  useEffect(() => {
    exampleFunction();
    
  }, []);

  
  return (
    <div css={mainContainer}>
      <Global styles={Reset}></Global>
      {/* <KakaoMap /> */}
      {/* <Test /> */}
      {/* <MapTest/> */}
      {/* <KakaoMapReact></KakaoMapReact> */}
    </div>
  );
}

export default App;
