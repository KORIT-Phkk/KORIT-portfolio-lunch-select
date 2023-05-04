/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useEffect } from 'react';

const mapStyle = css`
    width: 500px;
    height: 500px;
`;

const {kakao} = window;

const MapTest = () => {

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
    }, [])
    
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.async = true;
    //     script.type = 'text/javascript';
    //     script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=33c4314f8f06ba1c408e47635d2f69b6`
    //     document.body.appendChild(script);

    //     script.onload = () => {
    //         const container = document.getElementById('map');
    //         console.log(document.getElementById('map'))
    //         const options = {
    //             center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    //             level: 3
    //             };
                
    //             const map = new window.kakao.maps.Map(container, options);
    //         };

    // }, []);



    return (
        <div>
            <div id='map' css={mapStyle}></div>
        </div>
    );
};

export default MapTest;