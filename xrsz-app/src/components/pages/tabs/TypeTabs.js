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
const mobility = [];
const endurance = [];

 
for(let workouts of workout) {
    
    if(workouts.goodFor.includes('Stability')) {
        stability.push(workouts)
    } else if(workouts.goodFor.includes('Mobility')){
        mobility.push(workouts)
    } else if(workouts.goodFor.includes('Endurance')){
        endurance.push(workouts)
    }
}

const panes = [


  {
    menuItem: 'Stability',
    render: () => <Tab.Pane attached={false}><Workouts workouts={stability}/></Tab.Pane>,
  },
  {
    menuItem: 'Endurance',
    render: () => <Tab.Pane attached={false}><Workouts workouts={mobility} /></Tab.Pane>,
  },
  {
    menuItem: 'Mobility',
    render: () => <Tab.Pane attached={false}><Workouts workouts={endurance} /></Tab.Pane>,
  },
]
    return (
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      )
}

export default TypeTabs;