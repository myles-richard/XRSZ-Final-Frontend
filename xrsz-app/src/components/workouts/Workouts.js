import React, { useContext, useEffect } from 'react';
import { WorkoutItem } from './WorkoutItem';
import WorkoutContext from '../../context/workout/workoutContext';
// import { Container } from 'semantic-ui-react';

const Workouts = () => {
    // gives us access to any state or method or actions associated with this context 
    const workoutContext = useContext(WorkoutContext)

    const { workout, getWorkouts } = workoutContext;

    useEffect(() => {
        getWorkouts();
    }, [])

    return (
        <div>
            {workout.map(workouts => (
            <WorkoutItem key={workouts.id} workout={workouts} />
            ))}
        </div>
    )
}

export default Workouts;