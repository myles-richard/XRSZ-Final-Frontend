import React, {useContext} from 'react'
import AuthContext from '../../../context/auth/authContext';
import Workouts from '../../workouts/Workouts';

const SavedWorkout = (props) => {

    const authContext = useContext(AuthContext);
    
    //take methods out of authcontext
    const { user } = authContext;

    //user 
    const { savedWorkouts } = user;

    // useEffect(() => {
    //     getUser();
    //     // eslint-disable-next-line
    // }, [authContext])

    return (
        <>
        <div className='saved-workoutpage'>
            <div className="u-left-text u-margin-bottom-big">
                <h3 className="heading-secondary">
                    Saved Exercises
                </h3>
            </div>
                <Workouts workouts={savedWorkouts}/>
        </div>
        </>
    )
}

export default SavedWorkout

