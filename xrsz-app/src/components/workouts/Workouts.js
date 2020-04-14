import React, { useContext } from 'react';
import { WorkoutItem } from './WorkoutItem';
import WorkoutContext from '../../context/workout/workoutContext';
// import { Container } from 'semantic-ui-react';

const Workouts = () => {
    // gives us access to any state or method or actions associated with this context 
    const workoutContext = useContext(WorkoutContext)

    const { workout } = workoutContext;
    return (
        <div>
            {workout.map(workouts => (
            <WorkoutItem key={workout.id} workout={workouts} />
            ))}
        </div>
    )
}

export default Workouts;