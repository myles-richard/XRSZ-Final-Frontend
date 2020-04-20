import React from 'react'
import { Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
    return (
        <div className="headers">
            <Container className="textbox">
                <div style={{ paddingBottom: 10}}>
                    <Button  fluid size='large' as={Link} to="/register">Register </Button>
                </div>
                <div>
                    <Button  fluid size='large' as={Link} to="/login">Login </Button>
                </div>
            </Container>
        </div>
    )
}

export default Landing;