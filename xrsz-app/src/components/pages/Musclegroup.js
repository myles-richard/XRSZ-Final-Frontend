import React from 'react'
import Workouts from '../workouts/Workouts';
import MusclegroupMenu from './muscleGroup/MusclegroupMenu';
import MuscleTabs from './tabs/MuscleTabs';
import './Musclegroup.css';

const Musclegroup = () => {
    return (
        <div className="container">
           <h1>Musclegroup</h1>
           {/* <h1><MusclegroupMenu /></h1> */}
           {/* <Workouts />  */}
           <MuscleTabs />
        </div>
    )
}

export default Musclegroup;