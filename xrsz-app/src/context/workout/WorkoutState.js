import React, { useReducer } from 'react';
import WorkoutContext from './workoutContext';
import workoutReducer from './workoutReducer';
import axios from 'axios';
import { 
    GET_WORKOUTS,
    GET_ONE,
    SET_CURRENT,
    CLEAR_CURRENT,
} from '../types';
// initial state and actions to perform 
const WorkoutState = props => {
    const initialState = {
        workout: [],
        current: null,
        error: null,
        workoutOpen: false,

    };
    // state allows us to access anything in our state, dispatch allows us to dispatch objects to the reducer
    const [state, dispatch] = useReducer(workoutReducer, initialState);

    const endpoint = "http://localhost:4000/api/v1";

    // GET Workout
    const getWorkouts = async () => {
        try {
            const res = await axios.get(`${endpoint}/workout`);
            
            

            dispatch({
                type: GET_WORKOUTS,
                payload: res.data
            });

        } catch (err) {
            console.log(err)
            // dispatch({
            //     type: WORKOUT_ERROR,
            //     payload: err.response.msg
            // });
        }
    }

    // Get One Workout
    const getOne = async workouts => {
        try {
            const res = await axios.get(`${endpoint}/workout/${workouts}`);
            console.log(res)
            

            dispatch({
                type: GET_ONE,
                payload: res.data
            });

        } catch (err) {
            console.log(err)
            // dispatch({
            //     type: WORKOUT_ERROR,
            //     payload: err.response.msg
            // });
        }
    }

        // Set Current 
        const setCurrent = workouts => {
            dispatch({ type: SET_CURRENT, payload: workouts})
        }
    
        // Clear Current 
        const clearCurrent = () => {
            dispatch({ type: CLEAR_CURRENT })
        }

    return (
        //Provider pass in anthing we want available to entire app
        <WorkoutContext.Provider
        value={{
            workout: state.workout,
            error: state.error,
            workoutOpen: state.workoutOpen,
            current: state.current,
            getWorkouts,
            getOne,
            setCurrent,
            clearCurrent
        }}>
            { props.children }
        </WorkoutContext.Provider>
    )
};

export default WorkoutState;