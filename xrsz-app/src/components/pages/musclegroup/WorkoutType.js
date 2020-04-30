import React from 'react'
import TypeTabs from '../tabs/TypeTabs';


const workoutType = () => {
    return (
        <div>
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                    Exercise Type
                </h2>
            </div>
            <div className="tabs">
                <TypeTabs />
            </div>
        </div>
    )
}

export default workoutType;