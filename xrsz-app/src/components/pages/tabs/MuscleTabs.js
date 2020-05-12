import React, { useContext, useEffect } from 'react'
import { Tab } from 'semantic-ui-react';
import Workouts from '../../workouts/Workouts';
import WorkoutContext from '../../../context/workout/workoutContext';


const MuscleTabs = () => {

// gives us access to any state or method or actions associated with this context 
const workoutContext = useContext(WorkoutContext)

const { workout, getWorkouts } = workoutContext;

useEffect(() => {
    getWorkouts();
    // eslint-disable-next-line
}, [])


const core= [];
const upperBody = [];
const lowerBody = [];

 
for(let workouts of workout) {
    if(workouts.type.includes('Core')) {
        core.push(workouts)
    } else if(workouts.type.includes('UpperBody')){
        upperBody.push(workouts)
    } else if(workouts.type.includes('LowerBody')){
        lowerBody.push(workouts)
    }
}

const panes = [


  {
    menuItem: 'Core',
    render: () => <Tab.Pane attached={false}><Workouts workouts={core}/></Tab.Pane>,
  },
  {
    menuItem: 'Upper Body',
    render: () => <Tab.Pane attached={false}><Workouts workouts={upperBody} /></Tab.Pane>,
  },
  {
    menuItem: 'Lower Body',
    render: () => <Tab.Pane attached={false}><Workouts workouts={lowerBody} /></Tab.Pane>,
  },
]
    return (
        <Tab className="tab-box"  menu={{ secondary: true, pointing: true }} panes={panes} />
      )
}

export default MuscleTabs