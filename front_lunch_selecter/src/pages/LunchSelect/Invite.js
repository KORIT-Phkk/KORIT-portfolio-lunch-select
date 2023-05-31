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
      const response = await axios.get("http://localhost:8080/lunchselect/room/check", option)
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
    <div css={s.inviteContainer}>
      <p css={s.getUrlCode}>{getURL}</p>
      <button onClick={inviteCodeHandleClick} css={s.inviteButton}>링크복사</button>
    </div>
  );

}
export default Invite;