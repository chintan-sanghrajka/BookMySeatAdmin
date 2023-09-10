import React, { useState } from 'react'
import { BASE_URL } from '../../helper.js'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { changeCategoryStatus } from './../../store/category/categoryAction.js'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({ category }) => {

    const [isChecked, setIsChecked] = useState(category.status === 1 ? true : false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleToggle = () => {
        setIsChecked(!isChecked)
        dispatch(changeCategoryStatus({ categoryId: category._id, status: !isChecked }))
    }

    const updateCategoryHandler = () => {
        let cat = {}
        cat = { ...cat, name: category.name, description: category.description, categoryImage: category.categoryImage, _id: category._id };
        Cookies.set('category', JSON.stringify(cat))
        navigate('/add-category/update')
    }

    return (
        <>
            <div className='category_card_div'>
                <div className='category_card_image_div'>
                    <img src={`${BASE_URL}/uploads/category/${category.categoryImage}`} alt="" className='w-100 h-100' />
                </div>
                <div className='w-100 p-4'>
                    <h4 className='category_name'>{category.name}</h4>
                    <p className='category_description'>{category.description}</p>
                    <Form>
                        <div className="d-flex align-items-center">
                            <Form.Check
                                type="switch"
                                id="toggle-switch"
                                label=""
                                checked={isChecked}
                                onChange={handleToggle}
                            />
                        </div>
                    </Form>
                    <button className='button_filled mt-2' onClick={updateCategoryHandler}><i className="bi bi-pen me-2"></i>Update</button>
                </div>
            </div>
        </>
    )
}

export default CategoryCard