import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import axios from 'axios';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useQuery } from 'react-query';



const ChooseMenu = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    console.log(searchParams)
    const returnButtonHandle = () => {
        
    }
    const [ returnData, setReturnData ] = useState();
    const [ loadState, setLoadState ] = useState(false);
    const [ flag, setFlag ] = useState(false);
    const [ restaurantId, setRestaurantId ] = useState();
    const [ restaurantLocation_x, setRestaurantLocation_x ] = useState();
    const [ restaurantLocation_y, setRestaurantLocation_y ] = useState();
    const [ isVisible, setIsVisible ] = useState(false);
     // 최초 도로명 주소를 넣을 곳
    let restaurantRoadAddress = searchParams.get("address");
    // 입력할 데이터: 가게이름 
    let restaurantName = searchParams.get("todayLunch");

  
    // const restaurantRoadAddress = "부산광역시 부산진구 가야공원로 62-1, 1층 (가야동)";

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
            // setRestaurantRoadAddress(location.value.value)
            // setRestaurantName(todayLunch)
            setLoadState(false);
            setFlag(true);
        }
    })

    useEffect(() => {
        setLoadState(true);
        
    }, [])

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
                console.log(response);
                // 받아올 데이터: 가게ID, x좌표, y좌표
                setRestaurantId(response.data.documents[0].id);
                setRestaurantLocation_x(response.data.documents[0].x);
                setRestaurantLocation_y(response.data.documents[0].y);
                
            }
            setFlag(false);
        }
    })

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
                            // 마우스 하버 시 정보 띄우기
                            onMouseOver={() => setIsVisible(true)}
                            onMouseOut={() => setIsVisible(false)}
                            // 클릭 이벤트 시 링크 이동
                            onClick={() => {
                                window.location.href = `http://place.map.kakao.com/${store.id}`
                            }}
                        >
                            {isVisible && (
                                <div style={{ minWidth: "150px" }}>
                                    <img
                                        alt="close"
                                        width="14"
                                        height="15"
                                        src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                                        style={{
                                            position: "absolute",
                                            right: "5px",
                                            top: "5px",
                                            cursor: "pointer",
                                        }}
                                        onClick={(e) => {
                                            // 이벤트 버블링 방지
                                            e.stopPropagation();
                                            window.location.href = `https://place.map.kakao.com/${store.id}`;
                                        }}
                                    />
                                    <div style={{ padding: "5px", color: "#000", fontSize: "15px" }}>{store.place_name}</div>
                                </div>
                            )}
                        </MapMarker>
                    ))}
             <div>{restaurantName}</div>
            </Map>
             <div >
                <Link to="/lunchselect"><button  onClick={returnButtonHandle}>다시돌려~</button></Link>
                 <Link><button >음식점 자세히 보기</button></Link>
             </div>
        </>
    );
};

export default ChooseMenu;
