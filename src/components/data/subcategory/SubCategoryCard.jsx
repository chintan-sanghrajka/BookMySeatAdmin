import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeSubCategoryStatus } from './../../store/subcategory/subcategoryAction.js'
import Cookies from 'js-cookie'

const SubCategoryCard = ({ subCategory }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isChecked, setIsChecked] = useState(subCategory.status === 1 ? true : false)

    const handleToggle = () => {
        setIsChecked(!isChecked)
        dispatch(changeSubCategoryStatus({ status: !isChecked, subCategoryId: subCategory._id }))
    }

    const updateCategoryHandler = () => {
        let subCat = {}
        subCat = { ...subCat, name: subCategory.name, description: subCategory.description, _id: subCategory._id, category: subCategory.categoryName };
        Cookies.set('sub-category', JSON.stringify(subCat))
        navigate('/add-sub-category/update')
    }

    return (
        <div className='subcategory_card_div'>
            <h4 className='category_name'>{subCategory.name}</h4>
            <h6>{subCategory.categoryName}</h6>
            <p className='category_description'>{subCategory.description}</p>
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
            <button className='button_filled mt-3' onClick={updateCategoryHandler}><i className="bi bi-pen me-2"></i>Update</button>
        </div>
    )
}

export default SubCategoryCard