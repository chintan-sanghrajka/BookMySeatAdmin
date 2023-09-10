import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../store/category/categoryAction.js'
import CategoryCard from './CategoryCard.jsx'
import { Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CategoryList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllCategories())
    }, [])

    const categoryList = useSelector(state => state.category.categoryList)

    return (
        <>
            <div className='outer_box'>
                <h2 className='mb-5'>Total Categories: {categoryList.length}</h2>
                <button className='add_button' onClick={() => navigate('/add-category/add')}>Add Category</button>
                <div className='category_outer_card_div'>
                    <Row>
                        {categoryList.length !== 0 && categoryList.map((category, index) => {
                            return <Col key={index} className='col-4'>
                                <CategoryCard category={category} />
                            </Col>
                        })}
                    </Row>
                </div>
            </div>
        </>
    )
}

export default CategoryList