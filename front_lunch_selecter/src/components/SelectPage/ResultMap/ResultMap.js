import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import axios from 'axios';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';

const headerStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    margin-bottom: 10px;
`;

const mainStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

const ResultMap = ({ restaurantName, restaurantAddress }) => {
    const { kakao } = window;
    const [ isVisible, setIsVisible ] = useState(false);

    const [ restaurantDatas, setRestaurantDatas ] = useState([]);

    useEffect(() => {
        getRestaurantRegion();
    }, [])

    const getRestaurantRegion = async () => {
        const option = {
            headers: {
                Authorization: "KakaoAK 498caf520d8165a09116280aca1afc08"
            }
        }

        try {
            const response = await axios.get(`https://dapi.kakao.com/v2/local/search/keyword?query=${restaurantAddress}`, option);
            getRestaurantData(response.data.meta.same_name.selected_region)
            return response;
        } catch(error) {
            return error;
        }
    }

    const getRestaurantData = async (region) => {
        const option = {
            headers: {
                Authorization: "KakaoAK 498caf520d8165a09116280aca1afc08"
            }
        }
        const response = await axios.get(`https://dapi.kakao.com/v2/local/search/keyword?query=${region + " " + restaurantName}`, option);

        if(response.data.documents.length !== 0) {
            setRestaurantDatas(response.data.documents);
        } else {
            new kakao.maps.services.Geocoder().addressSearch(restaurantAddress, (result, status) => {

                if(status === kakao.maps.services.Status.OK) {
                    setRestaurantDatas([result[0]]);

                } else {
                    console.error("데이터를 찾지 못했습니다.");
                }
            })
        }

        return response;
    }

    if(restaurantDatas.length !== 0)
    return (
        <>
        <header css={headerStyle}>
            <h1>{restaurantName}</h1>
        </header>

        <main css={mainStyle}>
            <Map
                center={{
                    lat: restaurantDatas[0].y,
                    lng: restaurantDatas[0].x,
                    // lat: 127.888,
                    // lng: 36.888
                }}
                style={{
                    width: "300px",
                    height: "200px",
                }}
                level={2}
                >
                    {restaurantDatas.map((store, index) => (
                        <MapMarker
                            key={index}
                            position={{
                                lat: store.y,
                                lng: store.x,
                            }}
                            clickable={true}
                            onClick={() => {
                                if(store.id !== undefined) {
                                    window.location.href = `http://place.map.kakao.com/${store.id}`
                                }
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
                                            e.stopPropagation();
                                            window.location.href = `https://place.map.kakao.com/${store.id}`;
                                        }}
                                    />
                                    <div style={{ padding: "5px", color: "#000", fontSize: "15px" }}>{store.place_name}</div>
                                </div>
                            )}
                        </MapMarker>
                    ))}
            </Map>
        </main>
        </>
    );
};

export default ResultMap;
