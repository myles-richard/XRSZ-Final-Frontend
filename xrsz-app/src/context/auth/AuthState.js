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
    UPDATE_SUCCESS,
    UPDATE_FAIL,
    CLEAR_CURRENT,
    SET_CURRENT,
    DELETE_SUCCESS,
    DELETE_FAIL,
    CLEAR_ERRORS
} from '../types';
// initial state and actions to perform 
const AuthState = props => {
    const initialState = {
        //store token in local storage
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        error: null,
        current: null

    };
    // state allows us to access anything in our state, dispatch allows us to dispatch objects to the reducer
    const [state, dispatch] = useReducer(authReducer, initialState);
    //end point for auth 
    const endpoint = "http://localhost:4000/api/v1";
    //  User
    const getUser = async () => {
        //load token into global headers
        //if local storage has a token
        //pass in the token
        if(localStorage.token) { 
            setAuthHeader(localStorage.token);
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
            
            getUser();
        } catch (err) {
            console.log(err)
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }
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
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg
            })
        }
    };


    // Set Current 
    const setCurrent = updated => {
        dispatch({ type: SET_CURRENT, payload: updated})
    }

    // Clear Current 
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    // Update User
    const update = async current => {
        try{
            const res = await axios.put(`http://localhost:4000/api/v1/users/${current._id}`, current,{
                headers: {
                    "Content-Type": "application/json",
                }
            });

            dispatch({
                type: UPDATE_SUCCESS,
                payload: res.data
            });
            //load the user in
            getUser();
        } catch (err) {
            console.log(err)
            dispatch({
                type: UPDATE_FAIL,
                payload: err.response.data.msg
            })
        }
    };

    // delete user 
    const deleteUser = async id => {
        try{
            const res = await axios.delete(`http://localhost:4000/api/v1/users/${id}`);

            dispatch({
                type: DELETE_SUCCESS,
                payload: res.data
            });
            //load the user in
            getUser();
        } catch (err) {
            console.log(err)
            dispatch({
                type: DELETE_FAIL,
                payload: err.response.msg
            })
        }
    }


    // Logout User
    const logout = () => dispatch({
        type: LOGOUT
    });

    //Clear Errors
    const clearErrors = () => dispatch({
            type: CLEAR_ERRORS
        });
    
    
    return (
        //Provider pass in anthing we want available to entire app
        <AuthContext.Provider
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            error: state.error,
            current: state.current,
            signUp,
            getUser,
            login,
            logout,
            update,
            setCurrent,
            clearCurrent,
            deleteUser,
            clearErrors
        }}>
            { props.children }
        </AuthContext.Provider>
    )
};

export default AuthState;