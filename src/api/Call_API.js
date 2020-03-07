import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
}

export const API = {
    GET_Customers : () => axios.get('/dr/customer/customers' , config),
    ADD_Customer : (data) => axios.post('/dr/customer/insert'),
    ADD_Member : (data) => axios.post('/dr/member/insert' , data , config),
    LOGIN : (data) => axios.post('/dr/member/login' , data , config),
    LOGOUT : () => axios.get('/dr/member/logout' , config),
    USER_EMAIL_CHK : (data) => axios.get('/dr/member/overlap/check/' + data),
    GET_Categories : () => axios.get('/dr/category/list'),
    GET_MainPage : () => axios.get('http://localhost:4000/' , '' , config),
    GET_BoardData : (data) => axios.get('/dr/board/view/' + data , config),
}
