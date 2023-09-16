import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import InputTags from '../common/InputTags.jsx'
import DropdownComp from '../common/DropdownComp.jsx'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from './../../helper.js'

const AddSubCategory = () => {
    const { action } = useParams()
    const navigate = useNavigate()
    let oldSubCategory = action === "update" ? JSON.parse(Cookies.get('sub-category')) : {};
    const [data, setData] = useState(oldSubCategory)

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value })
    }

    const categoryList = useSelector(state => state.category.categoryList)

    const addSubCategoryHandler = () => {
        axios.post(`${BASE_URL}add-sub-category`, {
            name: data.name,
            description: data.description,
            category: data.category,
        }).then((res) => {
            navigate('/sub-category-list')
        }).catch(error => console.log(error.message))
    }

    const updateSubCategoryHandler = () => {
        axios.put(`${BASE_URL}update-sub-category`, {
            name: data.name,
            description: data.description,
            category: data.category,
            _id: data._id,
        }).then((res) => {
            Cookies.remove('sub-category')
            navigate('/sub-category-list')
        }).catch(error => console.log(error.message))
    }

    return (
        <div className='outer_box'>
            <div className='form_outer_div'>
                <InputTags props={{ heading: "Name", type: "input", name: "name", placeholder: "Name", value: data.name, changeHandler: onChangeHandler }} />
                <InputTags props={{ heading: "Description", type: "input", name: "description", placeholder: "Description", value: data.description, changeHandler: onChangeHandler }} />
                <DropdownComp props={{ onChangeHandler: onChangeHandler, categoryList: categoryList, name: "category", value: data.category, heading: "Category" }} />
                <div className='form_button_div mt-4'>
                    <button className='button_filled' onClick={() => navigate("/sub-category-list")}><i className="bi bi-x-lg me-2"></i>Cancel</button>
                    {action === "add" && <button className='button_filled' onClick={addSubCategoryHandler}><i className="bi bi-plus-square me-2"></i>Add</button>}
                    {action === "update" && <button className='button_filled' onClick={updateSubCategoryHandler}><i className="bi bi-pen me-2"></i>Update</button>}
                </div>
            </div>
        </div>
    )
}

export default AddSubCategory