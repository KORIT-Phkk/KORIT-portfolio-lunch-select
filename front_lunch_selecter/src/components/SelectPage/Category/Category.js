/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import * as s from './style';
import { backEndURL } from '../../../Config/URL/URL';

const Category = ({ selectedCategories, setSelectedCategories, setErrorMessageFlag }) => {
    const [ categoryRefresh, setCategoryRefresh ] = useState(true);

    const getCategory = useQuery(["getCategory"], async () => {
        const option = {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.get(`${backEndURL}/lunchselect/category`, option)
        return response;
    }, {
        enabled:categoryRefresh,
        onSUccess: () => {
            if(categoryRefresh){
                setCategoryRefresh(false)
            }
        }
    })

    const checkedHandleOnClick = (e) => {
        setErrorMessageFlag(false)
        if(e.target.checked){
            setSelectedCategories([...selectedCategories, e.target.value]);
        }else {
            setSelectedCategories([...selectedCategories.filter(id => id !== e.target.value)]);
        }
    }
    
    return (
        <div css={s.categoryContainer}>
            {getCategory.isLoading ? "" : getCategory.data !== undefined ? getCategory.data.data.map(category => (
                <div css={s.categoryBox} key={category.categoryId}>
                    <img css={s.imgCss} src={`../../../category/colorFood${category.categoryId}.png`} alt="" />
                    <input css={s.checkbox} onChange={checkedHandleOnClick} type="checkbox" id={category.categoryId} value={category.categoryId}/>
                    <label css={s.label} htmlFor={category.categoryId} >{category.categoryName}</label>
                </div>))
            : ""}
        </div>
    );
};

export default Category;