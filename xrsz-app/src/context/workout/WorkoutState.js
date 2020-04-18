import React, { useReducer } from 'react';
import WorkoutContext from './workoutContext';
import workoutReducer from './workoutReducer';
import axios from 'axios';
import { 
    GET_WORKOUTS,
    WORKOUT_ERROR,
    SAVE_WORKOUT,
    DELETE_WORKOUT,
} from '../types';
// initial state and actions to perform 
const WorkoutState = props => {
    const initialState = {
        workout: [],
        error: null,
    };
    // state allows us to access anything in our state, dispatch allows us to dispatch objects to the reducer
    const [state, dispatch] = useReducer(workoutReducer, initialState);

    const endpoint = "http://localhost:4000/api/v1";

    // GET Workout
    const getWorkouts = async () => {
        try {
            const res = await axios.get(`${endpoint}/workout`);
            console.log(res)
            

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

    //Delete Workout

    return (
        //Provider pass in anthing we want available to entire app
        <WorkoutContext.Provider
        value={{
            workout: state.workout,
            error: state.error,
            getWorkouts,
        }}>
            { props.children }
        </WorkoutContext.Provider>
    )
};

export default WorkoutState;