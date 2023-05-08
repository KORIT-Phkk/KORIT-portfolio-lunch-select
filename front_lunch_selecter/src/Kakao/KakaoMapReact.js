import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { css } from '@emotion/react';

const mapStyle = css`
    width: 500px;
    height: 500px;
`;


const KakaoMapReact = () => {
    const [geolocation, setGeolocation] = useState({
        lat: null,
        long: null,
    });
    const [info, setInfo] = useState()
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState()

    const { kakao } = window;

    function getLocation() {
        
        let lat, long;
        if (navigator.geolocation) {
          // 위치 권한을 허용하면
          navigator.geolocation.getCurrentPosition(
            function (position) {
              lat = position.coords.latitude;
              long = position.coords.longitude;
              setGeolocation((geolocation) => {
                return {
                  ...geolocation,
                  lat,
                  long,
                };
              });
            },
            function (error) {
              console.error(error);
            },
            {
              enableHighAccuracy: false,
              maximumAge: 0,
              timeout: Infinity,
            },
          );
        } else {
          alert('위치 설정을 허용해주세요!');
          return;
        }
      }

    useEffect(() => {
        getLocation();
        if (!map) return
        const ps = new kakao.maps.services.Places()

        ps.categorySearch("FD6", (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            const bounds = new kakao.maps.LatLngBounds()
            let markers = []

            for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
                position: {
                lat: data[i].y,
                lng: data[i].x,
                },
                content: data[i].place_name,
            })
            // @ts-ignore
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
            }
            console.log(markers)
            setMarkers(markers)

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds)
        }
        }, {
            radius: 400,
            location: new kakao.maps.LatLng(geolocation.lat, geolocation.long),
            // useMapBounds:true,
            // bounds: new kakao.maps.LatLngBounds(new kakao.maps.LatLng(30, 127), new kakao.maps.LatLng(50, 128))
        });
    }, [map])

    if(geolocation.lat === null) {
        return <></>
    }

    return (
        <Map // 로드뷰를 표시할 Container
            center={{
                lat: geolocation.lat,
                lng: geolocation.long,
            }}
            style={{
                width: "100%",
                height: "350px",
            }}
            level={5}
            onCreate={setMap}
            >
            {markers.map((marker) => (
                <MapMarker
                key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                position={marker.position}
                onClick={() => setInfo(marker)}
                >
                {info &&info.content === marker.content && (
                    <div style={{color:"#000"}}>{marker.content}</div>
                )}
                </MapMarker>
            ))}
            </Map>
    )
};

export default KakaoMapReact;