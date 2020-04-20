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
        <div className="workoutpage">
            <Container style={{margin: 30}}>
                <div className="groups" >
                    <Image style={{ paddingBottom: 20}} centered fluid bordered  src={require("../../images/musclegroup.jpeg")} as={Link} to='/musclegroup'/>
                </div>
                <div className="types" >
                    <Image  centered fluid bordered  src={require("../../images/exercisetypes.jpeg")}  as={Link} to='/workouttype'/>
                </div>
            </Container>
        </div>
    )
}

export default Workout;
