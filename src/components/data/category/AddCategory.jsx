import React, { useState, useRef } from 'react'
import InputTags from '../common/InputTags.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from './../../helper.js'
import axios from 'axios'
import Cookies from 'js-cookie'

const AddCategory = () => {
    const { action } = useParams()
    let oldCategory = action === "update" ? JSON.parse(Cookies.get('category')) : {};
    const [data, setData] = useState(oldCategory)
    const navigate = useNavigate()
    let temp = action === "update" ? `${BASE_URL}uploads/category/${oldCategory.categoryImage}` : '';
    const imageRef = useRef(temp)
    const [coverUrl, setCoverUrl] = useState(temp);

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value })
    }

    const uploadPicHandler = () => {
        const img = URL.createObjectURL(imageRef.current.files[0])
        setCoverUrl(img)
    }

    const addCategoryHandler = () => {
        const formData = new FormData();
        formData.append('categoryImage', imageRef.current.files[0]);
        formData.append('name', data.name)
        formData.append('description', data.description)
        console.log(formData)
        axios.post(`${BASE_URL}add-category`, formData).then((res) => {
            Cookies.remove('category')
            navigate('/category-list')
        }).catch(error => console.log(error.message))
    }

    const updateCategoryHandler = () => {
        const formData = new FormData();
        formData.append('categoryImage', imageRef.current.files[0]);
        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('_id', oldCategory._id)
        console.log(formData)
        axios.put(`${BASE_URL}update-category`, formData).then((res) => {
            Cookies.remove('category')
            navigate('/category-list')
        }).catch(error => console.log(error.message))
    }

    return (
        <div className='outer_box'>
            <div className='form_outer_div'>
                <InputTags props={{ heading: "Name", type: "input", name: "name", placeholder: "Name", value: data.name, changeHandler: onChangeHandler }} />
                <InputTags props={{ heading: "Description", type: "input", name: "description", placeholder: "Description", value: data.description, changeHandler: onChangeHandler }} />

                <input type='file' className='d-block m-auto my-4' name='file' ref={imageRef} onChange={uploadPicHandler}></input>

                {coverUrl !== '' && <div className='add_image_div'>
                    <img src={coverUrl} alt="" className='w-100 h-100' />
                </div>}

                <div className='form_button_div mt-4'>
                    <button className='button_filled' onClick={() => navigate("/category-list")}><i className="bi bi-x-lg me-2"></i>Cancel</button>
                    {action === "add" && <button className='button_filled' onClick={addCategoryHandler}><i className="bi bi-plus-square me-2"></i>Add</button>}
                    {action === "update" && <button className='button_filled' onClick={updateCategoryHandler}><i className="bi bi-pen me-2"></i>Update</button>}
                </div>
            </div>
        </div>
    )
}

export default AddCategory