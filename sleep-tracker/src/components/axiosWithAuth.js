import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://lambda-bw-sleep-tracker.herokuapp.com/'
    });
};

export default axiosWithAuth;