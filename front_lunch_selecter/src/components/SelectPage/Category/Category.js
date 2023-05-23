import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

const Category = ({ selectedCategories, setSelectedCategories }) => {

    const [ categoryRefresh, setCategoryRefresh ] = useState(true);

    const getCategory = useQuery(["getCategory"], async () => {
        const option = {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.get("http://localhost:8080/lunchselect/category", option)
        
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
        if(e.target.checked){
            setSelectedCategories([...selectedCategories, e.target.value]);
        }else {
            setSelectedCategories([...selectedCategories.filter(id => id !== e.target.value)]);
        }
    }

    return (
        <div>
            <div>  
                
                {getCategory.data !== undefined ? getCategory.data.data.map(category => (
                                    <div key={category.categoryId}>
                                        <input onChange={checkedHandleOnClick} type="checkbox"  id={category.categoryId} value={category.categoryId}/>
                                        <label htmlFor={category.categoryId}>{category.categoryName}</label>
                                    </div>))
                                : ""}
            </div>
        </div>
    );
};

export default Category;