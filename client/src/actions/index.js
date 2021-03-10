import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

//TOKEN HANDLERS
export const SET_TOKEN = 'SET_TOKEN';

export const setToken = value => ({type:SET_TOKEN,payload:value});
// LOGIN ACTIONS
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginRequest = userData =>  dispatch => {
    dispatch({type:LOGIN_REQUEST,payload:userData});
    axios.post('https://localhost:3300/api/users/login',userData)
        .then(res=>dispatch({type:LOGIN_SUCCESS,payload:res.data}))
        .catch(err=>dispatch({type:LOGIN_FAILURE,payload:err}));
}
export const registerRequest = userData => dispatch => {
    dispatch({type:REGISTER_REQUEST,payload:userData});
    axios.post('https://localhost:3300/api/users/register',userData)
        .then(res=>dispatch({type:REGISTER_SUCCESS,payload:res.data}))
        .catch(err=>dispatch({type:REGISTER_FAILURE,payload:err}));
}
export const logout = () => ({type:LOGOUT});
// HOME PAGE ACTIONS
export const LOAD_BOOK_REQUEST = 'LOAD_BOOK_REQUEST';
export const LOAD_BOOK_SUCCESS = 'LOAD_BOOK_SUCCESS';
export const LOAD_BOOK_FAILURE = 'LOAD_BOOK_FAILURE';
export const LOAD_BOOKS_REQUEST = 'LOAD_BOOKS_REQUEST';
export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
export const LOAD_BOOKS_FAILURE = 'LOAD_BOOKS_FAILURE';
export const DELETE_BOOK_REQUEST = 'DELETE_BOOK_REQUEST';
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
export const DELETE_BOOK_FAILURE = 'DELETE_BOOK_FAILURE';

export const loadBook = id => dispatch => {
    dispatch({type:LOAD_BOOK_REQUEST,payload:id});
    axiosWithAuth().get(`/api/books/${id}`)
        .then(res=>dispatch({type:LOAD_BOOK_SUCCESS,payload:res.data}))
        .catch(err=>dispatch({type:LOAD_BOOK_FAILURE,payload:err}))
}
export const loadBooks = () => dispatch => {
    dispatch({type:LOAD_BOOKS_REQUEST});
    axiosWithAuth().get('/api/books/')
        .then(res=>dispatch({type:LOAD_BOOKS_SUCCESS,payload:res.data}))
        .catch(err=>dispatch({type:LOAD_BOOKS_FAILURE,payload:err}))
}

export const deleteBook = id => dispatch => {
    dispatch({type:DELETE_BOOK_REQUEST,payload:id});
    axiosWithAuth().delete(`/api/books/${id}`)
        .then(res=>dispatch({type:DELETE_BOOK_SUCCESS,payload:res.data}))
        .catch(err=>dispatch({type:DELETE_BOOK_FAILURE,payload:err}));
}
// REVIEW PAGE ACTIONS
export const GET_REVIEWS_REQUEST = 'GET_REVIEWS_REQUEST';
export const GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS';
export const GET_REVIEWS_FAILURE = 'GET_REVIEWS_FAILURE';
export const SUBMIT_REVIEW_REQUEST = 'SUBMIT_REVIEW_REQUEST';
export const SUBMIT_REVIEW_SUCCESS = 'SUBMIT_REVIEW_SUCCESS';
export const SUBMIT_REVIEW_FAILURE = 'SUBMIT_REVIEW_FAILURE';

export const getReviews = id => dispatch => {
    dispatch({type:GET_REVIEWS_REQUEST})
    axiosWithAuth().get(`/api/reviews/${id}`)
        .then(res=>dispatch({type:GET_REVIEWS_SUCCESS,payload:res.data}))
        .catch(err=>dispatch({type:GET_REVIEWS_FAILURE,payload:err}))
}
export const submitReview = (formData, id) => dispatch => {
    dispatch({type:SUBMIT_REVIEW_REQUEST,payload:formData})
    axiosWithAuth().post(`/api/reviews/${id}`,formData)
        .then(res=>dispatch({type:SUBMIT_REVIEW_SUCCESS,payload:res.data}))
        .catch(err=>dispatch({type:SUBMIT_REVIEW_FAILURE,payload:err}))
}

