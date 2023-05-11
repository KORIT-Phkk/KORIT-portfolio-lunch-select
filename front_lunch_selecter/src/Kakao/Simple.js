import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Simple = () => {
    const [geolocation, setGeolocation] = useState({
        lat: null,
        lng: null,
    });

    const getLocation = () => {
        let lat, lng;
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    lat = position.coords.latitude;
                    lng = position.coords.longitude;
                    setGeolocation((geolocation) => {
                        return {
                            ...geolocation,
                            lat,
                            lng,
                        };
                    });
                },
                function(error) {
                    console.error(error);
                },
                {
                    enableHighAccuracy: false,
                    maximumAge: 0,
                    timeout: Infinity,
                }
            );
        }

        console.log(navigator.geolocation)
        if(console.error === null) {
            alert('위치 설정을 허용해주세요');
            return;
        }
    }
    

    useEffect(() => {
        getLocation();
    })
    
    return (
        <>
            <Map
                center={{
                    lat: geolocation.lat,
                    lng: geolocation.lng,
                }}
                style={{
                    width: "500px",
                    height: "500px",
                }}
                level={5}
            >현재 위치: {geolocation.lat}, {geolocation.lng}
                <MapMarker 
                    position={{
                        lat: geolocation.lat,
                        lng: geolocation.lng,
                    }}
                />
            </Map>
        </>
    );
};

export default Simple;