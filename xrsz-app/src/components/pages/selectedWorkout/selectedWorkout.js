import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Item, Container } from 'semantic-ui-react';
import { Exercises } from './Exercises';

const selectedWorkout = (props) => {

    console.log('about', props.location.state)
    const workouts = props.location.state;
    console.log(workouts.current.exercise)
    
    return (
        <>
        
            <header className="selected">
                <div className="selected_image-box">
                    Logo
                </div>

                <div className="selected__textbox">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">{workouts.current.name}</span>
                    </h1>
                    <figure className="selected__shape">
                        <Button className=" button--white button--animated save-button"  fluid size='large' as={Link} to="/register">
                            <span className="btn-txt">Register</span>
                        </Button>
                    </figure>
                    <p className="descriptions">
                        {workouts.current.description}
                    </p>
                </div>
            </header>
            {/* <Container> */}
            <main>
            <Item.Group divided>
                <Item>
                    <Item.Content verticalAlign='middle'>
                        <Item.Header>Good For</Item.Header>
                        <Item.Meta>
                        <span className='type'>{workouts.current.goodFor}</span>
                        </Item.Meta>
                    </Item.Content>
                </Item>
                <Item>
                    <Item.Content verticalAlign='middle'>
                        <Item.Header>{workouts.current.time}</Item.Header>
                        <Item.Meta>
                        <span className='type'>Avg. Minutes</span>
                        </Item.Meta>
                    </Item.Content>
                </Item>
            </Item.Group>
            <div class="u-left-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                    Exercises
                </h2>
            </div>
            
            {workouts.current.exercise.map(exercises => 
            <Exercises key={exercises._id} exercise={exercises} />
            )}
            
            </main>
            {/* </Container> */}
        </>
        
    )
}

export default selectedWorkout
