/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import * as s from './style-Invite';

const Invite = () => {

  const [ guestURL, setGuestURL ] = useState(false);

  const { code } = useParams();

  const getGuestURL = async() => {
      const option = {
        params: {
          roomMasterCode: code
        },
          headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
      }

      try {
        const response = await axios.get("http://localhost:8080/lunchselect/guesturl", option)
        setGuestURL(response.data);
        return response;
      } catch(error) {
        return error;
      }
  }

  const inviteCodeHandleClick = () => {
    navigator.clipboard.writeText(`http://localhost:3000/lunchselect/room/guest/${guestURL}`);
  }

  useEffect(() => {
    getGuestURL();
  })

  return (
    <div css={s.inviteContainer}>
      <p css={s.getUrlCode}>{guestURL}</p>
      <button onClick={inviteCodeHandleClick} css={s.inviteButton}>링크복사</button>
    </div>
  );

}
export default Invite;