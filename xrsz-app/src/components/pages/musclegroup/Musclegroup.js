import React from 'react'
import MuscleTabs from '../tabs/MuscleTabs';
import './Musclegroup.css';

const Musclegroup = () => {
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