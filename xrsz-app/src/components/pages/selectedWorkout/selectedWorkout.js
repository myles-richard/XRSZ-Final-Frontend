import React, { useContext } from 'react'
import WorkoutContext from '../../../context/workout/workoutContext';


const selectedWorkout = (props) => {

    // const workoutContext = useContext(WorkoutContext);
    
    // const { setCurrent, current, workoutOpen } = workoutContext

     // const workoutContext = useContext(WorkoutContext);

    // const { current, } = workoutContext
    // const { name, description } = workouts;

    // useEffect(() => {
    //     if(current !== null) {
    //         setWorkouts(current)
    //     } else {
    //         setWorkouts({
    //             name: '',
    //             description: ''
    //         });
    //     }
    // }, [workoutContext, current])

    // const [workouts, setWorkouts] = useState({
    //     name,
    //     description
    // })
    console.log('about', props.location.state)
    const workouts = props.location.state;
    return (
        
        <div>
            <h1>Selected workout </h1>
            <p>{workouts.current.name}</p>
            <p>{workouts.current.description}</p>
            <p>{workouts.current.time}</p>
            <p>{workouts.current.type}</p>
          
        </div>
    )
}

export default selectedWorkout
