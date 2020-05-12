import React, { useContext, useEffect } from 'react';
import {  Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';

import './_workout.scss'

export const Workout = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.getUser();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="workoutpage">
            {/* <div className="img-box"> */}
                <div className="story">
                    <div className="story__shape">
                        
                    <Image  
                        src={require('../../../images/musclegroups.jpeg')}
                        className="story__img"
                        as={Link}
                        to='/musclegroup'/>
                        <h2 className="story_caption">Musclegroup</h2>
                    </div>
                </div>
                <hr  />
                <div className="story">
                    <div className="story__shape">
                    <Image  
                    src={require('../../../images/exercisetypes.jpeg')}
                    className="story__img"
                    as={Link}
                    to='/workouttype'/>
                        <h2 className="story_caption">Exercise Types</h2>
                    </div>
                </div> 
            {/* </div> */}
        </div>
    )
}

export default Workout;
