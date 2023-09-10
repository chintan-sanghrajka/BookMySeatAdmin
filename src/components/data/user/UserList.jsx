import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from './../../store/user/userAction.js';
import UserDisplay from './UserDisplay.jsx';
import { Row, Col } from 'react-bootstrap';

const UserList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    const userList = useSelector((state) => state.user.userList)

    return (
        <>
            <div className='outer_box'>
                <h2 className='mb-4'>Total Users: {userList.length}</h2>
                <div className='user_outer_div user_outer_div_head'>
                    <Row>
                        <Col className="col-lg-2">
                            <p className='user_info user_username user_head'>Username</p>
                        </Col>
                        <Col className="col-lg-4">
                            <p className='user_info user_head'>Email-Id</p>
                        </Col>
                        <Col className="col-lg-2">
                            <p className='user_info user_head'>Contact</p>
                        </Col>
                        <Col className="col-lg-2">
                            <p className='user_info user_head'>Signed On</p>
                        </Col>
                        <Col className="col-lg-1">
                            <p className='user_info user_head'>Status</p>
                        </Col>
                        <Col className="col-lg-1">
                            <p className='user_info user_head'>Banned</p>
                        </Col>
                    </Row>
                </div>
                {userList.length !== 0 && userList.map((user, index) => {
                    return <UserDisplay key={index} user={user} />
                })}
            </div>
        </>
    );
}

export default UserList;