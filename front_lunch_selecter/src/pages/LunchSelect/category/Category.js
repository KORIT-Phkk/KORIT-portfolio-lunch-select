/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './style';
import Input from './Input';



const Category = () => {

    return (
        <div css={s.categoryBox}>
            <label css={s.category}>
                <input css={s.checkbox} type="checkbox"/>
                경양식
            </label>
            <label css={s.category}>
                <input css={s.checkbox} type="checkbox"/>
                고기.구이
            </label>
            <label css={s.category} >
                <input css={s.checkbox} type="checkbox"/>
                분식
            </label>
            <label css={s.category}>
                <input css={s.checkbox} type="checkbox"/>
                일식
            </label>
            <label css={s.category} >
                <input css={s.checkbox} type="checkbox"/>
                중국식
            </label>
            <label css={s.category}>
                <input css={s.checkbox} type="checkbox"/>
                치킨
            </label>
            <label css={s.category}>
                <input css={s.checkbox} type="checkbox"/>
                패스트푸드
            </label>
            <label css={s.category}>
                <input css={s.checkbox} type="checkbox"/>
                한식
            </label>
            <label css={s.category} >
                <input css={s.checkbox} type="checkbox"/>
                횟집
            </label>
        </div>
    );
};

export default Category;