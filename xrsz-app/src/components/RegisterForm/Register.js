import React, { useState } from 'react';
import { Form,Grid } from 'semantic-ui-react';

const Register = () => {
//add component level state
const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
})

const { name, email, password, confirmPassword } = user;

//handl Change
const handleChange = (e, {name, value }) => setUser({ [name]: value });

//onSubmit 
const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register submit')
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