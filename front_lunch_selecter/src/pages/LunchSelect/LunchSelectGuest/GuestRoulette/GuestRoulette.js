/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import * as s from './style';
import { BiDish } from 'react-icons/bi';
import { backEndURL } from '../../../../Config/URL/URL';

const GuestRoulette = () => {
    const { code } = useParams();

    const getFlagAndSeletedMenu = useQuery(["getFlagAndSeletedMenu"], async() => {
        const option = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          },
          params: {
            code: code
          }
        }
        const response = await axios.get(`${backEndURL}/lunchselect/room/getflag`, option)
        return response
      }, {
        refetchInterval: 1000,
        onSuccess: (response) => {
          if(response.data.restaurantName !== localStorage.getItem("selectedMenu")) {
              localStorage.removeItem("selectedMenu");
              window.location.replace(`/lunchselect/room/guest/waiting/${code}`);
          }     
        }
      });
      
      const homeButton = () => {
        window.location.replace('/');
      }

    return (
        <div css={s.container}>
          <div css={s.icon}><BiDish/></div>
          <div css={s.todayLunch}>오늘 점심은 이거다!</div>
          <div css={s.todayMenu}>{localStorage.getItem("selectedMenu")}</div>
          <span css={s.mention}>자세한 정보는 방장 화면을 확인해주세요</span>
          <button css={s.buttonStyle} onClick={homeButton}>홈으로</button>
        </div>
    );
};

export default GuestRoulette;