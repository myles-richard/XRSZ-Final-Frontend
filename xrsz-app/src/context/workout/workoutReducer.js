//bring in all types 

import { GET_WORKOUTS } from "../types";




// reducer is a function 
// when we dispatch obj to reducer it has a type and payload... we want to evaluate type 
export default (state, action) => {
    switch(action.type) {
        case GET_WORKOUTS:
            //return whatevers is already in state, it is immmutable, we have to make a copy and add whatever changes
            return {
                //copy state
                ...state,
                workout: action.payload,
            }

        default:
            return state;
    }
}
