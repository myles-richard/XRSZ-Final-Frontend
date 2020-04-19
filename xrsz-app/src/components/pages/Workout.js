import React, { useContext, useEffect } from 'react';
import { Reveal,Image, Segment, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

import './Workout.css'

export const Workout = () => {
    const authContext = useContext(AuthContext);




    useEffect(() => {
        authContext.getUser();
        //es-lint-disable-next-line
    }, [])
    return (
        <Container >
            <h1>Workout page</h1>
            <p>Workout type</p>
            {/* <Segment> */}
                    <Image centered bordered fluid src='https://picsum.photos/200' size='medium' as={Link} to='/musclegroup'/>
            {/* </Segment> */}
            {/* <Segment> */}
                
                    <Image centered fluid src='https://picsum.photos/200' size='medium' as={Link} to='/musclegroup'/>
                    
            {/* </Segment> */}
        </Container>
    )
}

export default Workout;
