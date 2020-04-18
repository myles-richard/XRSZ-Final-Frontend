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
}, [])


const core= [];
const upperBody = [];
const lowerBody = [];
console.log(workout)
 
for(let workouts of workout) {
    console.log(workouts)
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
    menuItem: 'Tab 1',
    render: () => <Tab.Pane attached={false}><Workouts workouts={core}/></Tab.Pane>,
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached={false}><Workouts workouts={upperBody} /></Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane attached={false}><Workouts workouts={lowerBody} /></Tab.Pane>,
  },
]
    return (
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      )
}

export default MuscleTabs