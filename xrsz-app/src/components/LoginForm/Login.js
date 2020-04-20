import React, { useState, useContext, useEffect } from 'react';
import { Form,Grid } from 'semantic-ui-react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import './Login.css';


const Login = (props) => {

const authContext = useContext(AuthContext)
// bring in alert beacause if its invalit we want to show alert 
const alertContext = useContext(AlertContext)

// take login method out of authContext 
const { login, error, isAuthenticated } = authContext;

const { setAlert } = alertContext;
// checking to see if authenticated and for the error of invalid credentials 
useEffect(() => {
    if(isAuthenticated) {
        props.history.push('/workout')
    }

    if (error === 'Invalid Credentials') {
        setAlert(error);
    }
    // eslint-disable-next-line
},[error, isAuthenticated, props.history]);


//add component level state
const [user, setUser] = useState({
    email: '',
    password: '',
})

const { email, password } = user;

//handl Change
const handleChange = (e) => setUser({...user, [e.target.name]: e.target.value });

//onSubmit 
const handleSubmit = (e) => {
    e.preventDefault();
    if(email === '' || password === '') {
        setAlert('Please fill in all fields');
    } else {
        login({
            email,
            password
        });
    }
};

const onClick = () => {
    props.history.push("/")
}

return (
    <Grid  className="container">
            <Grid.Column width='8' >
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Input required
                        fluid
                        label='Email'
                        placeholder='Email'
                        id='form-input-email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                    />
                    <Form.Input required
                        fluid
                        label='Password'
                        placeholder='password'
                        name='password'
                        value={password}
                        type="password"
                        minLength={4}
                        onChange={handleChange}
                    />
                    <Form.Button
                        fluid
                        type="submit"
                    >Login</Form.Button>
                    <Form.Button
                        fluid
                        type="back"
                        onClick={onClick}
                    >Back</Form.Button>
                </Form>
            </Grid.Column>
    </Grid>
    

    )
}

export default Login;