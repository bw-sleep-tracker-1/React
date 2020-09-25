import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from './actions';

const Dashboard = (props) => {

    console.log(props.data)
    
    const totalHours = props.data.entries.reduce((prev, curr) =>
        prev + curr.hours
    , 0)

    return (
        <div>
            <h1>Welcome back!</h1>
            <p>You've slept a total of {totalHours} over the course of all of your entries.</p>
            <h2>Log Day</h2>
            <Link to='/wokeform'>Here</Link>
            <h2>Edit/delete Entries</h2>
            <Link to='/sleeplist'>Here</Link>
        </div>
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

export default connect(mapStateToProps, { fetchData })(Dashboard);