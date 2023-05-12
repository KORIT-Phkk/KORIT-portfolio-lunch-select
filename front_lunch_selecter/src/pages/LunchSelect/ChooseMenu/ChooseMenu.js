import React from 'react';
import { Link, useLocation } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Map } from 'react-kakao-maps-sdk';


const ab = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-between;

    
`;

const aaa = css`
    display: flex;
    margin-bottom: 200px;
    margin-top: 200px;

`;

const dd = css`
    font-size: 100px;
    margin-bottom: 200px;
    margin-top: 200px;
 
`;

const cc = css`
    font-size: 60px;
    margin: 100px;
`;



const ChooseMenu = () => {
    const location = useLocation();
    let todayLunch = null;
    
    const returnButtonHandle = () => {
        
    }

    if (location.state && location.state.value !== null) {
        todayLunch = location.state.value;
    }

    return (
        <div css={ab}>
            <div css={dd}>{todayLunch}</div>
            <Map
                    center={{
                        lat: 37.777,
                        lng: 126.666,
                    }}
                    style={{
                        width: "80%",
                        height: "500px",
                    }}
                    level={5}
                >

                </Map>
            <div css={aaa}>
                <Link to="/lunchselect"><button css={cc} onClick={returnButtonHandle}>다시돌려~</button></Link>
                <Link><button css={cc} >음식점 자세히 보기</button></Link>
            </div>
        </div>
    );
};

export default ChooseMenu;
