import React from 'react'

const DropdownComp = ({ props }) => {
    return (
        <div>
            <p className='add_label'>{props.heading}</p>
            <select name={props.name} value={props.category} onChange={props.onChangeHandler} className='add_input'>
                <option value="">Select Category</option>
                {props.categoryList.map((category, index) => {
                    return category.status === 1 && <option value={category.name}>{category.name}</option>
                })}
            </select>
        </div>
    )
}

export default DropdownComp