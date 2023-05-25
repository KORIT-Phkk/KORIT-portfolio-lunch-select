/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

const inviteButton = css`
  width: 80px;
  height: 20px;
  margin-top: 25px;
  font-size: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: black;
  color: white;
  &:hover{
        background-color: #dbdbdb;
        color: black;
    }
    &:active{
        background-color: #eee;
    }
`;
const getUrlCode =css`
  font-size: 13px;
`;

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
      <button onClick={inviteCodeHandleClick} css={inviteButton}>
        친구초대코드
      </button>
        <p css={getUrlCode}>
          {getURL}
        </p>
    </div>
  );

}
export default Invite;