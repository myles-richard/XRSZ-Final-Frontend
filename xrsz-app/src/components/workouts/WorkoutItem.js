import React, { useContext, useState } from 'react'
import { Comment, CommentGroup, Card, Icon, Modal, Image, Segment } from 'semantic-ui-react';

import WorkoutContext from '../../context/workout/workoutContext';

export const WorkoutItem = ({ workout }) => {

    const workoutContext = useContext(WorkoutContext);

    const { name, type, } = workout;
    
    return (
        <>
            <Modal closeIcon basic image trigger={<Card raised style={{ padding: 10, margin: 10 }} >
                <CommentGroup>
                    <Comment>
                        <Comment.Avatar src="https://picsum.photos/200"/>
                        <Comment.Content>
                            <Comment.Author>
                                {name} <Icon floated="right" name='plus'/>
                                
                            </Comment.Author>
                            <div>
                                <Comment.Metadata>{type}</Comment.Metadata>
                            </div>
                            <div>
                                <Comment.Metadata>Save</Comment.Metadata>
                            </div>
                        </Comment.Content>
                    </Comment>
                </CommentGroup>
            </Card> }>
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
            </Modal>
        </>
        
    )
};