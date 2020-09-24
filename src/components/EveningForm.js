import React, { useState } from 'react';
import { connect } from 'react-redux';
import addData from '../actions';

const EveningForm = props => {

    const [ eveningData, setEveningData ] = useState({
        dayRating:''
    })

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='checkbox'
                id='rating'
                name='bad'
                onChange={handleCheckbox} 
            />
            <p>Bad</p>
            <input
                type='checkbox'
                id='rating'
                name='okay'
                onChange={handleCheckbox} 
            />
            <p>Okay</p>
            <input
                type='checkbox'
                id='rating'
                name='good'
                onChange={handleCheckbox} 
            />
            <p>Good</p>
            <input
                type='checkbox'
                id='rating'
                name='great'
                onChange={handleCheckbox} 
            />
            <p>Great</p>
        </form>
    )
}

export default connect(null, { addData })(EveningForm)