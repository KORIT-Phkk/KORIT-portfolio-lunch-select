/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useParams } from 'react-router';
import * as s from './style';
import Category from './../../../components/SelectPage/Category/Category';



const LunchSelectGuest = () => {
    const [ selectedCategories, setSelectedCategories ] = useState([]);
    const [ readyButtonHandle, setReadyButtonHandle ] = useState(true);
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
        setReadyButtonHandle(false)
    }


    return (
        <div css={s.container}>
            <header>
                
            </header>

            <main>
                <div css={s.categoryBox}>
                    <Category selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
                </div>
            </main>
            
            <footer css={s.mainContainer}>
                <div css={s.selectMenu}></div>
                {readyButtonHandle ? (<div><button onClick={readyHandleOnClick}>카테고리 선택 완료?</button></div>) : <div><button onClick={readyHandleOnClick} disabled={true}>카테고리 선택 완료됨 버튼</button></div>}
            </footer>
        </div>
    );
}


export default LunchSelectGuest;

