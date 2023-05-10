import { Global } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './App.css';
import { Reset } from './style/Reset';
import Simple from './Kakao/Simple';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Main from './pages/main/Main';
import FindEmail from './pages/findEmail/FindEmail';
import FindPassword from './pages/findPassword/FindPassword';
import EmailAuthenticationNumber from './pages/findEmail/EmailAuthenticationNumber';
import UpdatePassword from './pages/findPassword/UpdatePassword';
import AuthRouteReactQuery from './components/Routes/AuthRoute/AuthRouteReactQuery';
import LunchSelect from './pages/LunchSelect/LunchSelect';

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
  // const [ markers ] = useGetMarkers2();
  // console.log(markers)

  return (
    <div css={mainContainer}>
      <Global styles={Reset}></Global>
      {/* <KakaoMap /> */}
      {/* <Test /> */}
      {/* <MapTest/> */}
      {/* <KakaoMapReact></KakaoMapReact> */}
      <Simple />
      <Routes>
        <Route path="/" element={<AuthRouteReactQuery path="/" element={<Main/>}/>}/>
        <Route path="/login" element={<AuthRouteReactQuery path="/login" element={<Login/>}/>}/>
        <Route path="/register" element={<AuthRouteReactQuery path="/register" element={<Register/>}/>}/>
        <Route path="/findemail" element={<AuthRouteReactQuery path="/findemail" element={<FindEmail/>}/>}/>
        <Route path="/emailauthenticationnumber" element={<AuthRouteReactQuery path="/emailauthenticationnumber" element={<EmailAuthenticationNumber/>}/>}/>
        <Route path="/findpassword" element={<AuthRouteReactQuery path="/findpassword" element={<FindPassword/>}/>}/>
        <Route path="/updatepassword" element={<AuthRouteReactQuery path="/updatepassword" element={<UpdatePassword/>}/>}/>
        <Route path="/lunchselect" element={<AuthRouteReactQuery path="/lunchselect" element={<LunchSelect/>}/>}/>
      </Routes>
    </div>
  );
}

export default App;
