import React, { useContext, useEffect } from 'react'


import { Comment, CommentGroup, Card, Icon, Modal, a } from 'semantic-ui-react';

import WorkoutContext from '../../context/workout/workoutContext';

export const WorkoutItem = ({ workout }) => {

    const workoutContext = useContext(WorkoutContext);

    const { setCurrent } = workoutContext



    const onClick = (e) => {
        e.preventDefault();
        setCurrent(workout)
        console.log('hi')
    }

    const { name, type, } = workout;
    
    
    return (
        
        <>
                <Modal  trigger={<Card style={{ padding: 10, margin: 10 }} onClick={onClick}>
                <CommentGroup>
                    <Comment>
                        <Comment.Avatar src="https://picsum.photos/200"/>
                        <Comment.Content>
                            <Comment.Author>
                                {name} <Icon floated="right" name='plus'   />
                                
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
            </Card>}>
                    <h2 style={{ textAlign: 'center'}}>{workout.name}</h2>
                    <Modal.Content>
                        <div className="ui centered cards">
                            <div className="ui card">
                                <div className="content">
                                <div className="header">Type: {workout.goodFor[0]}, {workout.goodFor[1]}</div>
                                <div className="meta"> Avg Time:{workout.time}</div>
                                <div className="description">
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="ui cards">
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
                        {/* <p>{workout.exercise[2].title}</p>
                        <p>{workout.exercise[3].title}</p>
                        <p>{workout.exercise[4].title}</p>
                        <p>{workout.exercise[5].title}</p>
                        <p>{workout.exercise[6].title}</p> */}
                    </Modal.Content> 
                </Modal>
        </>
        
    )
};

// export default WorkoutItem;