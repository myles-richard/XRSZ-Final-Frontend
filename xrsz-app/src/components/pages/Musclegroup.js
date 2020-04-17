import React from 'react'
import Workouts from '../workouts/Workouts';
import MusclegroupMenu from './muscleGroup/MusclegroupMenu';
import './Musclegroup.css';

const Musclegroup = () => {
    return (
        <div className="container">
           <h1>Musclegroup</h1>
           <h1><MusclegroupMenu /></h1>
           <Workouts /> 
        </div>
    )
}

export default Musclegroup;