import { REGISTER_SUCCESS,
    REGISTER_FAIL, 
    USER_LOADED, 
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    UPDATE_SUCCESS,
    SET_CURRENT,
    CLEAR_CURRENT,
    DELETE_SUCCESS,
    DELETE_FAIL,
    CLEAR_ERRORS,
} from "../types";


export default (state,action) => {
    switch(action.type) {
        case UPDATE_SUCCESS:
            return {
                ...state,
                current: action.payload 
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            //put the token in local storage 
            localStorage.setItem('token', action.payload.token);
            //return to component that needs it 
            return {
                ...state, // return state to component that needs it 
                ...action.payload, // puts the token in state. this is the token 
                isAuthenticated: true, 
            };
        case DELETE_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case DELETE_FAIL: 
            return {
                ...state,
                error: action.payload 
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        case SET_CURRENT: 
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT: 
            return {
                ...state,
                current: null
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default: 
            return state;
    }
}