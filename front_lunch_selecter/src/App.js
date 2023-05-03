import { Global } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './App.css';
import Main from './Page/Main/Main';
import { Reset } from './style/Reset';


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
      <Main />
    </div>
  );
}

export default App;
