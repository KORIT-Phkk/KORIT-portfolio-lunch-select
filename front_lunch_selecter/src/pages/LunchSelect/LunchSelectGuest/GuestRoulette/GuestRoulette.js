import axios from 'axios';
import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Navigate, useParams } from 'react-router';

const GuestRoulette = () => {
    const { code } = useParams();
    const [test, setTest] = useState(true);
    const { selectedMenu, setSelectedMenu } = useState("");

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
        setSelectedMenu(response.data.restaurantName)
        console.log(response.data.restaurantName)
        return response;
    }, {
        enabled:test,
        onSuccess: (response) => {
            if(response !== undefined){
                setTest(false)
            }
        }
    }) 
  
    return (
        <div>
          asdf
            {selectedMenu}
        </div>
    );
};

export default GuestRoulette;