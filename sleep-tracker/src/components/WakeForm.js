import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addData } from '../actions';

const WakeForm = props => {

    const [ wakeData, setWakeData ] = useState({
        dateString:'',
        sleepString:'',
        rating:''
    })

    const [ dateData, setDateData ] = useState({
        month: '',
        day: '',
    })

    const [ sleepTime, setSleepTime ] = useState({
        wakeHour: '',
        wakeMinutes: '',
        sleepHour: '',
        sleepMinutes: ''
    })

    const [ checkboxData, setCheckboxData ] = useState({
        bad: '',
        okay: '',
        good: '',
        great: ''
    })

    const handleDate = e => {
        setDateData({
            ...dateData,
            [e.target.name]: e.target.value
        })
    }

    const handleSleep = e => {
        setSleepTime({
            ...sleepTime,
            [e.target.name]: e.target.value
        })
    }

    const handleCheckbox = e => {
        setCheckboxData({
            ...checkboxData,
            [e.target.name]: e.target.checked,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const wakeDate = new Date(
            `${dateData.year}, ${dateData.month - 1}, ${dateData.day}, ${sleepTime.wakeHour}, ${sleepTime.wakeMinutes}`
            )
        const sleepData = new Date(
            `${dateData.year}, ${dateData.month - 1}, ${dateData.day}, ${sleepTime.sleepHour}, ${sleepTime.sleepMinutes }`
            )
        setWakeData({
            dateString: wakeDate.toISOString(),
            sleepString: sleepData.toISOString(),
            rating: checkboxData
        })
        props.addData(wakeData)
        setDateData({
            month: '',
            day: '',
            hour: '',
            minutes: ''
        })
        setCheckboxData({
            bad: '',
            okay: '',
            good: '',
            great: ''
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <br />
            <br />
            <select id='month' name='month' onChange={handleDate}>
                <option value='1'>January</option>
                <option value='2'>February</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
            </select>
            <select id='day' name='day' onChange={handleDate}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='17'>17</option>
                <option value='18'>18</option>
                <option value='19'>19</option>
                <option value='20'>20</option>
                <option value='21'>21</option>
                <option value='22'>22</option>
                <option value='23'>23</option>
                <option value='24'>24</option>
                <option value='25'>25</option>
                <option value='26'>26</option>
                <option value='27'>27</option>
                <option value='28'>28</option>
                <option value='29'>29</option>
                <option value='30'>30</option>
                <option value='31'>31</option>
            </select>
            <select id='year' name='year' onChange={handleDate}>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>                
            </select>
            <br />
            <br />
            <h2>When you woke</h2>
            <input
                type='text'
                id='wakeHour'
                name='wakeHour'
                onChange={handleSleep}
            />:
            <input
                type='text'
                id='wakeMinutes'
                name='wakeMinutes'
                onChange={handleSleep}
            />
            <br />
            <br />
            <h2>When you slept</h2>
            <input
                type='text'
                id='sleepHour'
                name='sleepHour'
                onChange={handleSleep}
            />:
            <input
                type='text'
                id='sleepMinutes'
                name='sleepMinutes'
                onChange={handleSleep}
            />
            <br />
            <br />
            <p>Bad</p>
            <input
                type='checkbox'
                id='rating'
                name='bad'
                onChange={handleCheckbox} 
            />
            <p>Okay</p>
            <input
                type='checkbox'
                id='rating'
                name='okay'
                onChange={handleCheckbox} 
            />
            <p>Good</p>
            <input
                type='checkbox'
                id='rating'
                name='good'
                onChange={handleCheckbox} 
            />
            <p>Great</p>
            <input
                type='checkbox'
                id='rating'
                name='great'
                onChange={handleCheckbox} 
            />
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}

export default connect(null, { addData })(WakeForm);