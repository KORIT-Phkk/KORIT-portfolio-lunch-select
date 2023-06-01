import axios from 'axios';
import { async } from 'q';
import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router';

const WaitingRoom = () => {
    const navigate = useNavigate();
    const { code } = useParams();
    const [ outWaitingRoomFlag, setOutWaitingRoomFlag ] = useState(false);
    const [ selectedMenu, setSelectedMenu ] = useState("");

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
        return response;
    }, {
        refetchInterval: 1000,
        onSuccess: (response) => {
            if(response !== null) {
                setOutWaitingRoomFlag(true);
            }
        }
    }) 

    const outWaitingRoomButtonHandle = () => {
        navigate(`/lunchselect/guest/roulette/${code}?selectedMenu=${selectedMenu}`)
    }

    return (
        <div>
            <main>
                기다리는중
            </main>
            <footer>
                {outWaitingRoomFlag ? (<div><button onClick={outWaitingRoomButtonHandle}>룰렛 결과 보러가기</button></div>) : ""}
            </footer>

        </div>
    );
};

export default WaitingRoom;