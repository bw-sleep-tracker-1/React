import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addData } from './actions';

const WakeForm = props => {

    const [formData, setFormData] = useState({
        bedtime: '',
        waketime: '',
        wake_rating: ''
    })

    const handleChanges = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addData(formData);
        window.location = '/sleeplist';
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Bed time</label>
            <input
                type='date'
                name='bedtime'
                onChange={handleChanges}
            />
            <br />
            <label>Wake time</label>
            <input
                type='date'
                name='waketime'
                onChange={handleChanges}
            />
            <br />
            <label>Wake rating</label>
            <input
                type='number'
                name='wake_rating'
                onChange={handleChanges}
            />  
            <br />
            <button>Submit</button>
        </form>
    )
}

export default connect(null, { addData })(WakeForm);