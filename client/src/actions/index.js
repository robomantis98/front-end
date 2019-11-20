import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// LOGIN PAGE ACTIONS
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const loginRequest = userData =>  dispatch => {
    
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
export const focusBook = bookId => ({type:FOCUS_BOOK, payload: bookId});
// HOME PAGE ACTIONS
export const LOAD_BOOKS_REQUEST = 'LOAD_BOOKS_REQUEST';
export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
export const LOAD_BOOKS_FAILURE = 'LOAD_BOOKS_FAILURE';
export const DELETE_BOOK_REQUEST = 'DELETE_BOOK_REQUEST';
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
export const DELETE_BOOK_FAILURE = 'DELETE_BOOK_FAILURE';

export const loadBooks = () => dispatch => {
    dispatch({type:LOAD_BOOKS_REQUEST});
    axiosWithAuth().get('/api/books/')
        .then(res=>dispatch({type:LOAD_BOOKS_SUCCESS,payload:res}))
        .catch(err=>dispatch({type:LOAD_BOOKS_FAILURE,payload:err}))
}

export const deleteBook = id => dispatch => {
    dispatch({type:DELETE_BOOK_REQUEST,payload:id});
    axiosWithAuth().delete(`/api/books/${id}`)
        .then(res=>dispatch({type:DELETE_BOOK_SUCCESS,payload:res.data}))
        .catch(err=>dispatch({type:DELETE_BOOK_FAILURE,payload:err}));
}
// REVIEW PAGE ACTIONS
export const SUBMIT_REVIEW_REQUEST = 'SUBMIT_REVIEW_REQUEST';
export const SUBMIT_REVIEW_SUCCESS = 'SUBMIT_REVIEW_SUCCESS';
export const SUBMIT_REVIEW_FAILURE = 'SUBMIT_REVIEW_FAILURE';

export const submitReview = formData => dispatch => {
    dispatch({type:SUBMIT_REVIEW_REQUEST,payload:formData})
    axiosWithAuth().post(`/api/reviews/${formData.id}`)
        .then(res=>dispatch({type:SUBMIT_REVIEW_SUCCESS,payload:res}))
        .catch(err=>dispatch({type:SUBMIT_REVIEW_FAILURE,payload:err}))
}

