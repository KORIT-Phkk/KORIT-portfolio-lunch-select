import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';



const Invite = () => {
 
  const [ guestURL, setGuestURL ] = useState(false);
  const [ getURL, setGetURL ] = useState(true);


  const getGuestURL = useQuery(["getGuestURL"], async() => {
      const option = {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
      }
      const response = await axios.get("http//localhost:8080/auth/guesturl", option)
      console.log(response)
      return response;
  },{
      enabled: !guestURL,
      onSuccess: () => {
          setGuestURL(false);
      }
  })

  // const inviteCodeHandleClick = () => {
  //     setGuestURL(true);
  // }

  if(getGuestURL.isLoading){
    return <div>
         {/* <button onClick={inviteCodeHandleClick}>초대코드</button> */}
         <p>초대코드 생성 중</p>
    </div>
  }
  
  return (
    <div>
      {/* <button onClick={inviteCodeHandleClick}>초대코드</button> */}
      {getGuestURL ? (<p>{guestURL}</p>) : (<p>초대코드 생성 중</p>)} 
    </div>
  );

}
export default Invite;