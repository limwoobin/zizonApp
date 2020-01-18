import axios from 'axios';

const formData = new FormData();

export const GET_Customers = () => axios.get('/dr/customer/customers');
export const ADD_Customer = (formData) => axios.post('/dr/customer/insert');
export const ADD_Member = (formData) => axios.post('/dr/member/insert');