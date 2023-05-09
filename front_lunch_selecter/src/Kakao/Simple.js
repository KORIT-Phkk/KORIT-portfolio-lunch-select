import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { css } from '@emotion/react';


const Simple = () => {

    return (
        <Map
            center={{
                lat: 33.45,
                lng: 126.57,
            }}
            style={{
                width: "500px",
                height: "500px",
            }}
            level={5}
        >
            <MapMarker 
                position={{
                    lat: 33.455,
                    lng: 126.577,
                }}
            />
        </Map>
    );
};

export default Simple;