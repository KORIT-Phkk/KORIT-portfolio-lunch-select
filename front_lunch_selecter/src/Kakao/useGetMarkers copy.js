import React, { useState } from 'react';

export const useGetMarkers2 = () => {

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
        const { kakao } = window;

        // 족발, 보쌈 카테고리 코드
        const categoryCodes = ['FD6-003', 'FD6-008', 'FD6'];
        
        // 검색 조건
        const options = {
          location: new kakao.maps.LatLng(lat, long),
          useMapBounds: false,
          size: 15,
        };
        
        // PlacesService 객체 생성
        const placesService = new kakao.maps.services.Places();
        
        // 검색 요청
        placesService.categorySearch(categoryCodes, (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            // 검색된 장소가 있을 경우
            console.log(data);
          } else {
            // 검색된 장소가 없을 경우
            console.log('검색 결과가 없습니다.');
          }
        }, options);
    }

    return [ markers ];
};