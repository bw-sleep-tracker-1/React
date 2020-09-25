import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';

export const DATA_LOADING = 'DATA_LOADING';
export const GET_USER = 'GET_USER';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const EDIT_DATA = 'EDIT_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const DATA_FAIL = 'DATA_FAIL';

export const postUser = (userCreds) => (dispatch) => {
    dispatch({ type: DATA_LOADING })
    axios
        .post("https://lambda-bw-sleep-tracker.herokuapp.com/auth/login", userCreds)
            .then((res) => {
                dispatch({ type: GET_USER, payload: res.data.user_id  })
                localStorage.setItem('token', res.data.token)
                console.log(res.data.user_id)
            })
            // .then(() => window.location = '/dashboard')
            .catch(err =>
                dispatch({type: DATA_FAIL, payload: err})
            )
}

export const signUser = (userCreds) => (dispatch) => {
    dispatch({ type: DATA_LOADING })
    axios
        .post("https://lambda-bw-sleep-tracker.herokuapp.com/auth/signup", userCreds)
            .then((res) => {
                dispatch({ type: GET_USER, payload: res.data.user_id  })
                localStorage.setItem('token', res.data.token)
            })
            .then(() => window.location = '/dashboard')
            .catch(err =>
                dispatch({type: DATA_FAIL, payload: err})
            )
}

export const fetchData = (id) => (dispatch) => {
    dispatch({ type: DATA_LOADING })
    axiosWithAuth()
        .get(`/users/${id}/entries`)
        .then(res =>
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
        )
        .catch(err =>
            dispatch({type: DATA_FAIL, payload: err})
        )
}

export const addData = (data, id) => (dispatch) => {
    dispatch({ type: DATA_LOADING })
    axiosWithAuth()
        .post(`/users/${id}/entries`, data)
        .then(res => 
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
        )
        .then(() => window.location = '/sleeplist')
        .catch(err => 
            dispatch({ type: DATA_FAIL, payload: err })
        )
}

export const editData = (editedData, id) => (dispatch) => {
   dispatch({ type: DATA_LOADING })
    axiosWithAuth()
        .put(`/entries/${id}`, editedData)
        .then(res => {
            dispatch({ type: EDIT_DATA, payload: res.data })
        })
        .then(() => window.location = '/sleeplist')
        .catch(err => 
            dispatch({ type: DATA_FAIL, payload: err })
        )
}

export const deleteData = (id) => (dispatch) => {
    axiosWithAuth()
        .delete(`/entries/${id}`)
        .then(res => {
            dispatch({ type: DELETE_DATA, payload: id })
        })
        .catch(err => 
            dispatch({ type: DATA_FAIL, payload: err })
        )
}