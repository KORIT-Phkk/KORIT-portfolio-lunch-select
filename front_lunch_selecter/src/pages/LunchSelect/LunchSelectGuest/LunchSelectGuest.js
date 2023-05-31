/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useParams } from 'react-router';
import * as s from './style';
import Category from './../../../components/SelectPage/Category/Category';
import { IoMdArrowRoundBack } from 'react-icons/io'



const LunchSelectGuest = () => {
    const [ selectedCategories, setSelectedCategories ] = useState([]);
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
        const response = await axios.post("http://localhost:8080/lunchselect/room/category/insert", {
            code: `1 ${code}`,
            categoryId: [...selectedCategories]
        }, option);
    });
    

    const readyHandleOnClick = () => {
        insertCategory.mutate();
    }

    const backButtonHandle = () => {
      
    }

    return (
        <div css={s.container}>
            <header>
                <IoMdArrowRoundBack  css={s.backButton} onClick={backButtonHandle}/>
                <span css={s.inform}>카테고리 선택 후 <br/> 준비완료 버튼을 눌러주세요!</span>
                <img css={s.imgCss} src="../../../main/yammy.png" alt="" />
                
            </header>

            <main>
                <div css={s.categoryBox}>
                    <Category selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
                </div>
            </main>
            
            <footer css={s.mainContainer}>
                <div css={s.selectMenu}></div>
                <button onClick={readyHandleOnClick} >김재영 바보!</button>
            </footer>
        </div>
    );
}


export default LunchSelectGuest;

