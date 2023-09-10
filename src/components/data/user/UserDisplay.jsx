import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { banUser } from './../../store/user/userAction'

const UserDisplay = ({ user }) => {
    const signedOnDate = user.createdAt.split('T')[0];
    const [isChecked, setIsChecked] = useState(user.banned);
    const dispatch = useDispatch();
    const handleToggle = () => {
        setIsChecked(!isChecked)
        dispatch(banUser({ userId: user._id, ban: !isChecked }))
    }
    return (
        <>
            <div className='user_outer_div'>
                <Row>
                    <Col className="col-lg-2">
                        <p className='user_info user_username'>{user.userName}</p>
                    </Col>
                    <Col className="col-lg-4">
                        <p className='user_info'>{user.emailId}</p>
                    </Col>
                    <Col className="col-lg-2">
                        <p className='user_info'>{user.contact === 0 ? "NA" : `${user.contact}`}</p>
                    </Col>
                    <Col className="col-lg-2">
                        <p className='user_info'>{signedOnDate}</p>
                    </Col>
                    <Col className="col-lg-1 d-flex justify-content-center">
                        {user.status === 1 ? <span className='active_user user_status'>Active</span> : <span className='user_status inactive_user'>Inactive</span>}
                    </Col>
                    <Col className="col-lg-1">
                        <Form>
                            <div className="d-flex align-items-center justify-content-center">
                                <Form.Check
                                    type="switch"
                                    id="toggle-switch"
                                    label=""
                                    checked={isChecked}
                                    onChange={handleToggle}
                                    disabled={user.status === 9}
                                />
                            </div>
                        </Form>
                    </Col>
                </Row>

            </div>
        </>
    );
}

export default UserDisplay;