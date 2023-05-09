import React, { useState } from 'react';

export const useGetMarkers = () => {

    const [ markers, setMarkers ] = useState([]);

    if (navigator.geolocation) {        // 위치 권한을 허용하면
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;

                getMarkers(lat, long);
            },
            function (error) {
                console.error(error);
            },
            {
                enableHighAccuracy: false,
                maximumAge: 0,
                timeout: Infinity,
            }
        );
    }

    const getMarkers = (lat, long) => {
        const newMarkers = [];

        const { kakao } = window;

        const ps = new kakao.maps.services.Places()

        for(let i = 0; i < 3; i++) {
            ps.categorySearch("FD6", (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
    
                for (var i = 0; i < data.length; i++) {
                // @ts-ignore
                    newMarkers.push({
                        position: {
                        lat: data[i].y,
                        lng: data[i].x,
                        },
                        content: data[i].place_name,
                        data:data
                    })
                }


            }
            }, {
                page: i + 1,
                radius: 400,
                location: new kakao.maps.LatLng(lat, long),
                // useMapBounds:true,
                // bounds: new kakao.maps.LatLngBounds(new kakao.maps.LatLng(30, 127), new kakao.maps.LatLng(50, 128))
            });
        }
        console.log(newMarkers)
    }

    return [ markers ];
};