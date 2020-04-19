//bring in all types 

import { GET_WORKOUTS, WORKOUT_ERROR, GET_ONE, SET_CURRENT, CLEAR_CURRENT } from "../types";




// reducer is a function 
// when we dispatch obj to reducer it has a type and payload... we want to evaluate type 
export default (state, action) => {
    switch(action.type) {
        case GET_ONE:
        case GET_WORKOUTS:
            //return whatevers is already in state, it is immmutable, we have to make a copy and add whatever changes
            return {
                //copy state
                ...state,
                workout: action.payload,
            }
        case WORKOUT_ERROR:
            return {
                ...state,
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

        default:
            return state;
    }
}
