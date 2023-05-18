import { Global } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthRouteReactQuery from './components/Routes/AuthRoute/AuthRouteReactQuery';
import ChooseMenu from './pages/LunchSelect/ChooseMenu/ChooseMenu';
import LunchSelect from './pages/LunchSelect/LunchSelect';
import Roulette from './pages/LunchSelect/Roulette/Roulette';
import NotFound from './pages/NotFound/NotFound';
import OAuth2Merge from './pages/OAuth2Merge/OAuth2Merge';
import FindEmail from './pages/findEmail/FindEmail';
import FindEmailResult from './pages/findEmail/findEmailResult/FindEmailResult';
import FindPassword from './pages/findPassword/FindPassword';
import UpdatePassword from './pages/findPassword/UpdatePassword';
import Login from './pages/login/Login';
import OAuth2Login from './pages/login/OAuth2Login';
import Main from './pages/main/Main';
import OAuth2Register from './pages/register/OAuth2Register';
import Register from './pages/register/Register';
import { Reset } from './style/Reset';


const mainContainer = css`
    position: relative;
    margin: 10px auto;
    border: 3px solid BLACK;
    padding: 10px;
    font-size: 1.6rem;
    width: 1400px;
    height: 3000px;
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
        <Route path="/lunchselect/roulette" element={<AuthRouteReactQuery path="/lunchselect/roulette" element={<Roulette/>}/>}/>
        <Route path="/lunchselect/result" element={<AuthRouteReactQuery path="/lunchselect/result" element={<ChooseMenu/>}/>}/>

        <Route path="/lunchselect/room/:roomURL" element={<AuthRouteReactQuery path="/lunchselect/room" element={<LunchSelect/>}/>}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
