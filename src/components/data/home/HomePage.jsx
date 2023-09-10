import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHomeData } from './../../store/home/homeAction.js'
import DataCard from './DataCard.jsx'
import { Row, Col } from 'react-bootstrap'

const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHomeData())
    }, [dispatch])

    const homeData = useSelector((state) => state.home.homeData)

    return (
        <div className='outer_box'>

            <h2 className='page_head'>Hi, Admin</h2>
            {homeData && <div className='home_card_outer_div'>
                <Row>
                    <Col className='col-lg-6'>
                        <DataCard props={{ data: homeData.activeUsersCount, des: "Active Users", color: "#061b64", backgroundColor: "#d1e9fc", icon: "bi-people" }} />
                        <DataCard props={{ data: homeData.totalTickets, des: "Total Tickets Booked", color: "#04297a", backgroundColor: "#d0f2ff", icon: "bi-ticket-detailed" }} />
                    </Col>
                    <Col>
                        <DataCard props={{ data: homeData.totalPrice, des: "Revenue Generated", color: "#7a4f01", backgroundColor: "#fff7cd", icon: "bi-currency-rupee" }} />
                        <DataCard props={{ data: homeData.activeEvents, des: "Active Events & Shows", color: "#7a0c2e", backgroundColor: "#ffe7d9", icon: "bi-film" }} />
                    </Col>
                </Row>
            </div>}
        </div>
    )
}

export default HomePage