import axios from 'axios';
import { async } from 'q';
import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useQuery } from 'react-query';

const Location = () => {
    const [ markerPosition, setMarkerPosition ] = useState({
        lat: null,
        lng: null
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setMarkerPosition((prev) => ({
                ...prev,
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
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
            setMarkerPosition((prev) => ({
            ...prev,
            errMsg: "geolocation 사용불가",
            isLoading: false,
            }))
        }
    }, [])

    const getMenu = useQuery(["getMenu"],async () => {
        const option = {
            params: {
                lat: markerPosition.lat,
                lng: markerPosition.lng
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        };
        const response = await axios.get("http://localhost:8080/lunch/select", option);
        const names = response.data.map(store => store.name);

        console.log(response)
        return response;

    })

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