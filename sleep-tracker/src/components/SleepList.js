import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, editData } from '../actions';

const SleepList = props => {

    useEffect(() => {
        props.fetchData();
    }, []);

    console.log(props.data)

    return (
        <div>
            {props.isLoading ? <h2>Loading...</h2> : null}
            {props.error ? <h2>Error</h2> : null}
            {props.data.length > 0 ? (
            <div>
                {props.data.map((userData) => (
                    <div>
                        <p key={userData.id}>
                            Wake Time: {userData.wakeTime}<br />
                            Sleep Time: {userData.bedTime}<br />
                            Wake Rating: {userData.wakeRating}<br />
                            Day Rating: {userData.dayRating}<br />
                            Tiredness Rating: {userData.tiredRating}
                        </p>
                    </div>
                ))}
            </div>
            ) : null}
        </div>

    );
};

const mapStateToProps = state => {
    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchData, editData })(SleepList);