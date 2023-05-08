import React, { useState, useEffect } from 'react'

function MapTest() {
  const [markers, setMarkers] = useState([])

  useEffect(() => {
    const map = new window.kakao.maps.Map(document.getElementById('map'), {
      center: new window.kakao.maps.LatLng(35.1536, 129.0595),
      level: 3,
    })

    const ps = new window.kakao.maps.services.Places()

    ps.categorySearch(
      'FD6', // 카테고리 코드 'FD6'은 음식점입니다
      (data, status, _pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds();

          // 기존 마커 객체를 가져와서 위치만 업데이트합니다
          data.forEach((place) => {
            const marker = markers.find(
              (m) => m.content === place.place_name
            )
            if (marker) {
              marker.setPosition(new window.kakao.maps.LatLng(35.1536, 129.0595))
            } else {
              const newMarker = new window.kakao.maps.Marker({
                map: map,
                position: new window.kakao.maps.LatLng(35.1536, 129.0595),
              })
              // 새로운 마커 객체를 추가합니다
              setMarkers((markers) => [
                ...markers,
                { marker: newMarker, content: place.place_name },
              ])
            }
            bounds.extend(new window.kakao.maps.LatLng(35.1536, 129.0595))
          })

          map.setBounds(bounds)
        }
      }
    )
  }, []) // 마운트시에만 실행

  return <div id="map" style={{ width: '500px', height: '500px' }}></div>
}

export default MapTest;
