import React, {useContext, useEffect, useState } from 'react'
import MuscleTabs from '../tabs/MuscleTabs';
import './Musclegroup.css';
import WorkoutContext from '../../../context/workout/workoutContext';

const Musclegroup = () => {

    // const workoutContext = useContext(WorkoutContext);

    // const { current, } = workoutContext
    // const { name, description } = workouts;

    // useEffect(() => {
    //     if(current !== null) {
    //         setWorkouts(current)
    //     } else {
    //         setWorkouts({
    //             name: '',
    //             description: ''
    //         });
    //     }
    // }, [workoutContext, current])

    // const [workouts, setWorkouts] = useState({
    //     name,
    //     description
    // })

    

    return (
        <div>
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                    Musclegroup
                </h2>
            </div>
            <div className="tabs">
                <MuscleTabs />
            </div>
        </div>
    )
}

export default Musclegroup;