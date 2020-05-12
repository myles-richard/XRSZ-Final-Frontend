import React from 'react'
import MuscleTabs from '../tabs/MuscleTabs';
import './Musclegroup.css';

const Musclegroup = () => {
    return (
        <div className="workout-tabs">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
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