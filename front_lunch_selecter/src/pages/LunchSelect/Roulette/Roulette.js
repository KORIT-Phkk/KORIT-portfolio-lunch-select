/** @jsxImportSource @emotion/react */
import axios from 'axios';
import { css } from '@emotion/react';
import React, { Fragment, useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { BiDish } from 'react-icons/bi'
import RouletteComponent from '../../../components/Roulette/RouletteComponent';
import ResultMap from './../../../components/SelectPage/ResultMap/ResultMap';
import * as s from './style';
import { Controls, PlayState, SplitWords, Timeline, Tween } from 'react-gsap';
import Loading from '../../../components/Loading/Loading';

const Roulette = () => {    
  const navigate = useNavigate();
  const [ flag, setFlag ] = useState(false);
  const { code, lat, lng } = useParams();
  const [ menuNames, setMenuNames ] = useState();
  const [ selectedMenu, setSelectedMenu ] = useState({restaurantAddress: "", restaurantId: "", restaurantName: ""});
  const [ roulettFlag, setRoulettFlag ] = useState(false);

  const getMenus = useQuery(["getMenus"], async () => {
    setFlag(false)
    const option = {
      params: {
          roomMasterCode: code,
          lat: lat,
          lng: lng
      },
      headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}` 
      }
    }
    const response = await axios.get("http://localhost:8080/lunchselect/menu/list", option)
    return response;
    }

  , {
    enabled: flag,
    onSuccess: (response) => {
      if(response.status === 200) {
        const menuNameList = [];
        response.data.forEach(element => {
          menuNameList.push(element.name);
        });
  
        setMenuNames(menuNameList);
        selectMenu.mutate(response.data);
      }
    }
  });

  const selectMenu = useMutation(["selectmenu"], async(menuList) => {  
    const option = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json"
      }
    }
    const data = {
      roomMasterCode: `0 ${code}`,
      menuList: menuList
    }
    const response = await axios.put("http://localhost:8080/lunchselect/menu/select", JSON.stringify(data), option);
    return response;
  }, {
      onSuccess: () => {
        getSelectedMenu();
      }
  });

  const getSelectedMenu = async () => {
    const option = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      },
      params: {
        code: `0 ${code}`
      }
    }

    try {
      const response = await axios.get("http://localhost:8080/lunchselect/menu/result", option);
      setSelectedMenu(response.data);
      // setSelectedMenu({restaurantName:"시엔스시(CN'스시)", restaurantAddress:"서울특별시 종로구 종로 19, 르메이에르종로타운 2층 201-1, 201-2호 (종로1가)"})
      return response;
    } catch(error) {
      return error;
    }
  }

  useEffect(() => {
    setRoulettFlag(false);
    setFlag(true);
  }, [])

  const reRenderButton = () => {
    window.location.reload();
  }

  const homeButton = () => {
    window.location.replace("/");
  }

  if(getMenus.isLoading) {
    return <Loading/>
  }

  if(!getMenus.isLoading)
  return (
    <div css={s.container}>
      <header css={s.headerContainer}>
        {roulettFlag ?
        <div css={s.todaymenu}>
          <div css={s.icon}>
          <BiDish/>
          </div>
          <div>
            오늘 점심은 이거다!
          </div>
        </div>
          : ""}
      </header>

      <main>
      {roulettFlag ? <ResultMap restaurantAddress={selectedMenu.restaurantAddress} restaurantName={selectedMenu.restaurantName}/> : ""}
      {roulettFlag ? <></> : (<RouletteComponent menuNames={menuNames} selectedMenu={selectedMenu.restaurantName} setRoulettState={[ roulettFlag, setRoulettFlag ]}/>)}
      </main>

      <footer>
        {roulettFlag ? (<div><button css={s.buttonStyle} onClick={reRenderButton}>다시!!</button> <button css={s.buttonStyle} onClick={homeButton}>홈으로</button></div>) : ""}
      </footer>
    </div>
    
  );
};

export default Roulette;