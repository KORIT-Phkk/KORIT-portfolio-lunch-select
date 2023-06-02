import axios from 'axios';
import { async } from 'q';
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router';

const WaitingRoom = () => {
    const { code } = useParams();
    const [ outWaitingRoomFlag, setOutWaitingRoomFlag ] = useState(false);

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
              window.location.replace("http://localhost:3000/lunchselect/room/close");
            }
          } catch (error) {

          }
        }
        fetchData();
      }, []);

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
        localStorage.setItem("selectedMenu", response.data.restaurantName)
        console.log(response)
        return response
      }, {
        refetchInterval: 1000,
        onSuccess: (response) => {
          if(response.data.flag === 0){
            window.location.replace("http://localhost:3000/lunchselect/room/close");
          } else if(response.data.restaurantName !== null && response.data.flag !== 0 && response.data.restaurantName !== "N/A") {
            setOutWaitingRoomFlag(true);
          }     
        }
      });

    const outWaitingRoomButtonHandle = () => {
        window.location.replace(`/lunchselect/guest/roulette/${code}`)
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