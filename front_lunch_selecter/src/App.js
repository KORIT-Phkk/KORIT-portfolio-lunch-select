/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Global } from '@emotion/react';
import { Reset } from './style/Reset';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Main from './pages/main/Main';


const mainContainer = css`
    position: relative;
    margin: 10px auto;
    border: 3px solid #dbdbdb;
    padding: 10px;
    font-size: 1.6rem;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

function App() {
  return (
    <div css={mainContainer}>
      <Global styles={Reset}></Global>
      <Routes>
        <Route path="/" element={Main()} />
        <Route path="/login" element={Login()} />
        <Route path="/register" element={Register()} />
      </Routes>
    </div>
  );
}

export default App;
