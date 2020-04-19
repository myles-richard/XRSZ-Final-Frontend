import React, { useContext } from 'react'
import WorkoutContext from '../../../context/workout/workoutContext';


const selectedWorkout = (props) => {

    // const workoutContext = useContext(WorkoutContext);

    // const { setCurrent, current, workoutOpen } = workoutContext
    return (
        <div>
            <h1>Selected workout </h1>
            {props.workout.name}
        </div>
    )
}

export default selectedWorkout
