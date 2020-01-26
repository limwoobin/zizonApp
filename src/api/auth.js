import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
}

export const GET_Customers = () => axios.get('/dr/customer/customers');
export const ADD_Customer = (data) => axios.post('/dr/customer/insert');
export const ADD_Member = (data) => axios.post('/dr/member/insert');
export const LOGIN = (data) => axios.post('/dr/member/login' , data , config);
