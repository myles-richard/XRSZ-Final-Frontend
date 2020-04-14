import React from 'react';
import { Reveal,Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Workout.css'

export const Workout = () => {
    return (
        <div className="container">
            <h1>Workout page</h1>
            <p>Workout type</p>
            <Segment>
                <Reveal animated='move up'>
                    <Reveal.Content visible>
                    <Image src='https://picsum.photos/200' size='medium' />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <ul>
                            <Link to="/musclegroup">Arms  </Link>
                            <li>Core</li>
                            <li>Lower Body</li>
                        </ul>
                    </Reveal.Content>
                </Reveal>
            </Segment>
            <Segment>
                <Reveal animated='move up'>
                    <Reveal.Content visible>
                    <Image src='https://picsum.photos/200' size='medium' />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <ul>
                            <li>Upper Body</li>
                            <li>Core</li>
                            <li>Lower Body</li>
                        </ul>
                    </Reveal.Content>
                </Reveal>
            </Segment>
        </div>
    )
}

export default Workout;
