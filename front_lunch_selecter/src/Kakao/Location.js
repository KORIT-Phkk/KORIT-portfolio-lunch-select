import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Location = () => {
    const [ markerPosition, setMarkerPosition ] = useState({
        lat: null,
        lng: null
    });

    useEffect(() => {
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition((position) => {
                setMarkerPosition((prev) => ({
                ...prev,
                    lat: position.coords.latitude, // 위도
                    lng: position.coords.longitude, // 경도
                isLoading: false,
                }))
            },
            (err) => {
                setMarkerPosition((prev) => ({
                ...prev,
                errMsg: err.message,
                isLoading: false,
                }))
            })
        } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            setMarkerPosition((prev) => ({
            ...prev,
            errMsg: "geolocation을 사용할수 없어요..",
            isLoading: false,
            }))
        }
    }, [])

    const markerHandle = (_t, e) => {
        const clickedPosition = {
            lat: e.latLng.getLat(),
            lng: e.latLng.getLng(),
        };
        setMarkerPosition(clickedPosition);
    };


    return (
        <>
            <Map
                center={markerPosition}
                style={{
                    width: "100%",
                    height: "500px"
                }}
                onClick={markerHandle}
            >
                {<MapMarker position={markerPosition}/>}
            </Map>
        </>
    );
};

export default Location;