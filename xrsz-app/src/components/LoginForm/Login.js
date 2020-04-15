import React, { useState, useContext, useEffect } from 'react';
import { Form,Grid } from 'semantic-ui-react';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {

const authContext = useContext(AuthContext)

// take signUp method out of authContext 
const { login, isAuthenticated } = authContext;

useEffect(() => {
    if(isAuthenticated) {
        props.history.push('/workout')
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
    login({
        email,
        password
    })
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