/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaRegSmileWink } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useMutation } from 'react-query';
import { useParams } from 'react-router';
import Category from './../../../components/SelectPage/Category/Category';
import Location from './../../../components/SelectPage/Location/Location';
import Invite from './../Invite';
import * as s from './style';
import { backEndURL, frontEndURL } from '../../../Config/URL/URL';

const LunchSelectMaster = () => {
    const [ selectedCategories, setSelectedCategories ] = useState([]);
    const [ markerPosition, setMarkerPosition ] = useState({
        lat: null,
        lng: null
    });
    const { code } = useParams();
    const [ errorMessage, setErrorMessage ] = useState("");
    const [ errorMessageFlag, setErrorMessageFlag ] = useState(false);

    useEffect(() => {
        const dropRoom = () => {
            const option = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            };
            const data = {
                code: code,
                flag: 0
            };
            axios.put(`${backEndURL}/lunchselect/room/updateflag`, data, option);
        }

        window.onpopstate = () => {
            dropRoom();
            window.onpopstate = null;
            window.onbeforeunload = null;
        }

        window.onbeforeunload = () => {
            dropRoom();
            window.onpopstate = null;
            window.onbeforeunload = null;
        }
    }, []);
    
    const insertCategory = useMutation(async() => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        try{
            const response = await axios.post(`${backEndURL}/lunchselect/room/category/insert`, {
                code: `0 ${code}`,
                categoryId: [...selectedCategories]
            }, option);
            if(response.status === 200) {
                window.location.replace(`/lunchselect/roulette/${code}/${markerPosition.lat}/${markerPosition.lng}`)
            }
        } catch(error){
            setErrorMessage(error.response.data.errorData.category)
            setErrorMessageFlag(true);
        }
    });
   
    const backButton = useMutation(async() => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const data = {
            code: code,
            flag: 0
        }
        await axios.put(`${backEndURL}/lunchselect/room/updateflag`, data, option)
        window.location.replace(`${frontEndURL}/`);
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
                <IoMdArrowRoundBack  css={s.backButton} onClick={backButtonHandle}/>
                <Invite/>
                <div css={s.mapExplain}>현재 위치를 선택해주세요&nbsp;<FaRegSmileWink/></div>
                <Location markerPosition={markerPosition} setMarkerPosition={setMarkerPosition}/>
            </header>
            <main css={s.mainContainer}>
                <h1 css={s.categoryName}>카테고리를 선택해주세요&nbsp;<FaRegSmileWink/></h1>
                {errorMessageFlag ? (<p css={s.errorMessage}>{errorMessage}</p>) : ""}
                <Category selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} setErrorMessageFlag={setErrorMessageFlag}/>                
            </main>
            
            <footer css={s.footerContainer}>
                <button css={s.locationAndCetegorySubmitButton} onClick={getMenuButtonHandle}>선택 완료!!</button>
            </footer>
        </div>
    );
}


export default LunchSelectMaster;
