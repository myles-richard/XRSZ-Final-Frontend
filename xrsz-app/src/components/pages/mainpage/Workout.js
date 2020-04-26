import React, { useContext, useEffect } from 'react';
import {  Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';

import './Workout.css'

export const Workout = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.getUser();
        //es-lint-disable-next-line
    }, [authContext])

    return (
        <div className="workoutpage">
            <Container style={{margin: 30}}>
                <div className="groups" >
                <Link to='/musclegroup'>musclegroup </Link>
                </div>
                <div className="types" >
                    <Link to='/workouttype'>Workout Type </Link>
                </div>
            </Container>
        </div>
    )
}

export default Workout;
