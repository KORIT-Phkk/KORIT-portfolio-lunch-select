import axios from 'axios';
import { async } from 'q';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router';

const WaitingRoom = () => {
    const navigate = useNavigate();
    const { code } = useParams();

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
        onSuccess: (response) => {
            if(response !== null) {
                navigate(`/lunchselect/guest/roulette/${code}`);
            }
        }
    }) 

    return (
        <div>
            기다리는중
        </div>
    );
};

export default WaitingRoom;