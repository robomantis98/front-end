import axios from 'axios';
//import axiosWithAuth from '../utils/axiosWithAuth';

// LOGIN PAGE ACTIONS
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const loginRequest = userData => dispatch => {
    dispatch({type:LOGIN_REQUEST,payload:userData});
    axios.post('https://bookr-bw-app.herokuapp.com/api/users/login',userData)
        .then(res=>dispatch({type:LOGIN_SUCCESS,payload:res}))
        .catch(err=>dispatch({type:LOGIN_FAILURE,payload:err}));
}
export const registerRequest = userData => dispatch => {
    dispatch({type:REGISTER_REQUEST,payload:userData});
    axios.post('https://bookr-bw-app.herokuapp.com/api/users/register',userData)
        .then(res=>dispatch({type:REGISTER_SUCCESS,payload:res}))
        .catch(err=>dispatch({type:REGISTER_FAILURE,payload:err}));
}
// MULTI PAGE ACTIONS
export const LOGOUT = 'LOGOUT';
export const LEAVE_BOOK = 'LEAVE_BOOK';
export const FOCUS_BOOK = 'FOCUS_BOOK';

export const logout = () => ({type:LOGOUT});
export const leaveBook = () => ({type:LEAVE_BOOK});
export const focusBook = () => ({type:LEAVE_BOOK});
// HOME PAGE ACTIONS
export const DELETE_BOOK_REQUEST = 'DELETE_BOOK_REQUEST';
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
export const DELETE_BOOK_FAILURE = 'DELETE_BOOK_FAILURE';

// Perhaps implement page load actions

export const deleteBook = (id,token) => dispatch => {
    dispatch({type:DELETE_BOOK_FAILURE,payload:id});
    axios.delete('https://bookr-bw-app.herokuapp.com/api/books/:id')//withAuth
        .then(res=>dispatch({type:DELETE_BOOK_SUCCESS,payload:res}))
        .catch(err=>dispatch({type:DELETE_BOOK_FAILURE,payload:err}));
}
// REVIEW PAGE ACTIONS
export const SUBMIT_REVIEW_REQUEST = 'SUBMIT_REVIEW_REQUEST';
export const SUBMIT_REVIEW_SUCCESS = 'SUBMIT_REVIEW_SUCCESS';
export const SUBMIT_REVIEW_FAILURE = 'SUBMIT_REVIEW_FAILURE';

export const submitReview = (formData,token) => dispatch => {
    dispatch({type:SUBMIT_REVIEW_REQUEST,payload:formData})
    axios.post('https://bookr-bw-app.herokuapp.com/api/reviews/:id')//withAuth
        .then(res=>dispatch({type:SUBMIT_REVIEW_SUCCESS,payload:res}))
        .catch(err=>dispatch({type:SUBMIT_REVIEW_FAILURE,payload:err}))
}

