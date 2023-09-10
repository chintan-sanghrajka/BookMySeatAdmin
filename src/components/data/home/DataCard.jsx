import React from 'react'

const DataCard = ({ props }) => {
    return (
        <>
            <div className='home_card_div' style={{ color: props.color, backgroundColor: props.backgroundColor }}>
                <div className='home_card_icon_div'>
                    <i className={`bi ${props.icon} home_icon`}></i>
                </div>
                <h2 className='home_card_head font_roboto'>{props.data}</h2>
                <p className='home_card_description font_roboto'>{props.des}</p>
            </div>
        </>
    )
}

export default DataCard