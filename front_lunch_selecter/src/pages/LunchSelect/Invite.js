/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import * as s from './style-Invite';
import { backEndURL, frontEndURL } from '../../Config/URL/URL';


const Invite = () => {
  const [ guestURL, setGuestURL ] = useState(false);

  const { code } = useParams();

  const getGuestURL = useQuery(["getGuestURL"], async() => {
      console.log(code)
      const option = {
        params: {
          roomMasterCode: code
        },
          headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
      }

      try {
        const response = await axios.get(`${backEndURL}/lunchselect/guesturl`, option)
        setGuestURL(response.data);
        return response;
      } catch(error) {
        alert(error.response.data.errorData.room)
        window.location.replace(`${frontEndURL}/`)
      }
  },{
    enabled: !!code
  })

  const inviteCodeHandleClick = () => {
    navigator.clipboard.writeText(`${frontEndURL}/lunchselect/room/guest/${guestURL}`);
  }

  return (
    <div css={s.inviteContainer}>
      <p css={s.getUrlCode}>{getGuestURL.isLoading ? "" : getGuestURL?.data?.data}</p>
      <button onClick={inviteCodeHandleClick} css={s.inviteButton}>링크복사</button>
    </div>
  );

}
export default Invite;