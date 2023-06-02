/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import * as s from '../style';
import Category from '../../../../components/SelectPage/Category/Category';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { FaRegSmileWink } from 'react-icons/fa'



const LunchSelectGuest = () => {
    const [ selectedCategories, setSelectedCategories ] = useState([]);
    const [ readyButtonHandle, setReadyButtonHandle ] = useState(true);
    const { code } = useParams();
    const navigate = useNavigate();

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
      
            if (response.data === false) {
              alert("없는 방입니다~");
              window.location.replace("http://localhost:3000");
            }
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
      }, []);
      
    const insertCategory = useMutation(async() => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        await axios.post("http://localhost:8080/lunchselect/room/category/insert", {
            code: `1 ${code}`,
            categoryId: [...selectedCategories]
        }, option);
    });
    

    const readyHandleOnClick = () => {
        insertCategory.mutate();
        setReadyButtonHandle(false);
        navigate(`/lunchselect/room/guest/waiting/${code}`);
    }

    const backButtonHandle = () => {
      navigate("/")
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

