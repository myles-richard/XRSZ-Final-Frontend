import { REGISTER_SUCCESS,
    REGISTER_FAIL, 
    USER_LOADED, 
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS
} from "../types";


export default (state,action) => {
    switch(action.type) {
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
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        default: 
            return state;
    }
}