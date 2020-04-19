import React, { useContext, useEffect } from 'react';
import { Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

import './Workout.css'

export const Workout = () => {
    const authContext = useContext(AuthContext);




    useEffect(() => {
        authContext.getUser();
        //es-lint-disable-next-line
    }, [authContext])
    return (
        <Container >
            <h1>Workout page</h1>

                    <Image centered bordered fluid src='https://picsum.photos/200' size='medium' as={Link} to='/musclegroup'/>
                
                    <Image centered fluid src='https://picsum.photos/200' size='medium' as={Link} to='/workouttype'/>

        </Container>
    )
}

export default Workout;
