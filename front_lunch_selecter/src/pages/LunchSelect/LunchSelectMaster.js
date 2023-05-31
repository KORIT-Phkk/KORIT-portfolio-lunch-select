/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import Category from '../../components/SelectPage/Category/Category';
import Location from '../../components/SelectPage/Location/Location';
import * as s from './style';

const LunchSelectMaster = () => {
    const [ selectedCategories, setSelectedCategories ] = useState([]);
    const [ markerPosition, setMarkerPosition ] = useState({
        lat: null,
        lng: null
    });

    const navigate = useNavigate();
    const { code } = useParams();

    const insertCategory = useMutation(async() => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.post("http://localhost:8080/lunchselect/room/category/insert", {
            code: `0 ${code}`,
            categoryId: [...selectedCategories]
        }, option);
        return response;
    }, {
        onSuccess: (response) => {
            if(response.status === 200) {
                navigate(`/lunchselect/roulette/${code}/${markerPosition.lat}/${markerPosition.lng}`);
            }
        }
    });


    const backButton = useMutation(async() => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.put("http://localhost:8080/lunchselect/updateflag", {code}, option)
        window.location.href = "http://localhost:3000/";
    });

    const getMenuButtonHandle = () => {
        insertCategory.mutate();
    }
    const backButtonHandle = () => {
        backButton.mutate();
    }
    
    return (
        <div css={s.container}>
            <header>
           
                <button css={s.backButtonClick} onClick={backButtonHandle}>
                    <IoMdArrowRoundBack css={s.backButton} />
                </button>
            <div css={s.mapExplain}>현재 위치를 선택해주세용♡</div>
                <Location markerPosition={markerPosition} setMarkerPosition={setMarkerPosition}/>
            </header>

            <main>
                <div css={s.categoryBox}>
                    <h1 css={s.category}>카테고리를 선택하시오
                        <Category selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
                    </h1>
                </div>
            </main>
            
            <footer css={s.mainContainer}>
                <button css={s.locationAndCetegorySubmitButton} onClick={getMenuButtonHandle}>위치 및 카테고리 선택 완료!!</button>      
            </footer>
        </div>
    );
}


export default LunchSelectMaster;
