import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Navigate, useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const GuestRoulette = () => {
    const navigate = useNavigate();
    const { code } = useParams();
    const [searchParams] = useSearchParams();

    const getSelectedMenu = useQuery(["getSelectedMenu"], async () => {
        const option = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          },
          params: {
            code: `1 ${code}`
          }
        }
        const response = await axios.get("http://localhost:8080/lunchselect/menu/result", option);

        return response;
    }, {
        refetchInterval: 1000,
        onSuccess: (response) => {
            if(response.data.restaurantName !== searchParams.get("selectedMenu")){
                navigate(`/lunchselect/room/guest/waiting/${code}`);
            }
        }
    }) 
    
    // if(getSelectedMenu.isLoading){
    //     return <div>로딩 중...</div>
    // }
    console.log(searchParams.get("selectedMenu"))
    return (
        <div>
            {searchParams.get("selectedMenu")}
        </div>
    );
};

export default GuestRoulette;