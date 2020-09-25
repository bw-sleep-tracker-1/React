import React, { useState } from 'react'
import { connect } from 'react-redux';
import { editData } from './actions';

const EditForm = (props) => {

    const [formData, setFormData] = useState({
        bedtime: '',
        waketime: '',
        wake_rating: '',
        day_rating: '',
        bed_rating:''
    })

    const handleChange = e => {
      setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleCheck = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.editData(formData, props.location.toBeEdited.id)
    }


    return (
        <form onSubmit={handleSubmit}>
        <label>Bed time</label><br />
        <input
            type='datetime-local'
            name='bedtime'
            onChange={handleChange}
        />
        <br />
        <label>Wake time</label><br />
        <input
            type='datetime-local'
            name='waketime'
            onChange={handleChange}
        />
        <br />
        <label>How did you feel waking?</label><br />
        <img src='https://a.slack-edge.com/production-standard-emoji-assets/10.2/google-medium/2639-fe0f.png' alt='' />
        <input
            type='checkbox'
            name='wake_rating'
            value='1'
            onChange={handleCheck}
        />
        <img src='https://a.slack-edge.com/production-standard-emoji-assets/10.2/google-medium/1f642.png' alt='' />
        <input
            type='checkbox'
            name='wake_rating'
            value='2'
            onChange={handleCheck}
        />
        <img src='https://a.slack-edge.com/production-standard-emoji-assets/10.2/google-medium/263a-fe0f.png' alt='' />
        <input
            type='checkbox'
            name='wake_rating'
            value='3'
            onChange={handleCheck}
        />
        <img src='https://a.slack-edge.com/production-standard-emoji-assets/10.2/google-medium/1f604.png' alt='' />
        <input
            type='checkbox'
            name='wake_rating'
            value='4'
            onChange={handleCheck}
        /><br />
        <label>How'd today go?</label><br />
        <img src='https://a.slack-edge.com/production-standard-emoji-assets/10.2/google-medium/2639-fe0f.png' alt='' />
        <input
            type='checkbox'
            name='day_rating'
            value='1'
            onChange={handleCheck}
        />
        <img src='https://a.slack-edge.com/production-standard-emoji-assets/10.2/google-medium/1f642.png' alt='' />
        <input
            type='checkbox'
            name='day_rating'
            value='2'
            onChange={handleCheck}
        />
        <img src='https://a.slack-edge.com/production-standard-emoji-assets/10.2/google-medium/263a-fe0f.png' alt='' />
        <input
            type='checkbox'
            name='day_rating'
            value='3'
            onChange={handleCheck}
        />
        <img src='https://a.slack-edge.com/production-standard-emoji-assets/10.2/google-medium/1f604.png' alt='' />
        <input
            type='checkbox'
            name='day_rating'
            value='4'
            onChange={handleCheck}
        /><br />
        <label>How tired are you going to bed?</label><br />
        <img src='https://a.slack-edge.com/production-standard-emoji-assets/10.2/google-medium/1f642.png' alt='' />
        <input
            type='checkbox'
            name='bed_rating'
            value='1'
            onChange={handleCheck}
        />
        <img src='https://a.slack-edge.com/production-standard-emoji-assets/10.2/google-medium/1f610.png' alt='' />
        <input
            type='checkbox'
            name='bed_rating'
            value='2'
            onChange={handleCheck}
        />
        <img src='https://a.slack-edge.com/production-standard-emoji-assets/10.2/google-medium/2639-fe0f.png' alt='' />
        <input
            type='checkbox'
            name='bed_rating'
            value='3'
            onChange={handleCheck}
        />
        <img src='https://a.slack-edge.com/production-standard-emoji-assets/10.2/google-medium/1f629.png' alt='' />
        <input
            type='checkbox'
            name='bed_rating'
            value='4'
            onChange={handleCheck}
        />
        <br />
        <button>Submit</button>
    </form>
    )
}

export default connect(null, { editData })(EditForm);