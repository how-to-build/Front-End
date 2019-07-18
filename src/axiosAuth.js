import Axios from 'axios';

export default function () {
    const token = localStorage.getItem('token');
    return Axios.create({
        headers: {
            'token': token
        }
    });
}