/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import QueryString from 'qs';


const Roulette = () => {    
  const navigate = useNavigate();
  const { code, lat, lng } = useParams();
  const [ flag, setFlag ] = useState(false);
  const [ menuNames, setMenuNames ] = useState([]);
  const [ menuIds, setMenuIds ] = useState([]);
  
  const getMenus = useQuery(["getMenus"], async() => {
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

    const response = await axios.get("http://localhost:8080/lunchselect/getmenus", option)   
    return response;
  }, {
      onSuccess: (response) => {
        setFlag(true);
        const menuNameList = [];
        const menuIdList = [];

        response.data.forEach(element => {
          menuNameList.push(element.name);
          menuIdList.push(element.id);
        });

        setMenuNames(menuNameList);
        setMenuIds(menuIdList);
      }
  });

  const selectMenu = useQuery(["selectmenu"], async() => {
    setFlag(false);    
    const option = {
      params: {
        menuIds: menuIds
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      },
      paramsSerializer: params => QueryString.stringify(params, {arrayFormat: 'repeat'})
    }
    const response = await axios.get("http://localhost:8080/lunchselect/selectmenu", option);
    return response;
  }, {
      enabled: flag,
      onSuccess: (response) => {
        console.log(response)
      }
  });



  if(getMenus.isLoading) {
    <>로딩중...</>
  }

  if(!getMenus.isLoading)
  return (
    <div>

    </div>
  );
};

export default Roulette;