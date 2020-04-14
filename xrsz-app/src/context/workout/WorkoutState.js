import React, { useReducer } from 'react';
import WorkoutContext from './workoutContext';
import workoutReducer from './workoutReducer';
import { 
    ADD_WORKOUT,
    DELETE_WORKOUT,
} from '../types';
// initial state and actions to perform 
const WorkoutState = props => {
    const initialState = {
        workout: [
            {
                id: 1,
                name: " 5-Minute Plank Finisher",
                time: 6,
                type: 'Endurance',
                goodFor: ['core', 'stability'],
                exersize: [
                    {title: "Plank Alt leg lifts", description: "lift legs altenately", time: 1},
                    {title: "High Plank", description: "on all 4 hands and feet"},
                    {title: "Side Plank Knee Drive", description: "One side then other"},
                    {title: "Plank Saws", description: "do some shit"},
                    {title: "Plank Wraps", description: "do some more shit"},
                    {title: "High Plank", description: "lift legs altenately"},
                ]
            },
            {
                name: "Quick Core Crush",
                time: 10,
                type: 'Strength',
                goodFor: ['core', 'Quick Burn'],
                exersize: [
                    {title: "High Plank", description: "lift legs altenately", time: 1},
                    {title: "Reverse Crunch", description: "on all 4 hands and feet"},
                    {title: "Flutter Kicks", description: "One side then other"},
                    {title: "Full Sit-Ups", description: "do some shit"},
                    {title: "Single Leg Toe Touches", description: "do some more shit"},
                    {title: "Single Leg Toe Touches", description: "lift legs altenately"},
                    {title: "Reverse Crunch", description: "lift legs altenately"},
                    {title: "Double Leg Toe Touches", description: "lift legs altenately"},
                    {title: "Single Leg Sit-Up", description: "lift legs altenately"},
                    {title: "Plank Saws", description: "lift legs altenately"},
                    {title: "Reverse Crunch", description: "lift legs altenately"},
                    {title: "Sit Up Twist", description: "lift legs altenately"},
                    {title: "Sit Up Twish", description: "lift legs altenately"},
                    {title: "Up Dog", description: "lift legs altenately"}
                ]
            },
            {
                id: 2,
                name: "Bi's and Tri's",
                time: 3600,
                type: 'Strength',
                goodFor: ['Arms', 'UpperBody Strength'],
                exersize: [
                    {title: "Walkout to Push-Up", description: "lift legs altenately", time: 1},
                    {title: "Down Dog", description: "on all 4 hands and feet"},
                    {title: "Diamond Push-Ups", description: "One side then other"},
                    {title: "Tricep Kickbacks", description: "do some shit"},
                    {title: "Modified Push-Ups Low Hold", description: "do some more shit"},
                    {title: "Rest", time: 10},
                    {title: "Tricept Kickbacks", description: "lift legs altenately"},
                    {title: "Down Dog", description: "lift legs altenately"},
                    {title: "Diamond Push-Ups", description: "One side then other"},
                    {title: "Tricept KickBacks", description: "One side then other"},
                    {title: "Rest", time: 10},
                    {title: "Reverse Curls", description: 'curl with palms facing out'},
                    {title: "Hammer Curls", description: 'like you have a hammer'},
                    {title: "Alternating Bicep Curls", description: 'one hand at a time'},
                    {title: "Reverse Curls", description: 'curl with palms facing out'},
                    {title: "Hammer Curls", description: 'like you have a hammer'},
                    {title: "Alternating Bicep Curls", description: 'one hand at a time'},
                ]
            }
        ]
    };
    // state allows us to access anything in our state, dispatch allows us to dispatch objects to the reducer
    const [state, dispatch] = useReducer(workoutReducer, initialState);

    //Add Workout 

    //Delete Workout

    return (
        //Provider pass in anthing we want available to entire app
        <WorkoutContext.Provider
        value={{
            workout: state.workout
        }}>
            { props.children }
        </WorkoutContext.Provider>
    )
};

export default WorkoutState;