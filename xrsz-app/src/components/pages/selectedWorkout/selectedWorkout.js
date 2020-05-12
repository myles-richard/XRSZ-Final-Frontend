import React, { useContext } from 'react';
import { Button, Item, Container } from 'semantic-ui-react';
import { Exercises } from './Exercises';
import AuthContext from '../../../context/auth/authContext';
import WorkoutContext from '../../../context/workout/workoutContext';

const SelectedWorkout = (props) => {

    const authContext = useContext(AuthContext);
    const workoutContext = useContext(WorkoutContext);

    //take methods out of authcontext
    const { user } = authContext;
    const { saveWorkout, delSaveWorkout, isSaved } = workoutContext;

    const workouts = props.location.state;

    const handleSave = (e) => {
        e.preventDefault();
        console.log(user);
        console.log(workouts);
        // console.log(current);
        saveWorkout(user, workouts);
        
    }
    
    const handleDel = (e) => {
        e.preventDefault();
        console.log('handel pressed');
        delSaveWorkout(user, workouts);
    }

    const saveBtn = (
        <figure className="selected__shape">
            <Button className=" button--white button--animated save-button"  fluid size='large' onClick={handleSave}>
            <span className='btn-txt'>save</span>
            </Button>
        </figure>
    )
    const delBtn = (
        <figure className="selected__shape">
            <Button className=" button--white button--animated save-button"  fluid size='large' onClick={handleDel}>
                <span className='btn-txt'>delete</span>
            </Button>
        </figure>
    )
    
    
    return (
        <>
        
            <header className="selected">
                <div className="selected__textbox">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">{workouts.current.name}</span>
                    </h1>
                    {isSaved ? delBtn : saveBtn  }
                    {/* <figure className="selected__shape">
                        <Button className=" button--white button--animated save-button"  fluid size='large' onClick={handleSave}>
                            save
                        </Button>
                        <Button onClick={handleDel}>Delete</Button>
                    </figure> */}
                    <p className="descriptions">
                        {workouts.current.description}
                    </p>
                </div>
            </header>
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
                <Container>
                <div className="u-left-text u-margin-bottom-big">
                    <h2  className="heading-secondary">
                        Exercises
                    </h2>
                </div>
                <Item.Group divided>
                    {workouts.current.exercise.map(exercises => 
                    <Exercises key={exercises._id} exercise={exercises} />
                    )}
                </Item.Group>
                </Container>
            </main>
        </>
        
    )
}

export default SelectedWorkout
