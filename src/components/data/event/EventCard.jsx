import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { BASE_URL } from './../../helper.js'
import { useDispatch, useSelector } from 'react-redux'
import { changeEventStatus } from './../../store/event/eventAction.js'

const EventCard = ({ event }) => {
    const navigate = useNavigate()
    const [isChecked, setIsChecked] = useState(event.status === 1 ? true : false)
    const dispatch = useDispatch()
    const subCategoryList = useSelector(state => state.subCategory.subCategoryList)

    const handleToggle = () => {
        setIsChecked(!isChecked)
        dispatch(changeEventStatus({ status: !isChecked, eventId: event._id }))
    }

    const eventUpdateHandler = () => {

        const [subCategory] = subCategoryList.filter((sub) => {
            return sub._id === event.subCategoryId
        })

        event = { ...event, categoryName: subCategory.categoryName, subCategoryName: subCategory.name }
        Cookies.set('event', JSON.stringify(event))
        navigate("/add-event/update")
    }

    return (
        <div className='event_card_div'>
            <div className='event_image_div'>
                <img src={`${BASE_URL}uploads/events/${event.eventImage}`} alt="" className='w-100 h-100' />
            </div>
            <div className='event_details_div'>
                <h4 className='category_name'>{event.name}</h4>
                <h6>{event.categoryName}</h6>
                <p className='category_description event_description'>{event.description}</p>
                <p className='event_details'>Available Tickets: {event.availableTicket}</p>
                <p className='event_details'>Price: {event.ticketPrice}</p>
                <p className='event_details'>Venue: {event.venue}</p>
                <p className='event_details'>Date: {event.date}</p>
                <p className='event_details mb-3'>Time: {event.time}</p>
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
                <button className='button_filled mt-3' onClick={eventUpdateHandler}><i className="bi bi-pen me-2"></i>Update</button>
            </div>
        </div>
    )
}

export default EventCard