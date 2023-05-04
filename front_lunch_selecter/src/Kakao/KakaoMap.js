/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useEffect } from 'react';

const map = css`
    width: 100%;
    height: 600px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    border-style: solid;
    border-width: medium;
    border-color: #D8D8D8;
  `

const KakaoMap = () => {

    const new_script = src => {
        return new Promise((resolve, reject) => { 
            const script = document.createElement('script'); 
            script.src = src; 
            script.addEventListener('load', () => { 
              resolve(); 
            }); 
            script.addEventListener('error', e => { 
              reject(e); 
            }); 
            document.head.appendChild(script); 
          });
    };

    useEffect(() => {
        const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=33c4314f8f06ba1c408e47635d2f69b6');
    

    my_script.then(() => { 
        console.log('script loaded!!!');  
        const kakao = window['kakao']; 
        kakao.maps.load(() => {
          const mapContainer = document.getElementById('map');
          const options = { 
            center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321), //좌표설정
            level: 3 
          }; 
          const map = new kakao.maps.Map(mapContainer, options); //맵생성
          //마커설정
          const markerPosition = new kakao.maps.LatLng(37.56000302825312, 126.97540593203321); 
          const marker = new kakao.maps.Marker({ 
            position: markerPosition
          }); 
          marker.setMap(map); 
        });   
      });
    });

    return (
        <div>
            <div css={map} id="map"/>
        </div>
    );
};



export default KakaoMap;