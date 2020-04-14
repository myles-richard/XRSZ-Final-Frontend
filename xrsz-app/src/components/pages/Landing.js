import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
    return (
        <div>
            <h1>Landing page</h1>
            <Grid container centered={true} divided>
                <Grid.Row stretched >
                    <Grid.Column >
                        <h1>im hungry</h1>
                        <Image size='large' src="https://picsum.photos/200" />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row stretched columns='two' divided>
                    <Grid.Column>
                        <Button as={Link} to="/register">Register </Button>
                    </Grid.Column>
                    <Grid.Column>
                    <Button as={Link} to="/login">Login </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Landing;