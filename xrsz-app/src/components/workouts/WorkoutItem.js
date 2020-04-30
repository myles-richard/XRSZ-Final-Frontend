import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Comment, CommentGroup, Card, Icon, Modal, Image, Segment } from 'semantic-ui-react';

import WorkoutContext from '../../context/workout/workoutContext';

export const WorkoutItem = ({ workout }) => {

    const workoutContext = useContext(WorkoutContext);

     //take methods out of authcontext
     const { setCurrent } = workoutContext;

    const { name, type, } = workout;

    
    return (
        <div className="workout__list">
        <Link to={{
            pathname: "/selected",
            state: {
                current: workout
            }}}>
            <Card raised style={{ padding: 10, margin: 10 }} onClick={() => setCurrent()} >
                    <Comment.Group size="huge">
                        <Comment>
                            <Comment.Avatar src="https://picsum.photos/200"/>
                            <Comment.Content>
                                <Card.Header>{name} </Card.Header>
                                {/* <Comment.Author as='h3'>
                                     
                                    <Icon floated="right" name='plus'/>
                                </Comment.Author> */}
                                <div>
                                    <Card.Meta>{type}</Card.Meta>
                                </div>
                                {/* <div>
                                    <Comment.Metadata>Save</Comment.Metadata>
                                </div> */}
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                </Card>
            {/* <Modal closeIcon basic image trigger={ }>
                <h2 style={{ textAlign: 'center'}}>{workout.name}</h2>
                <Modal.Content>
                    <div className="segway">
                        <div className="ui centered cards">
                            <div className="ui card">
                                <div className="content">
                                <div className="header">Type: {workout.goodFor[0]} {workout.goodFor[1]}</div>
                                <div className="meta"> Avg Time:{workout.time}</div>
                                <div className="description">
                                    {workout.description}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div>
                            <Image centered fluid bordered style={{paddingTop: 30}} src={require("../../images/weights.jpeg")} />
                        </div>
                    <h4>Exercises:</h4>
                    <div className="ui raised cards">
                        <div className="ui orange fluid card">
                            <div className="content">
                                <div className="header">{workout.exercise[0].title}</div>
                                <div className="description">{workout.exercise[0].description}</div>
                            </div>
                        </div>
                        <div className="ui orange fluid card">
                            <div className="content">
                                <div className="header">{workout.exercise[1].title}</div>
                                <div className="description">{workout.exercise[1].description}</div>
                            </div>
                        </div>
                        <div className="ui orange fluid card">
                            <div className="content">
                                <div className="header">{workout.exercise[2].title}</div>
                                <div className="description">{workout.exercise[2].description}</div>
                            </div>
                        </div>
                        <div className="ui orange fluid card">
                            <div className="content">
                                <div className="header">{workout.exercise[3].title}</div>
                                <div className="description">{workout.exercise[3].description}</div>
                            </div>
                        </div>
                        <div className="ui orange fluid card">
                            <div className="content">
                                <div className="header">{workout.exercise[4].title}</div>
                                <div className="description">{workout.exercise[4].description}</div>
                            </div>
                        </div>
                        <div className="ui orange fluid card">
                            <div className="content">
                                <div className="header">{workout.exercise[5].title}</div>
                                <div className="description">{workout.exercise[5].description}</div>
                            </div>
                        </div>
                    </div>
                </Modal.Content> 
            </Modal> */}
            </Link>
        </div>
        
    )
};