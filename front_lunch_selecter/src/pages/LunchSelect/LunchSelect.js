/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import Category from './category/Category';
import axios from 'axios';
import { Button } from '@mui/base';

const slotValue = ['짱깨', '맥도날드', '된장', '유부초밥', '우동(돈가스)', '김밥천국','삼정타워','닭가슴살','0004','9','88','7','6','2','3','5','dd','we','as','sdf','asdf','asdf','wer','werw','tyu','dfg','ert','q2we','dfg','fsgjl'];

const LunchSelect = () => {
    const [isInvited, setIsInvited] = useState(false);
    const [inviteCode, setInviteCode] = useState('');
    
    const navigate = useNavigate();

    const [todayLunch, setTodayLunch] = useState("돌려돌려 돌림판~~");
    const [isSpinning, setIsSpinning] = useState(false);
    const intervalRef = useRef(null);

    const handleStart = () => {
        setIsSpinning(true);
        intervalRef.current = setInterval(() => {
            setTodayLunch(slotValue[Math.floor(Math.random() * slotValue.length)]);
        }, 50);
    };

    const handleStop = () => {
        setIsSpinning(false);
        clearInterval(intervalRef.current);
        navigate("/choosemenu", {state:{value : todayLunch}})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const onClickInviteButton = () => {
        // const roomId = '123';
        // axios.get((API.INVITE as string) + roomId).then((res) => {
        //   setIsInvited(true);
        //   setInviteCode(`${process.env.REACT_APP_LAMBDA_INVITE}/${res.data}`);
        // });
      };

    return (
        <div css={s.container}>
            <header css={s.header}>
                <Button type="button" onClick={onClickInviteButton}>
                    초대하기
                </Button>
                <div css={s.categoryBox}>
                    <h1 css={s.category}>카테고리를 선택하시오</h1>
                </div>
                <Category />
            </header>
            <main css={s.mainContainer}>
                <div css={s.selectMenu}>{todayLunch}</div>
                <form onSubmit={handleSubmit}>
                    {isSpinning 
                    ? (<button css={s.selectButton} type="button" onClick={handleStop}>니 손에 오늘 점심이 달렸다..</button>)
                    : (<button css={s.selectButton} type="button" onClick={handleStart}>점심 무러 갑시다!</button>)}
                </form>
            </main>
        </div>
    );
};

export default LunchSelect;
