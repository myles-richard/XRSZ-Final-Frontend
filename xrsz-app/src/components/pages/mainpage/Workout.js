import React, { useContext, useEffect } from 'react';
import {  Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';

import './Workout.css'

export const Workout = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.getUser();
        //es-lint-disable-next-line
    }, [authContext])
    const src = '../../../images/dumbells.jpg';
    return (
        <div className="workoutpage">
            <div className="groups">
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

                <div className="story">
                    <div className="story__shape">
                        <Segment>
                    <Image  
                    src={require('../../../images/exercisetypes.jpeg')}
                    className="story__img"
                    as={Link}
                    to='/workouttype'/>
                        <h2 className="story_caption">Exercise Types</h2>
                        </Segment>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workout;
