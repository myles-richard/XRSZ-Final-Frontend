import React from 'react'
import { Grid, Image, Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
    return (
        <div className="headers">
            {/* <h1>Landing page</h1> */}
            {/* <Grid container  > */}
                {/* <Grid.Row stretched > */}
                    {/* <Grid.Column  > */}
                        {/* <h1>im hungry</h1> */}
                        {/* <Image size='large' src={require("../../images/xrszbluelogo.png")} /> */}
                        {/* <Grid.Row> */}
                        <Container className="textbox">
                            <div style={{ paddingBottom: 10}}>
                                <Button  fluid size='large' as={Link} to="/register">Register </Button>
                            </div>
                            <div>
                                <Button  fluid size='large' as={Link} to="/login">Login </Button>
                            </div>
                        </Container>
                        
                        {/* </Grid.Row> */}
                    {/* </Grid.Column> */}
                {/* </Grid.Row> */}
                {/* <Grid.Row stretched columns='two' divided>
                    <Grid.Column>
                        <Button as={Link} to="/register">Register </Button>
                    </Grid.Column>
                    <Grid.Column>
                    <Button as={Link} to="/login">Login </Button>
                    </Grid.Column>
                </Grid.Row> */}
            {/* // </Grid> */}
        </div>
    )
}

export default Landing;