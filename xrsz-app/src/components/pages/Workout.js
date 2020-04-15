import React, { useContext, useEffect } from 'react';
import { Reveal,Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

import './Workout.css'

export const Workout = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.getUser();
        //es-lint-disable-next-line
    }, [])
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
