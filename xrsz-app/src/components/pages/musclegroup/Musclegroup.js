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
        <div className="musclegroupcontainer">
            <div className="tabs">
            <h1>Musclegroup</h1>
            
            <MuscleTabs />
            </div>
           
        </div>
    )
}

export default Musclegroup;