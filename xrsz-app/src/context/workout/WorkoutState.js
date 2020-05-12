import React, { useReducer, useContext } from 'react';
import WorkoutContext from './workoutContext';
import AuthContext from '../auth/authContext';
import workoutReducer from './workoutReducer';
import axios from 'axios';
import { 
    GET_WORKOUTS,
    GET_ONE,
    SET_CURRENT,
    CLEAR_CURRENT,
    SAVE_WORKOUT,
    DELSAVE_WORKOUT
} from '../types';
// initial state and actions to perform 
const WorkoutState = props => {
    const initialState = {
        workout: [],
        current: null,
        error: null,
        workouts: null,
        isSaved: null,

    };
    // state allows us to access anything in our state, dispatch allows us to dispatch objects to the reducer
    const [state, dispatch] = useReducer(workoutReducer, initialState);

    const authContext = useContext(AuthContext);

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

       // Save Workout
       const saveWorkout = async (user, workouts) => {
           try {
               const res = await axios.put(`${endpoint}/workout/${user._id}`, workouts, {
                   headers: {
                       "Content-Type": "application/json",
                   }

               });
               console.log(res)
               console.log(workouts)
               dispatch({ 
                   type: SAVE_WORKOUT, 
                   payload: res.data 
                });
                authContext.getUser();

           } catch (err) {
               console.log(err)
           }
        
    }

       // Delete save Workout
       const delSaveWorkout = async (user, workouts) => {
           try {
               const res = await axios.put(`${endpoint}/workout/unsave/${user._id}`, workouts, {
                   headers: {
                       "Content-Type": "application/json",
                   }

               });
               console.log(res)
               console.log(workouts)
               dispatch({ 
                   type: DELSAVE_WORKOUT, 
                   payload: res.data 
                });
                authContext.getUser();
           } catch (err) {
               console.log(err)
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
            workouts: state.workouts,
            isSaved: state.isSaved,
            getWorkouts,
            getOne,
            setCurrent,
            clearCurrent,
            saveWorkout,
            delSaveWorkout
        }}>
            { props.children }
        </WorkoutContext.Provider>
    )
};

export default WorkoutState;