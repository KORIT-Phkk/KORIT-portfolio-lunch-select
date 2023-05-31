/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import QueryString from 'qs';


const Roulette = () => {    
  const navigate = useNavigate();
  const { code, lat, lng } = useParams();
  const [ menuNames, setMenuNames ] = useState([]);
  
  const getMenus = async () => {
    const menuNameList = [];
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

    try {
      const response = await axios.get("http://localhost:8080/lunchselect/menu/list", option)

      response.data.forEach(element => {
        menuNameList.push(element.name);
      });

      setMenuNames(menuNameList);

      selectMenu.mutate(response.data);
      
      return response;
    } catch(error) {
      return null;
    }

  };

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

    const response = await axios.get("http://localhost:8080/lunchselect/menu/result", option);
    console.log(response)
    return response
  }

  useEffect(() => {
    getMenus();
  }, [])



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