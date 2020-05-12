import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import uuid from 'uuid/v4';

import { 
    SET_ALERT,
    REMOVE_ALERT
} from '../types';
// initial state and actions to perform 
const AlertState = props => {
    const initialState = [];
    // state allows us to access anything in our state, dispatch allows us to dispatch objects to the reducer
    const [state, dispatch] = useReducer(alertReducer, initialState);
   
    // SET ALERT
    const setAlert = (msg, type, timeout = 4000) => {
        const id = uuid();
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        });
        // when we remove an alert we send the id on the payload after timeout
        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
    }
    
    
    return (
        //Provider pass in anthing we want available to entire app
        <AlertContext.Provider
        value={{
            //entire array is state
            alerts: state,
            setAlert,
        }}>
            { props.children }
        </AlertContext.Provider>
    )
};

export default AlertState;