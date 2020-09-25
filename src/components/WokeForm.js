import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addData } from './actions';

const WakeForm = (props) => {

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
    const handleCheck = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addData(formData, props.userId);
        console.log(props.userId)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Bed time</label><br />
            <input
                type='datetime-local'
                name='bedtime'
                onChange={handleChanges}
            />
            <br />
            <label>Wake time</label><br />
            <input
                type='datetime-local'
                name='waketime'
                onChange={handleChanges}
            />
            <br />
            <label>How do you feel waking up?</label><br />
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
            />
            <br />
            <button>Submit</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
        userId: state.userId,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(mapStateToProps, { addData })(WakeForm);