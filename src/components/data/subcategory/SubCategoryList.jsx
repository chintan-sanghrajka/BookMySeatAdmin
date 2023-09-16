import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllSubCategories } from './../../store/subcategory/subcategoryAction.js'
import { getAllCategories } from './../../store/category/categoryAction.js'
import SubCategoryCard from './SubCategoryCard.jsx'
import { Row, Col } from 'react-bootstrap'

const SubCategoryList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllSubCategories())
        dispatch(getAllCategories())
    }, [])

    // const categoryList = useSelector(state => state.category.categoryList)
    const subCategoryList = useSelector(state => state.subCategory.subCategoryList)

    return (
        <>
            <div className='outer_box'>
                <h2 className='mb-5'>Total Sub-Categories: {subCategoryList.length}</h2>
                <button className='add_button' onClick={() => navigate('/add-sub-category/add')}>Add Sub-Category</button>
                <div className='category_outer_card_div'>
                    <Row>
                        {subCategoryList.lenght !== 0 && subCategoryList.map((subCat, index) => {
                            return <Col key={index} className="col-4">
                                <SubCategoryCard subCategory={{ name: subCat.name, description: subCat.description, categoryName: subCat.categoryName, status: subCat.status, _id: subCat._id }} />
                            </Col>
                        })}
                    </Row>
                </div>
            </div >
        </>
    )
}

export default SubCategoryList