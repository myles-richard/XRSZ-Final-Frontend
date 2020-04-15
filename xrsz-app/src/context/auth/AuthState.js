import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthHeader from '../../utils/setAuthHeader';
import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
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
        error: null,

    };
    // state allows us to access anything in our state, dispatch allows us to dispatch objects to the reducer
    const [state, dispatch] = useReducer(authReducer, initialState);
    //end point for auth 
    const endpoint = "http://localhost:4000/api/v1";
    //  User
    const getUser = async () => {
        //load token into global headers
        if(localStorage.token) { //if local storage has a token
            setAuthHeader(localStorage.token); //pass in the token
        }
        try {
            const res = await axios.get(`${endpoint}/auth`);

            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: AUTH_ERROR
            });
        }
    }
    // Register User 
    const signUp = async newUser => {

        try{
            const res = await axios.post(`${endpoint}/auth/signup`, newUser,{
                headers: {
                    "Content-Type": "application/json",
                }
            });

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            //load the user in
            getUser();
        } catch (err) {
            console.log(err)
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }
        // return fetch(`${endpoint}/auth/signup`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(newUser),
        // })
        //   .then((res) => res.json())
        //   .catch((err) => console.log(err));
      };
    // Login User 

    const login = async user => {

        try{
            const res = await axios.post(`${endpoint}/auth`, user,{
                headers: {
                    "Content-Type": "application/json",
                }
            });

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            //load the user in
            getUser();
        } catch (err) {
            console.log(err)
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg
            })
        }
    };
    // Logout User

    return (
        //Provider pass in anthing we want available to entire app
        <AuthContext.Provider
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            error: state.error,
            signUp,
            getUser,
            login,
        }}>
            { props.children }
        </AuthContext.Provider>
    )
};

export default AuthState;