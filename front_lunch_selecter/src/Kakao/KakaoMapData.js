import React, { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

const KakaoMapData = () => {
  const { kakao } = window;
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const ps = new kakao.maps.services.Places();
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    const placeSearch = (data, status, pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          const place = data[i];
          const marker = new kakao.maps.Marker({
            map,
            position: new kakao.maps.LatLng(place.y, place.x),
          });

          kakao.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(
              '<div style="padding:5px;font-size:12px;">' +
                place.place_name +
                '</div>'
            );
            infowindow.open(map, marker);
          });

          bounds.extend(new kakao.maps.LatLng(place.y, place.x));
        }

        setMarkers(data);
        map.setBounds(bounds);
      }
    };

    ps.categorySearch('FD6', placeSearch, {
      useMapBounds: true,
    });
  }, [map]);

  const handleMapLoaded = (map) => {
    setMap(map);
  };

  return (
    <Map
      center={{ lat: 37.56, lng: 126.97 }}
      style={{ width: '500px', height: '500px' }}
      level={5}
      onLoad={handleMapLoaded}
    />
  );
};

export default KakaoMapData;
