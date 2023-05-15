import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const Simple = () => {
    const [ returnData, setReturnData ] = useState();
    const [ loadState, setLoadState ] = useState(false);
    const [ flag, setFlag ] = useState(false);
    const [ restaurantId, setRestaurantId ] = useState();
    const [ restaurantLocation_x, setRestaurantLocation_x ] = useState();
    const [ restaurantLocation_y, setRestaurantLocation_y ] = useState();

    const restaurantRoadAddress = "부산광역시 부산진구 가야공원로 62-1, 1층 (가야동)";

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
                setReturnData(response.data.meta.same_name.selected_region);
            }
            setLoadState(false);
            setFlag(true);
        }
    })

    useEffect(() => {
        setLoadState(true);
    }, [])
    
    
    const restaurantName = "가야공원";

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
                    {getRestaurantData.data.data.documents.map(store => (
                        <MapMarker
                            key={store.id}
                            position={{
                                lat: store.y,
                                lng: store.x,
                            }}
                        />
            
                    ))}
            </Map>
            <Link to={`https://place.map.kakao.com/${restaurantId}`} ><button>버튼</button></Link>
        </>
    );
};

export default Simple;