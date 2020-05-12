import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Comment, Card } from 'semantic-ui-react';

import WorkoutContext from '../../context/workout/workoutContext';

export const WorkoutItem = ({ workout }) => {

    const workoutContext = useContext(WorkoutContext);

     //take methods out of authcontext
     const { setCurrent } = workoutContext;

    const { name, type, } = workout;

    
    return (
        <div className="workout__list">
            <Card as={Link} to={{
                pathname: "/selected",
                state: {
                    current: workout
                }
            }} raised style={{ padding: 10, margin: 10 }} onClick={() => setCurrent()} >
                    <Comment.Group size="big">
                        <Comment>
                            <Comment.Avatar src="https://picsum.photos/200"/>
                            <Comment.Content>
                                <Card.Header>{name} </Card.Header>
                                <div>
                                    <Card.Meta>{type}</Card.Meta>
                                </div>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                </Card>
            {/* </Link> */}
        </div>
        
    )
};