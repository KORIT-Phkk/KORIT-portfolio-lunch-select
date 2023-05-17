/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './style';
import Input from './Input';
import { categoryBox } from '../style';



const Category = () => {

    return (
        // <div css={s.categoryBox}>
        //     <label css={s.category} for="">
        //         <input css={s.checkbox} type="checkbox"/>
        //         경양식
        //     </label>
        //     <label css={s.category} for="">
        //         <input css={s.checkbox} type="checkbox"/>
        //         고기.구이
        //     </label>
        //     <label css={s.category} for="">
        //         <input css={s.checkbox} type="checkbox"/>
        //         분식
        //     </label>
        //     <label css={s.category} for="">
        //         <input css={s.checkbox} type="checkbox"/>
        //         일식
        //     </label>
        //     <label css={s.category} for="">
        //         <input css={s.checkbox} type="checkbox"/>
        //         중국식
        //     </label>
        //     <label css={s.category} for="">
        //         <input css={s.checkbox} type="checkbox"/>
        //         치킨
        //     </label>
        //     <label css={s.category} for="">
        //         <input css={s.checkbox} type="checkbox"/>
        //         패스트푸드
        //     </label>
        //     <label css={s.category} for="">
        //         <input css={s.checkbox} type="checkbox"/>
        //         한식
        //     </label>
        //     <label css={s.category} for="">
        //         <input css={s.checkbox} type="checkbox"/>
        //         횟집
        //     </label>
        // </div>
        <div css={categoryBox}>
            <img css={s.imgStyle} src="category/chicken.png" />
            <img css={s.imgStyle} src="category/chinesefood.png" />
            <img css={s.imgStyle} src="category/fastfood.png" />
            <img css={s.imgStyle} src="category/japanesefood.png" />
            <img css={s.imgStyle} src="category/koreanfood.png" />
            <img css={s.imgStyle} src="category/lightfood.png" />
            <img css={s.imgStyle} src="category/meat.png" />
            <img css={s.imgStyle} src="category/rawfish.png" />
            <img css={s.imgStyle} src="category/schoolfood.png" />
        </div>
    );
};

export default Category;