import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const Simple = () => {
    const [ returnData, setReturnData ] = useState();
    const [ loadState, setLoadState ] = useState(false);
    const [ flag, setFlag ] = useState(false);
    const [ restaurantId, setRestaurantId ] = useState();
    const [ restaurantLocation_x, setRestaurantLocation_x ] = useState();
    const [ restaurantLocation_y, setRestaurantLocation_y ] = useState();
    const [ isOpen, setIsOpen ] = useState(false);

    // 최초 도로명 주소를 넣을 곳
    const restaurantRoadAddress = "부산광역시 부산진구 가야공원로 62-1, 1층 (가야동)";

    // useQuery를 사용해 kakaoAPI로 get요청 (kakaoRestAPI)
    const getRestaurantRoadAddress = useQuery(["getRestaurantRoadAddress"], async () => {
        const option = {
            headers: {
                Authorization: "KakaoAK 498caf520d8165a09116280aca1afc08"
            }
        }
        const response = await axios.get(`https://dapi.kakao.com/v2/local/search/keyword?query=${restaurantRoadAddress}`, option);
        return response;
    }, {
        enabled: loadState,
        onSuccess: (response) => {
            if(!response.isLoading) {
                // 반환되는 데이터: 도로명 주소를 넣었을 때 kakao측에서 구분해놓은 주소
                setReturnData(response.data.meta.same_name.selected_region);
            }
            setLoadState(false);
            setFlag(true);
        }
    })

    useEffect(() => {
        setLoadState(true);
    }, [])
    
    // 입력할 데이터: 가게이름 +
    const restaurantName = "가야공원";

    // 위에서 반환된 주소 ex) 부산 부산진구 중앙대로 000번길
    const getRestaurantData = useQuery(["getRestaurantData"], async () => {
        const option = {
            headers: {
                Authorization: "KakaoAK 498caf520d8165a09116280aca1afc08"
            }
        }
        const response = await axios.get(`https://dapi.kakao.com/v2/local/search/keyword?query=${returnData + " " + restaurantName}`, option);
        return response;
    }, {
        enabled: flag,
        onSuccess: (response) => {
            if(!response.isLoading){
                // 받아올 데이터: 가게ID, x좌표, y좌표
                setRestaurantId(response.data.documents[0].id);
                setRestaurantLocation_x(response.data.documents[0].x);
                setRestaurantLocation_y(response.data.documents[0].y);
            }
            setFlag(false);
        }
    })
    console.log(getRestaurantData)

    if(getRestaurantData.isLoading){
        <>로딩중...</>
    }
    
    if(getRestaurantData.data)
    return (
        <>
            <Map
                center={{
                    lat: restaurantLocation_y,
                    lng: restaurantLocation_x,
                }}
                style={{
                    width: "1000px",
                    height: "1000px",
                }}
                level={2}
                >
                    {/* 반복을 통해 마커 여러개 표시 */}
                    {getRestaurantData.data.data.documents.map(store => (
                        <MapMarker
                            key={store.id}
                            position={{
                                lat: store.y,
                                lng: store.x,
                            }}
                            clickable={true}
                            onClick={() => setIsOpen(true)}
                        >
                            {isOpen && (
                                <div style={{ minWidth: "150px" }}>
                                    <img
                                        alt="close"
                                        width="14"
                                        height="13"
                                        src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                                        style={{
                                            position: "absolute",
                                            right: "5px",
                                            top: "5px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => setIsOpen(false)}
                                    />
                                    <div style={{ padding: "5px", color: "#000", fontSize: "15px" }}>{store.place_name}</div>
                                </div>
                            )}
                        </MapMarker>
                    ))}
            </Map>
            <Link to={`https://place.map.kakao.com/${restaurantId}`} ><button>버튼</button></Link>
        </>
    );
};

export default Simple;