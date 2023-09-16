import React, { useState, useEffect, useRef } from 'react'
import Cookies from 'js-cookie'
import InputTags from '../common/InputTags.jsx'
import DropdownComp from '../common/DropdownComp.jsx'
import axios from 'axios'
import { BASE_URL } from './../../helper.js'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AddEvent = () => {
    const { action } = useParams()
    const navigate = useNavigate()
    let oldEvent = action === "update" ? JSON.parse(Cookies.get('event')) : {};
    const [data, setData] = useState(oldEvent)
    const categoryList = useSelector(state => state.category.categoryList)
    const subCategoryList = useSelector(state => state.subCategory.subCategoryList)

    let temp = action === "update" ? `${BASE_URL}uploads/events/${oldEvent.eventImage}` : '';
    const imageRef = useRef(temp)
    const [coverUrl, setCoverUrl] = useState(temp);

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value })
    }

    const uploadPicHandler = () => {
        const selectedFile = imageRef.current.files[0];

        if (selectedFile) {
            const img = URL.createObjectURL(selectedFile);
            setCoverUrl(img);
        }
    }

    const addEventHandler = () => {
        const formData = new FormData();
        formData.append('eventImage', imageRef.current.files[0]);
        formData.append('eventData', JSON.stringify(data))
        axios.post(`${BASE_URL}add-event`, formData).then((res) => {
            navigate('/event-list')
        }).catch(error => console.log(error.message))
    }

    const updateEventHandler = () => {
        const formData = new FormData();
        formData.append('eventImage', imageRef.current.files[0]);
        formData.append('eventData', JSON.stringify(data))
        formData.append('eventId', oldEvent._id)
        axios.put(`${BASE_URL}update-event`, formData).then((res) => {
            Cookies.remove('event')
            navigate('/event-list')
        }).catch(error => console.log(error.message))
    }
    return (
        <div className='outer_box'>
            <div className='form_outer_div'>
                <InputTags props={{ heading: "Name", type: "input", name: "name", placeholder: "Name", value: data.name, changeHandler: onChangeHandler }} />

                <InputTags props={{ heading: "Description", type: "input", name: "description", placeholder: "Description", value: data.description, changeHandler: onChangeHandler }} />

                <DropdownComp props={{
                    onChangeHandler: onChangeHandler, categoryList: categoryList, name: "category", value: data.categoryName, heading: "Category"
                }} />

                <DropdownComp props={{
                    onChangeHandler: onChangeHandler, categoryList: subCategoryList, name: "subCategory", value: data.subCategoryName, heading: "Sub-Category"
                }} />

                <InputTags props={{ heading: "Venue", type: "input", name: "venue", placeholder: "Venue", value: data.venue, changeHandler: onChangeHandler }} />

                <InputTags props={{ heading: "Date", type: "input", name: "date", placeholder: "DD/MM/YYYY", value: data.date, changeHandler: onChangeHandler }} />

                <InputTags props={{ heading: "Time", type: "input", name: "time", placeholder: "HH.MM AM", value: data.time, changeHandler: onChangeHandler }} />

                <InputTags props={{ heading: "Ticket Price", type: "number", name: "ticketPrice", placeholder: "Price", value: data.ticketPrice, changeHandler: onChangeHandler }} />

                <InputTags props={{ heading: "Available Tickets", type: "number", name: "availableTicket", placeholder: "Tickets", value: data.availableTicket, changeHandler: onChangeHandler }} />

                <InputTags props={{ heading: "Rating", type: "number", name: "rating", placeholder: "Rating", value: data.rating, changeHandler: onChangeHandler }} />

                <InputTags props={{ heading: "Keys", type: "input", name: "keys", placeholder: "Keys", value: data.keys, changeHandler: onChangeHandler }} />

                <InputTags props={{ heading: "Language", type: "input", name: "language", placeholder: "Language", value: data.language, changeHandler: onChangeHandler }} />

                <input type='file' className='d-block m-auto my-4' name='file' ref={imageRef} onChange={uploadPicHandler}></input>

                {coverUrl !== '' && <div className='add_image_div'>
                    <img src={coverUrl} alt="" className='w-100 h-100' />
                </div>}

                <div className='form_button_div mt-4'>
                    <button className='button_filled' onClick={() => navigate("/event-list")}><i className="bi bi-x-lg me-2"></i>Cancel</button>
                    {action === "add" && <button className='button_filled' onClick={addEventHandler}><i className="bi bi-plus-square me-2"></i>Add</button>}
                    {action === "update" && <button className='button_filled' onClick={updateEventHandler}><i className="bi bi-pen me-2"></i>Update</button>}
                </div>
            </div>
        </div>
    )
}

export default AddEvent