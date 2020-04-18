import React, { useContext, useEffect } from 'react';
import { WorkoutItem } from './WorkoutItem';
import WorkoutContext from '../../context/workout/workoutContext';
// import { Container } from 'semantic-ui-react';

const Workouts = (props) => {
    // // gives us access to any state or method or actions associated with this context 
    // const workoutContext = useContext(WorkoutContext)

    // const { workout, getWorkouts } = workoutContext;

    // useEffect(() => {
    //     getWorkouts();
    // }, [])

    return (
        <div>
            {props.workouts.map(workout => 
            <WorkoutItem key={workout._id} workout={workout} />
            )}
        </div>
    )
}

export default Workouts;