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
    LOAD_BOOKS_REQUEST,
    LOAD_BOOKS_SUCCESS,
    LOAD_BOOKS_FAILURE,
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
    isLoading: false,
    isDeleting: false,
    isReviewing: false,
    needUpdate: false,
    books: [],
}
const reducer = (state=initState,action) => {
    switch(action.type){
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return { ...state, isAuthenticating: true, error: null};
        case LOGIN_SUCCESS: 
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.data.token);
            return { ...state, isAuthenticating: false, error: null, token: action.payload.data.token, username: action.payload.data.username};
        case LOGIN_FAILURE: 
        case REGISTER_FAILURE:
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
          const target = null;
          state.books.forEach(book => {
              if(book.id === action.payload) target = book;
              console.log(book);
          });
          console.log(target);
          return { ...state, currentBook: target}
        case LOAD_BOOKS_REQUEST:
            return {...state, needUpdate: false, isLoading: true, error: null}
        case LOAD_BOOKS_SUCCESS:
            console.log(action.payload.data) 
            return {...state, isLoading: false, error: null, books:action.payload.data}
        case LOAD_BOOKS_FAILURE:
            return {...state, isLoading: false, error: action.payload}
        case DELETE_BOOK_REQUEST: 
            return { ...state, isDeleting: true, error: null }
        case DELETE_BOOK_SUCCESS:
            console.log(action.payload) 
            return { ...state, needUpdate: true, isDeleting: false, error: null}
        case DELETE_BOOK_FAILURE: 
            console.log(action.payload)
            return { ...state, isDeleting: false, error: action.payload}
        case SUBMIT_REVIEW_REQUEST:
            return { ...state, isReviewing: true, error: null}
        case SUBMIT_REVIEW_SUCCESS:
            return { ...state, needUpdate: true, isReviewing: false, error: null}
        case SUBMIT_REVIEW_FAILURE:
            return { ...state, isReviewing: false, error: action.payload}
        default:
            return state;
    }
}
export default reducer;