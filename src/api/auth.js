import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
}

export const API = {
    GET_Customers : () => axios.get('/dr/customer/customers'),
    ADD_Customer : (data) => axios.post('/dr/customer/insert'),
    ADD_Member : (data) => axios.post('/dr/member/insert' , data , config),
    LOGIN : (data) => axios.post('/dr/member/login' , data , config),
    USER_EMAIL_CHK : (data) => axios.get('/dr/member/overlap/check/' + data),
}
