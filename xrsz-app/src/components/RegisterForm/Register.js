import React, { useState, useContext, useEffect } from 'react';
import { Form,Grid } from 'semantic-ui-react';
import AuthContext from '../../context/auth/authContext';



const Register = props => {
    //initialize auth context so can access state here
    const authContext = useContext(AuthContext)

    // take signUp method out of authContext 
    const { signUp, isAuthenticated } = authContext;

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/workout')
        }
        
    },[isAuthenticated, props.history]);

    //add component level state
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })


    const { name, email, password, confirmPassword } = user;

    //handl Change
    // setUser object grabs the current vaule of user, get name attribute and set it to value
    const handleChange = (e) => setUser({...user, [e.target.name]: e.target.value });

    // handleSubmit 
    const handleSubmit = (e) => {
        e.preventDefault();
        // if(password !== confirmPassword) {

        // }
        let newUser = {
            name,
            email,
            password,
        }
        signUp(newUser)
    }

return (
    <Grid container >
            <Grid.Column width='8' >
                <h1>Sign Up</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Input required
                        fluid
                        label='Username'
                        placeholder='name'
                        id='form-input-name'
                        name='name'
                        value={name}
                        onChange={handleChange}
                    />
                    <Form.Input required
                        fluid
                        label='Email'
                        placeholder='email'
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
                        <Form.Input required 
                        fluid
                        label='Confirm Password'
                        placeholder='confirm password'
                        name='confirmPassword'
                        value={confirmPassword}
                        type="password"
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
                    >Create Account</Form.Button>
                </Form>
            </Grid.Column>
    </Grid>
    

    )
}

export default Register;