/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import * as s from './style';





const Roulette = () => {
 

  return (
    <div css={s.container}>
      <header css={s.headerContainer}>
        <img src="../main/logo1.png" css={s.img} />
      </header>
      <main css={s.mainContainer}>
        룰렛
      </main>
      <footer css={s.footerContatiner}>
          <button css={s.detailsButton}>상세히보기</button>
          <button css={s.returnButton}>다시돌리기</button>

      </footer>
   </div>
);
};

export default Roulette;