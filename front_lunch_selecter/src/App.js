import { Global } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LunchSelect from './pages/LunchSelect/LunchSelect';

import LunchSelectGuest from './pages/LunchSelect/LunchSelectGuest/LunchSelectGuest';
import LunchSelectMaster from './pages/LunchSelect/LunchSelectMaster/LunchSelectMaster';

import ChooseMenu from './pages/LunchSelect/ChooseMenu/ChooseMenu';
import Roulette from './pages/LunchSelect/Roulette/Roulette';
import NotFound from './pages/NotFound/NotFound';
import Main from './pages/main/Main';
import { Reset } from './style/Reset';

import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import UpdatePassword from './pages/Auth/UpdatePassword/UpdatePassword';
import OAuth2Login from './pages/Auth/OAuth/OAuth2Login/OAuth2Login';
import OAuth2Register from './pages/Auth/OAuth/OAuth2Register/OAuth2Register';
import OAuth2Merge from './pages/Auth/OAuth/OAuth2Merge/OAuth2Merge';
import FindEmail from './pages/Auth/FindUser/FindEmail/FindEmail';
import FindEmailResult from './pages/Auth/FindUser/FindEmail/FindEmailResult/FindEmailResult';
import FindPassword from './pages/Auth/FindUser/FindPassword/FindPassword';
import ResetPassword from './pages/Auth/FindUser/FindPassword/ResetPassword/ResetPassword';
import AuthRoute from './components/Routes/AuthRoute/AuthRoute';




const mainContainer = css`
    position: relative;
    margin: 10px auto;
    border: 3px solid #dbdbdb;
    border-radius: 20px;
    padding: 10px;
    font-size: 1.6rem;
    width: 360px;
    height: 640px;
`;
function App() {

  return (
    <div css={mainContainer}> 
      <Global styles={Reset}></Global>
      <Routes>
        <Route path="/auth/login" element={<AuthRoute path="/auth/login" element={<Login/>}/>}/>
        <Route path="/auth/register" element={<AuthRoute path="/auth/register" element={<Register/>}/>}/>
        <Route path="/auth/findemail" element={<AuthRoute path="/auth/findemail" element={<FindEmail/>}/>}/>
        <Route path="/auth/findemail/result" element={<AuthRoute path="/auth/findemail/result" element={<FindEmailResult/>}/>}/>
        <Route path="/auth/findpassword" element={<AuthRoute path="/auth/findpassword" element={<FindPassword/>}/>}/>
        <Route path="/auth/resetpassword" element={<AuthRoute path="/auth/resetpassword" element={<ResetPassword/>}/>}/>
        <Route path="/auth/updatepassword" element={<AuthRoute path="/auth/updatepassword" element={<UpdatePassword/>}/>}/>
        <Route path="/auth/oauth2/login" element={<AuthRoute path={"/auth/oauth2/login"} element={<OAuth2Login/>}/>}/>
        <Route path="/auth/oauth2/register" element={<AuthRoute path={"/auth/oauth2/register"} element={<OAuth2Register/>}/>}/>
        <Route path="/auth/oauth2/merge" element={<AuthRoute path={"/auth/oauth2/merge"} element={<OAuth2Merge/>}/>}/>
        <Route path="/" element={<AuthRoute path="/" element={<Main/>}/>}/>
        <Route path="/lunchselect/location" element={<AuthRoute path="/lunchselect/location" element={<LunchSelect/>}/>}/>
        <Route path="/lunchselect/room/master/:roomMasterCode" element={<AuthRoute path="/lunchselect/room/master" element={<LunchSelectMaster/>}/>}/>
        <Route path="/lunchselect/room/guest/:roomGuestURL" element={<AuthRoute path="/lunchselect/room/guest" element={<LunchSelectGuest/>}/>}/>
        <Route path="/lunchselect/roulette" element={<AuthRoute path="/lunchselect/roulette" element={<Roulette/>}/>}/>
        <Route path="/lunchselect/result" element={<AuthRoute path="/lunchselect/result" element={<ChooseMenu />}/>}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
