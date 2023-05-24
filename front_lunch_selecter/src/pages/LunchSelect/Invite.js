import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';



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
      <button onClick={inviteCodeHandleClick}>
        친구초대코드
      </button>
        <p>
          {getURL}
        </p>
      
    
    </div>
  );

}
export default Invite;