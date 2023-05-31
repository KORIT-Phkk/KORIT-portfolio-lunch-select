/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import * as s from './style-Invite';

const Invite = () => {

  const [ guestURL, setGuestURL ] = useState(false);
  const [ getURL, setGetURL ] = useState();

  const { roomMasterCode } = useParams();
  const getGuestURL = useQuery(["getGuestURL"], async() => {
      const option = {
        params: {
          roomMasterCode: roomMasterCode
        },
          headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
      }
      const response = await axios.get("http://localhost:8080/lunchselect/guesturl", option)
      setGetURL(response.data);
      return response;
  },{
      enabled: !guestURL,
      onSuccess: () => {
          setGuestURL(false);
      }
  })

  const inviteCodeHandleClick = () => {
      setGuestURL(true);
  }
  
  return (
    <div>
      {/* <button onClick={inviteCodeHandleClick}>초대코드</button> */}
      {getGuestURL ? (<p>{guestURL}</p>) : (<p>초대코드 생성 중</p>)} 
    </div>
  );
}
export default Invite;