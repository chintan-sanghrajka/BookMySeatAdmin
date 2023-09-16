import React from 'react';

const InputTags = ({ props }) => {

    return (
        <>
            <p className='input_tag_label'>{props.heading}</p>
            <input type={props.type} name={props.name} placeholder={props.placeholder}
                className='add_input' onChange={props.changeHandler} value={props.value} />
        </>
    );
}

export default InputTags;