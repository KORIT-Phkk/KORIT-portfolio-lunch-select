import { Global } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './App.css';
import { Reset } from './style/Reset';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Main from './pages/main/Main';
import FindEmail from './pages/findEmail/FindEmail';
import FindPassword from './pages/findPassword/FindPassword';
import EmailAuthenticationNumber from './pages/findEmail/EmailAuthenticationNumber';
import UpdatePassword from './pages/findPassword/UpdatePassword';
import LunchSelect from './pages/LunchSelect/LunchSelect';
import ChooseMenu from './pages/LunchSelect/ChooseMenu/ChooseMenu';


const mainContainer = css`
    position: relative;
    margin: 10px auto;
    border: 3px solid #dbdbdb;
    padding: 10px;
    font-size: 1.6rem;
    width: 1440px;
    height: 3000px;
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
        <Route path="/findemail" element={FindEmail()} />
        <Route path="/emailauthenticationnumber" element={EmailAuthenticationNumber()} />
        <Route path="/findpassword" element={FindPassword()} />
        <Route path="/updatepassword" element={UpdatePassword()} />
        <Route path="/lunchselect" element={LunchSelect()} />
        <Route path="/choosemenu" element={ChooseMenu()} />

      </Routes>
    </div>
  );
}

export default App;
