import React from 'react'
import TypeTabs from '../tabs/TypeTabs';


const workoutType = () => {
    return (
        <div className="musclegroupcontainer">
            <div className="tabs">
            <h1>Exercise Types</h1>
            <TypeTabs />
            </div>
        </div>
    )
}

export default workoutType;