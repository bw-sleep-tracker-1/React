import React, { useState } from 'react'
import { connect } from 'react-redux';
import { editData } from './actions';

const EditForm = (props) => {

    const [formData, setFormData] = useState({
        bedtime: '',
        waketime: '',
        wake_rating: ''
    })

    const handleChange = e => {
      setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.editData(formData, props.location.toBeEdited.id)
    }


    return (
       <form onSubmit={handleSubmit}>
            <label>bed time</label>
            <input
                type='date'
                name='bedtime'
                onChange={handleChange}
                defaultValue={props.location.toBeEdited.bedtime}
            />
            <br />
            <label>wake time</label>
            <input
                type='date'
                name='waketime'
                onChange={handleChange}
                defaultValue={props.location.toBeEdited.waketime}
            />
            <br />
            <label>wake rating</label>
            <input
                type='number'
                name='wake_rating'
                onChange={handleChange}
                defaultValue={props.location.toBeEdited.wake_rating}
            />
            <button>Submit</button>
        </form>
    )
}

export default connect(null, { editData })(EditForm);