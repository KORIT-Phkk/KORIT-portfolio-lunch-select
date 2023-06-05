import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style'
import { Reveal, Tween } from 'react-gsap';

const FadeInLeft = ({ children }) => (
  <Tween
    from={{ opacity: 0, transform: 'translate3d(-100vw, 0, 0)' }}
    ease="back.out(1.4)"
  >
    {children}
  </Tween>
);

const Loading = () => {
  return (
    <div css={s.loading}>
      <img css={s.imgCss} src="../../../../main/logo1.png" />
      <Reveal repeat trigger={<div />}>
        <FadeInLeft>
          <h3>로딩 중...</h3>
        </FadeInLeft>
      </Reveal>
    </div>
  );
};

export default Loading;