import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEvents } from '../../store/event/eventAction'
import { useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import EventCard from './EventCard.jsx'

const EventList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllEvents())
    }, [])

    const eventList = useSelector(state => state.event.eventList)

    return (
        <>
            <div className='outer_box'>
                <h2 className='mb-5'>Total Sub-Categories: {eventList.length}</h2>
                <button className='add_button' onClick={() => navigate('/add-event/add')}>Add Event</button>
                <div className='category_outer_card_div'>
                    <Row>
                        {eventList.lenght !== 0 && eventList.map((event, index) => {
                            return <Col key={index} className="col-4">
                                <EventCard event={event} />
                            </Col>
                        })}
                    </Row>
                </div>
            </div>
        </>
    )
}

export default EventList