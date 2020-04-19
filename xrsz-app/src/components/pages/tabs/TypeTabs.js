import React, { useContext, useEffect } from 'react'
import { Tab } from 'semantic-ui-react';
import Workouts from '../../workouts/Workouts';
import WorkoutContext from '../../../context/workout/workoutContext';


const TypeTabs = () => {

// gives us access to any state or method or actions associated with this context 
const workoutContext = useContext(WorkoutContext)

const { workout, getWorkouts } = workoutContext;

useEffect(() => {
    getWorkouts();
    // eslint-disable-next-line
}, [])


const stability= [];
const core = [];
const lowerBody = [];
console.log(workout)
 
for(let workouts of workout) {
    console.log(workouts)
    if(workouts.goodFor.includes('stability')) {
        stability.push(workouts)
    } else if(workouts.goodFor.includes('core')){
        core.push(workouts)
    } else if(workouts.goodFor.includes('LowerBody')){
        lowerBody.push(workouts)
    }
}

const panes = [


  {
    menuItem: 'Stability',
    render: () => <Tab.Pane attached={false}><Workouts workouts={stability}/></Tab.Pane>,
  },
  {
    menuItem: 'Endurance',
    render: () => <Tab.Pane attached={false}><Workouts workouts={core} /></Tab.Pane>,
  },
  {
    menuItem: 'Mobility',
    render: () => <Tab.Pane attached={false}><Workouts workouts={lowerBody} /></Tab.Pane>,
  },
]
    return (
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      )
}

export default TypeTabs;