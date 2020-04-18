import React, { useState, useContext, useEffect } from 'react';
import { Form,Grid } from 'semantic-ui-react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';


const Login = (props) => {

const authContext = useContext(AuthContext)
const alertContext = useContext(AlertContext)

// take signUp method out of authContext 
const { login, error, isAuthenticated } = authContext;

const { setAlert } = alertContext;

useEffect(() => {
    if(isAuthenticated) {
        props.history.push('/workout')
    }

    if (error === 'Invalid Credentials') {
        setAlert(error);
    }
    
},[isAuthenticated, props.history]);


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
        setAlert('Please fill in all fields')
    } else {
        login({
            email,
            password
        })
    }
};

return (
    <Grid container >
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
                    //     disabled={!name
                    //     || !password
                    //     || !confirmPassword
                    //     || !email
                    //   }
                    >Login</Form.Button>
                </Form>
            </Grid.Column>
    </Grid>
    

    )
}

export default Login;