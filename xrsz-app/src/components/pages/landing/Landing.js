import React from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './_landing.scss';

const Landing = () => {
    return (
        <header className="headers">
            <div className="headers__textbox">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">XRSZ</span>
                </h1>
                <div style={{paddingBottom: 10}}>
                    <Button className=" button--white button--animated"  fluid size='large' as={Link} to="/register">Register </Button>
                </div>
                <Button className="button--white  button--animated"  fluid size='large' as={Link} to="/login">Login </Button>
                
            </div>
        </header>
    )
}

export default Landing;