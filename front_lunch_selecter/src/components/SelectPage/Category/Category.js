import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

const Category = () => {

    const [ categoryRefresh, setCategoryRefresh ] = useState(true);

    const getCategory =useQuery(["getCategory"], async () => {
        const option = {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.get("http://localhost:8080/lunchselect/category", option)
        console.log(response.data[0].categoryName)
        
        return response;
    }, {
        enabled:categoryRefresh,
        onSUccess: () => {
            if(categoryRefresh){
                setCategoryRefresh(false)
            }
        }
    })

    return (
        <div>
            <div>  {getCategory.data !== undefined ? getCategory.data.data.map(category => (<div key={category.categoryId}>
                                        <input type="checkbox"  id={"ct-" + category.categoryId} value={category.categoryId}/>
                                        <label htmlFor={"ct-" + category.categoryId}>{category.categoryName}</label>
                                    </div>))
                                : ""}</div>
        </div>
    );
};

export default Category;