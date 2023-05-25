/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const coordinate = css`
    font-size: 10px;
`;
const Location = ({ markerPosition, setMarkerPosition }) => {
    
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setMarkerPosition((prev) => ({
                ...prev,
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                isLoading: false
                }))
            },
            (err) => {
                setMarkerPosition((prev) => ({
                ...prev,
                errMsg: err.message,
                isLoading: false
                }))
            })
        } else {
            setMarkerPosition((prev) => ({
            ...prev,
            errMsg: "geolocation 사용불가",
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
                    height: "200px"
                }}
                onClick={markerHandle}
            >
                {<MapMarker
                    position={markerPosition}
                />}
                <div css={coordinate}>클릭한 위치 좌표: {markerPosition.lat}, {markerPosition.lng}</div>
            </Map>
        </>
    );
};

export default Location;