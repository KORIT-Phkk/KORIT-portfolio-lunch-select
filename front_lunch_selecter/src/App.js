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
import UpdatePassword from './pages/findPassword/UpdatePassword';
import AuthRouteReactQuery from './components/Routes/AuthRoute/AuthRouteReactQuery';
import LunchSelect from './pages/LunchSelect/LunchSelect';
import NotFound from './pages/NotFound/NotFound';
import OAuth2Login from './pages/login/OAuth2Login';
import OAuth2Register from './pages/register/OAuth2Register';
import OAuth2Merge from './pages/OAuth2Merge/OAuth2Merge';
import FindEmailResult from './pages/findEmail/findEmailResult/FindEmailResult';


const mainContainer = css`
    position: relative;
    margin: 10px auto;
    border: 3px solid BLACK;
    padding: 10px;
    font-size: 1.6rem;
    width: 1400px;
    height: 3000px;
    overflow: hidden;
`;
function App() {
  return (
    <div css={mainContainer}>
      <Global styles={Reset}></Global>
      <Routes>
        <Route path="/auth/login" element={<AuthRouteReactQuery path="/auth/login" element={<Login/>}/>}/>
        <Route path="/auth/register" element={<AuthRouteReactQuery path="/auth/register" element={<Register/>}/>}/>
        <Route path="/auth/findemail" element={<AuthRouteReactQuery path="/auth/findemail" element={<FindEmail/>}/>}/>
        <Route path="/auth/findemail/result" element={<AuthRouteReactQuery path="/auth/findemail/result" element={<FindEmailResult/>}/>}/>
        <Route path="/auth/findpassword" element={<AuthRouteReactQuery path="/auth/findpassword" element={<FindPassword/>}/>}/>
        <Route path="/auth/updatepassword" element={<AuthRouteReactQuery path="/auth/updatepassword" element={<UpdatePassword/>}/>}/>
        <Route path="/auth/oauth2/login" element={<AuthRouteReactQuery path={"/auth/oauth2/login"} element={<OAuth2Login/>}/>}/>
        <Route path="/auth/oauth2/register" element={<AuthRouteReactQuery path={"/auth/oauth2/register"} element={<OAuth2Register/>}/>}/>
        <Route path="/auth/oauth2/merge" element={<AuthRouteReactQuery path={"/auth/oauth2/merge"} element={<OAuth2Merge/>}/>}/>
        <Route path="/" element={<AuthRouteReactQuery path="/" element={<Main/>}/>}/>
        <Route path="/lunchselect/room/:roomURL" element={<AuthRouteReactQuery path="/lunchselect/room" element={<LunchSelect/>}/>}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
