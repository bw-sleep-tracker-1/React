import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData, editData, deleteData } from './actions';


const SleepList = props => {

    useEffect(() => {
        props.fetchData(props.userId);
    }, [props.data.entries.length]);

    const handleDelete = (id) => {
        props.deleteData(id)
    }
    console.log(props.data.entries)

    return (
        <div>
            {props.isLoading ? <h2>Loading...</h2> : null}
            {props.error ? <h2>Error</h2> : null}
            {props.data.entries.length > 0 ? (
            <div>
                {props.data.entries.map((userData) => (
                    <div key={userData.entry_id}>
                        <p>
                            Wake Time: {userData.waketime}<br />
                            Sleep Time: {userData.bedtime}<br />
                            Wake Rating: {userData.wake_rating}<br />
                            Day Rating: {userData.day_rating}<br />
                            Tiredness Rating: {userData.bed_rating}
                        </p>
                       <Link to='#' onClick={() => handleDelete(userData.entry_id)}>Delete</Link>
                       <Link to={{
                           pathname: '/editform',
                           toBeEdited: {
                                id: userData.entry_id,
                                waketime: userData.waketime,
                                bedtime: userData.bedtime,
                                wake_rating: userData.wake_rating
                            }
                       }}>Edit</Link> 
                    </div>
                ))}
            </div>
            ) : <h1>no data</h1>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        data: state.data,
        userId: state.userId,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchData, editData, deleteData })(SleepList);