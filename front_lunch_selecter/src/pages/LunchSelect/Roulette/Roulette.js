/** @jsxImportSource @emotion/react */
import axios from 'axios';
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import RouletteComponent from '../../../components/Roulette/RouletteComponent';
import ResultMap from './../../../components/SelectPage/ResultMap/ResultMap';

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Roulette = () => {    
  const navigate = useNavigate();
  const [ flag, setFlag ] = useState(false);
  const { code, lat, lng } = useParams();
  const [ menuNames, setMenuNames ] = useState();
  const [ selectedMenu, setSelectedMenu ] = useState({restaurantAddress: "", restaurantId: "", restaurantName: ""});
  const [ roulettFlag, setRoulettFlag ] = useState(false);
  const [ upFlag, setUpFlag] = useState(false);


  useEffect(() => {
    const option = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    }
    const data = {
        code: code,
        flag: 2,
        returnRoulette: false
    }
    axios.put("http://localhost:8080/lunchselect/room/updateflag", data, option)
  }, [])

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
    } , {
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
    // nowFlagUp.mutate();
    window.location.reload();
  }

  const homeButton = () => {
    window.location.replace("/");
  }

  if(getMenus.isLoading) {
    <>로딩중...</>
  }

  if(!getMenus.isLoading)
  return (
    <div css={container}>
      {roulettFlag ? <ResultMap restaurantAddress={selectedMenu.restaurantAddress} restaurantName={selectedMenu.restaurantName}/> : ""}
      {roulettFlag ? <></> : (<RouletteComponent menuNames={menuNames} selectedMenu={selectedMenu.restaurantName} setRoulettState={[ roulettFlag, setRoulettFlag ]}/>)}  
      {roulettFlag ? (<div><button onClick={reRenderButton}>다시돌려</button> <button onClick={homeButton}>메인으로</button></div>) : ""}
    </div>
    
  );
};

export default Roulette;