import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

const GuestRoulette = () => {
    const { code } = useParams();

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
        return response
      }, {
        refetchInterval: 1000,
        onSuccess: (response) => {
          if(response.data.restaurantName !== localStorage.getItem("selectedMenu")) {
              localStorage.removeItem("selectedMenu");
              window.location.replace(`/lunchselect/room/guest/waiting/${code}`);
          }     
        }
      });

    return (
        <div>
            {localStorage.getItem("selectedMenu")}
        </div>
    );
};

export default GuestRoulette;