import React from 'react';
import { WorkoutItem } from './WorkoutItem';


const Workouts = (props) => {
    return (
        <div className="workouts">
            {props.workouts.map(workout => 
            <WorkoutItem key={workout._id} workout={workout} />
            )}
        </div>
    )
}

export default Workouts;