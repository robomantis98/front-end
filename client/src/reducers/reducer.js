import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGOUT,
    LEAVE_BOOK,
    FOCUS_BOOK,
    DELETE_BOOK_REQUEST,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_FAILURE,
    SUBMIT_REVIEW_REQUEST,
    SUBMIT_REVIEW_SUCCESS,
    SUBMIT_REVIEW_FAILURE,
} from '../actions';


const initState = {
    token: null,
    username: null,
    currentBook: null,
    error: null,
    isAuthenticating: false,
    isDeleting: false,
    isReviewing: false,
    books: [],
}
const reducer = (state=initState,action) => {
    switch(action.type){
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            console.log(action.payload);
            return { ...state, isAuthenticating: true, error: null};
        case LOGIN_SUCCESS: 
        case REGISTER_SUCCESS:
            console.log(action.payload);
            localStorage.setItem('token',action.payload.data.token);
            return { ...state, isAuthenticating: false, error: null, token: action.payload.data.token, username: action.payload.data.username};
        case LOGIN_FAILURE: 
        case REGISTER_FAILURE:
            console.log(action.payload);
            return { ...state, isAuthenticating: false, error: action.payload}
        // case REGISTER_REQUEST:
        //     return { ...state, isAuthenticating: true, error: null};
        // case REGISTER_SUCCESS: 
        //     return { ...state, isAuthenticating: false, error: null, token: action.payload.token, username: action.payload.username};
        // case REGISTER_FAILURE: 
        //     return { ...state, isAuthenticating: false, error: action.payload}
        case LOGOUT: 
            return { ...state, token: null, username: null, currentBook: null}
        case LEAVE_BOOK: 
            return { ...state, currentBook: null}
        case FOCUS_BOOK:
            return { ...state, currentBook: action.payload}
        case DELETE_BOOK_REQUEST: 
            return { ...state, isDeleting: true, error: null }
        case DELETE_BOOK_SUCCESS: 
            return { ...state, isDeleting: false, error: null}
        case DELETE_BOOK_FAILURE: 
            return { ...state, isDeleting: false, error: action.payload}
        case SUBMIT_REVIEW_REQUEST:
            return { ...state, isReviewing: true, error: null}
        case SUBMIT_REVIEW_SUCCESS:
            return { ...state, isReviewing: false, error: null}
        case SUBMIT_REVIEW_FAILURE:
            return { ...state, isReviewing: false, error: action.payload}
        default:
            return state;
    }
}
export default reducer;