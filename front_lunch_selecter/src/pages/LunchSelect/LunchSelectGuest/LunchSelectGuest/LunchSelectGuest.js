/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaRegSmileWink } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import Category from '../../../../components/SelectPage/Category/Category';
import * as s from '../style';



const LunchSelectGuest = () => {
    const [ selectedCategories, setSelectedCategories ] = useState([]);
    const [ readyButtonHandle, setReadyButtonHandle ] = useState(true);
    const [ checkRoomCount, setCheckRoomCount ] = useState(0); 
    const { code } = useParams();

    useEffect(() => {
        async function fetchData() {
          const option = {
            params: {
              code: code,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          };
          try {
            const response = await axios.get("http://localhost:8080/lunchselect/room/check", option);
            console.log("useEffect: " + response.data)
            if (response.data === false) {
              window.location.replace("http://localhost:3000/lunchselect/room/close");
            }
          } catch (error) {
            
          }
        }
        fetchData();
      }, []);
  
    const getFlagAndSeletedMenu = useQuery(["getFlagAndSeletedMenu"], async() => {
      const option = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        params: {
          code: code
        }
      }
      const response = await axios.get("http://localhost:8080/lunchselect/room/getflag", option)
      localStorage.setItem("selectedMenu", response.data.restaurantName)
      
      return response
    }, {
      refetchInterval: 1000,
      onSuccess: (response) => {
        if(response.data.flag === 0){
          setCheckRoomCount(checkRoomCount + 1)
        } else if(response.data.restaurantName !== undefined && response.data.flag !== 0) {
          window.location.replace(`/lunchselect/room/guest/waiting/${code}`);
        }     
      }
    });

    const insertCategory = useMutation(async() => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
       
        if(option.headers.Authorization === "Bearer null") {
          await axios.post("http://localhost:8080/lunchselect/room/category/insert", {
            code: `2 ${code}`,
            categoryId: [...selectedCategories]
          }, option);
        } else {
          await axios.post("http://localhost:8080/lunchselect/room/category/insert", {
              code: `1 ${code}`,
              categoryId: [...selectedCategories]
          }, option);
        }
    });
    if(checkRoomCount > 1){
      window.location.replace("http://localhost:3000/lunchselect/room/close");
    }

    const readyHandleOnClick = () => {
        insertCategory.mutate();
        setReadyButtonHandle(false);
        window.location.replace(`/lunchselect/room/guest/waiting/${code}`);
    }

    const backButtonHandle = () => {
      window.location.replace("/")
    }

    return (
      <div css={s.container}>
        <header css={s.headerContainer}>
            <IoMdArrowRoundBack  css={s.backButton} onClick={backButtonHandle}/>
            <span css={s.inform}>카테고리 선택 후 <br/> 준비완료 버튼을 눌러주세요!</span>
            <span css={s.warning}>위치는 방장만 선택할 수 있습니다</span>
            <img css={s.imgCss} src="../../../main/yammy.png" alt="" />
        </header>

        <main css={s.mainContainer}>
              <h1 css={s.categoryName}>카테고리를 선택해주세요&nbsp;<FaRegSmileWink/></h1>
              <Category selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
        </main>
        
        <footer css={s.footerContainer}>
            <button css={s.readySubmitButton} onClick={readyHandleOnClick}>카테고리 선택 완료!</button>           
        </footer>
    </div>
    );
}


export default LunchSelectGuest;

