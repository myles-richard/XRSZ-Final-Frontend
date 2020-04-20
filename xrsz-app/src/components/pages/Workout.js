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
            <Container >
                <h1>Workout page</h1>
                
                <div className="groups" >
                    <Image style={{ paddingBottom: 20}} centered fluid bordered  src={require("../../images/weights.jpeg")} as={Link} to='/musclegroup'/>
                </div>
                <div className="types" >
                    <Image style={{ paddingBottom: 20}} centered fluid bordered  src={require("../../images/yoga.jpeg")}  as={Link} to='/workouttype'/>
                </div>
            </Container>
           
            <h2 className="muscle">
                <span className="primary">Muscle Group</span>
            </h2>
           
        </div>
    )
}

export default Workout;
