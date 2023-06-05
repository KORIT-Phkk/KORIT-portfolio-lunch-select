import { Global } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import NotFound from './pages/NotFound/NotFound';
import Main from './pages/main/Main';
import { Reset } from './style/Reset';

import AuthRoute from './components/Routes/AuthRoute/AuthRoute';
import FindEmail from './pages/Auth/FindUser/FindEmail/FindEmail';
import FindEmailResult from './pages/Auth/FindUser/FindEmail/FindEmailResult/FindEmailResult';
import FindPassword from './pages/Auth/FindUser/FindPassword/FindPassword';
import FindPasswordResult from './pages/Auth/FindUser/FindPassword/FindPasswordResult/FindPasswordResult';
import ResetPassword from './pages/Auth/FindUser/ResetPassword/ResetPassword';
import ResetPasswordResult from './pages/Auth/FindUser/ResetPassword/ResetPasswordResult/ResetPasswordResult';
import Login from './pages/Auth/Login/Login';
import OAuth2Login from './pages/Auth/OAuth/OAuth2Login/OAuth2Login';
import OAuth2Merge from './pages/Auth/OAuth/OAuth2Merge/OAuth2Merge';
import OAuth2Register from './pages/Auth/OAuth/OAuth2Register/OAuth2Register';
import Register from './pages/Auth/Register/Register';
import RegisterResult from './pages/Auth/Register/RegisterResult/RegisterResult';
import PasswordChange from './pages/Auth/UpdatePassword/ChangePassword/PasswordChange';
import PasswordChangeResult from './pages/Auth/UpdatePassword/PasswordChangeResult/PasswordChangeResult';
import UpdatePassword from './pages/Auth/UpdatePassword/UpdatePassword';
import GuestRoulette from './pages/LunchSelect/LunchSelectGuest/GuestRoulette/GuestRoulette';
import LunchSelectGuest from './pages/LunchSelect/LunchSelectGuest/LunchSelectGuest/LunchSelectGuest';
import WaitingRoom from './pages/LunchSelect/LunchSelectGuest/WaitingRoom/WaitingRoom';
import LunchSelectMaster from './pages/LunchSelect/LunchSelectMaster/LunchSelectMaster';
import Roulette from './pages/LunchSelect/Roulette/Roulette';
import MyPage from './pages/MyPage/MyPage';
import ProfileImgChange from './pages/MyPage/ProfileImgChange/ProfileImgChange';
import RoomClose from './pages/NotFound/RoomClose';


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
        <Route path="/auth/register/result" element={<AuthRoute path="/auth/register" element={<RegisterResult/>}/>}/>
        <Route path="/auth/findemail" element={<AuthRoute path="/auth/findemail" element={<FindEmail/>}/>}/>
        <Route path="/auth/findemail/result/:email" element={<AuthRoute path="/auth/findemail/result" element={<FindEmailResult/>}/>}/>
        <Route path="/auth/findpassword" element={<AuthRoute path="/auth/findpassword" element={<FindPassword/>}/>}/>
        <Route path="/auth/findpassword/result" element={<AuthRoute path="/auth/findpassword/result" element={<FindPasswordResult/>}/>}/>
        <Route path="/auth/resetpassword" element={<AuthRoute path="/auth/resetpassword" element={<ResetPassword/>}/>}/>
        <Route path="/auth/resetpassword/result" element={<AuthRoute path="/auth/resetpassword/result" element={<ResetPasswordResult/>}/>}/>
        <Route path="/auth/updatepassword" element={<AuthRoute path="/auth/updatepassword" element={<UpdatePassword/>}/>}/>
        <Route path="/auth/oauth2/login" element={<AuthRoute path={"/auth/oauth2/login"} element={<OAuth2Login/>}/>}/>
        <Route path="/auth/oauth2/register" element={<AuthRoute path={"/auth/oauth2/register"} element={<OAuth2Register/>}/>}/>
        <Route path="/auth/oauth2/merge" element={<AuthRoute path={"/auth/oauth2/merge"} element={<OAuth2Merge/>}/>}/>
        <Route path="/mypage" element={<AuthRoute path={"/mypage"} element={<MyPage/>}/>}/>
        <Route path="/mypage/passwordchange" element={<AuthRoute path={"/mypage/passwordchange"} element={<PasswordChange/>}/>}/>
        <Route path="/mypage/passwordchangeresult" element={<AuthRoute path={"/mypage/passwordchangeresult"} element={<PasswordChangeResult/>}/>}/>
        <Route path="/mypage/ProfileImgChange" element={<AuthRoute path={"/mypage/ProfileImgChange"} element={<ProfileImgChange/>}/>}/>
        

        <Route path="/lunchselect/room/master/:code" element={<AuthRoute path="/lunchselect/room/master" element={<LunchSelectMaster/>}/>}/>
        <Route path="/lunchselect/room/guest/:code" element={<AuthRoute path="/lunchselect/room/guest" element={<LunchSelectGuest/>}/>}/>
        <Route path="/lunchselect/room/guest/waiting/:code" element={<WaitingRoom/>}/>
        <Route path="/lunchselect/guest/roulette/:code" element={<GuestRoulette />}/>
        <Route path="/lunchselect/room/close" element={<RoomClose />}/>
        <Route path="/lunchselect/roulette/:code/:lat/:lng" element={<AuthRoute path="/lunchselect/roulette" element={<Roulette/>}/>}/>
        <Route path="/" element={<AuthRoute path="/" element={<Main/>}/>}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;