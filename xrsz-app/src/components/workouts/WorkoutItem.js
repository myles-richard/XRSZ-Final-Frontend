import React, { useContext, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';

import { Comment, CommentGroup, Card, Icon, Modal, a } from 'semantic-ui-react';
import selectedWorkout from '../pages/selectedWorkout/selectedWorkout';
import WorkoutContext from '../../context/workout/workoutContext';

export const WorkoutItem = ({ workout }) => {

    const workoutContext = useContext(WorkoutContext);

    const { setCurrent, current, workoutOpen, getOne } = workoutContext

    //add component level state
    //add component level state
    // const [work, setWork] = useState({
    //     workoutOpen: false,
    // })
    //add component level state
    // const [myWorkout, setWorkout] = useState({
    //     name: '',
    //     time: '',
    //     type: '',
    //     exersize: '',
    //     goodFor: '',
    //     })

    const onClick = (e) => {
        e.preventDefault();
        setCurrent(workout)
        console.log('hi')
    }

    const { id, name, time, type, } = workout;
    
    
    return (
        
        <>
                <Modal trigger={<Card style={{ padding: 10, margin: 10 }} onClick={onClick}>
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
                        <div class="ui centered cards">
                            <div class="ui card">
                                <div class="content">
                                <div class="header">Type: {workout.goodFor[0]}, {workout.goodFor[1]}</div>
                                <div class="meta"> Avg Time:{workout.time}</div>
                                <div class="description">
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