import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    LOGOUT,
} from '../types';
// initial state and actions to perform 
const AuthState = props => {
    const initialState = {
        //store token in local storage
        token: localStorage.getItem('token'),
        //tells us if we're logged in or not.
        isAuthenticated: null,
        user: null,

    };
    // state allows us to access anything in our state, dispatch allows us to dispatch objects to the reducer
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load User

    // Register User 

    // Login User 

    // Logout User

    return (
        //Provider pass in anthing we want available to entire app
        <AuthContext.Provider
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
        }}>
            { props.children }
        </AuthContext.Provider>
    )
};

export default AuthState;